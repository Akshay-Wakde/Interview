What is primary key, partition key , sort key , partitions?
-Primary key = Partition key || partition key + sort key;
-Partition key get its name due to inner name of working dynamo , dynamo take its key and value as its input to hashing functions , and the output of this hashing functions is physical location in one of the dynamo db location

1 Item = 400KB

Table Creation
-Table Name
-Partition key (Manadatory Primary key) 
- this key is input to the hashed function and hashed function output know address of this key storage.
- It is the hash value that is used to retrieve items from your table and allocate data across host for scalability and avaibility,

-Sort Key (Optional)
- Its second primary key , its allows you to sort or search amoung all items sharing the same partition key.
- Equal to, Less than or equal to, Less than, Greater than or equal to,  Greater than, Between, Begins with

- What is local secondary index ?
 - 

