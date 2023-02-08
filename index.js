const fs=require("fs");
const http=require("http");
const port=2000;
const hostname="localhost";
const home=fs.readFileSync("./index.html","utf-8");
const server=http.createServer((req,res)=>{
if(req.url==='/'){ 
return res.end(home);
}
if(req.url==='/about'){ 
return   res.end("<h1>about section</h1>");
}

if(req.url==='/service'){ 
return res.end("<h1>service section</h2>");
}
if(req.url==='/contact'){ 
return   res.end("<h1>contact section</h2>");

}
else{ 
    return   res.end("<h1>404 page not found</h2>");
    }

}
);
server.listen(port,hostname,()=>
{
    
console.log(`The port is http://${hostname}:${port}`);
}
);
