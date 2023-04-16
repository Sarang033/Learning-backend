const express=require('express');

const app=express();

app.listen(3000);

app.get('/',(req,res)=>{
    res.send("Hello world")
});

app.get('/about',(req,res)=>{
    res.sendFile('./about.html',{root:__dirname})
});

//Redirects

app.get('/about-us',(req,res)=>{
    res.redirect('/about')
});

//404 Page

app.use((req,res)=>{
    res.status(404).sendFile('./404.html',{root:__dirname});
});



