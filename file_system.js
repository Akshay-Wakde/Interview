const fs = require('fs');

// fs.writeFile("./file.txt","Hi there",(err)=>{
//    if(err){
//      console.log(err);
//    }
// });


fs.appendFile("test.txt", 'This is a new line of text.\n',(err)=>{
   if(err){
     console.log(err);
   }
});

fs.readFile('./test.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
});