const fs = require("fs");
// console.log(fs);

// fs.writeFileSync("./hello.txt","hello",);
//hello.txt file created with hello inside it

// fs.writeFile("./helloNotfromSync","helloNotfromSync",(err)=>{err})
//helloNotfromSync.txt file created with helloNotfromSync inside it

// const fileData=fs.readFileSync("./hello.txt","utf-8");
// console.log(fileData);
//result: hello 

// fs.readFile("./hello.txt","utf-8",(err,data)=>{
//          if(err){
//             console.log(err);
//          }else{
//             console.log(data);
//          }
//     })

//delete file 
// fs.unlink("filename");

// fs.copyFileSync("./hello.txt","./datacopy.txt");

//append file 
// fs.appendFileSync("./file.txt",new Date().getTime().toLocaleString());

// const stat=fs.stat("./hello.txt");
// console.log(stat);

// const stat=fs.statSync("./contact.txt").isFile();
// console.log(stat);  // true 

//make directory
// fs.mkdir("./about/us/me",{recursive:true});




