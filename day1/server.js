const http= require("http");
  const fs= require("fs");
  const url=require("url");


  const server=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico")return res.end();
    const log=`${Date.now()} url:${req.url} request approved\n`
    const myUrl=url.parse(req.url,true)
    console.log(myUrl);
    fs.appendFile('log.txt',log,(error,data)=>{
        if(error){
            console.log(error);
        }else{
            switch(myUrl.pathname){
                case "/": res.end("you are in home page");
                break;
                case "/contactus/":res.end("our contact no is 7028321199");
                break;
               
                case "/about/": res.end("hello we all are swe engineer ");
                break;
                default:
                    const username=url.query.myname;
                    res.end(`hey${username}`);
            }
        }
    })
  });
 server.listen(7000,()=>{
     console.log("Server Started !")
  })
