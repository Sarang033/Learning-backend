const http=require('http');
const fs=require('fs');


const server=http.createServer((req,res)=>{
    console.log("Request has been made from browser to server");


    // res.setHeader('Content-type','text/html');
    // res.write('<h1>Hello, Sarang! :<h1>');
    // res.end();
    fs.readFile('./random.html',(err,fileData)=>{
        if(err){
            console.log(err);
        }else{
            res.write(fileData);
            res.end();
        }
    })

});

server.listen(3000, 'localhost',()=>{
    console.log("server is listening on port 3000");
});
