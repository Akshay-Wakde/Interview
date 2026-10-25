import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { S3Client, DeleteObjectsCommand } from "@aws-sdk/client-s3";

const dbClient = DynamoDBDocument.from(new DynamoDBClient({}));
const s3Client = new S3Client({});

const TABLE_NAME = "YourTableName";
const BUCKET_NAME = "YourBucketName";

export const cleanup = async () => {
    try {
        // 1. Calculate the date for exactly 7 days ago (YYYY-MM-DD)
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() - 7);
        const dateString = targetDate.toISOString().split('T')[0];

        console.log(`Searching for files created on: ${dateString}`);

       // 1. Query GSI: Date is 7 days ago, isFileDelete is true, and deleted is "no"
       const { Items } = await dbClient.send(new QueryCommand({
            TableName: TABLE_NAME,
            IndexName: "createdDate",
            KeyConditionExpression: "createDate = :dateVal",
            FilterExpression: "isFileDelete = :delVal AND deleted =  :statusVal",
            ExpressionAttributeValues: {
                ":dateVal" : dateString,
                ":delVal" : true,
                ":statusVal": "no",
            }
       }))

       if(!Items?.length) return { message : "No records to be deleted."};

       //Perform S3 files deletion.
       const s3Keys = Items.map(item=>({ Key: item.fileKey}));
       const s3Response = await s3Client.send(new DeleteObjectsCommand({
            Bucket: BUCKET_NAME,
            Delete: { Objects: s3Keys }
       }));

       //3.Confirm Deletion and Update DynamoDB.
       //We only update Records for keys s3 confirmed as deleted.

       const successfullyDeletedKeys = s3Response.Deleted.map(d=>d.Key);

       const updatePromises = Items.filter(item=>successfullyDeletedKeys.includes(items.fileKey))
                                    .map(item=>dbClient.send(new UpdateCommand({
                                        TableName: TABLE_NAME,
                                        Key: { id : item.id },
                                        UpdateExpression: "SET deleted = :yes",
                                        ExpressionAttributeValues: {
                                            ":yes" : "yes",
                                        }
                                    })));

                                    await Promise.all(updatePromises);

                                    return { statusCode: 200, deletedCount: successfullyDeletedKeys.length };

    }catch(err){
        console.error("Cleanup Error:", error);
        throw error; // Triggers DLQ
    }
}