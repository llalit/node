var express = require('express');
var app = express();

app.use(express.static('public'));
var body = require('body-parser');
var url = require('url');
var path = require('path');


app.get("/",(req,res)=>{
	res.send("hello welcome to this site <a href='/1'>limk</a>")
});


app.get("/1",(req,res)=>{
	res.send("hello world <a href='/register'>link</a>");
});

app.get('/register',function(req,res){
	res.sendFile(path.join(__dirname+"/public/register.html"));
});

app.get('/login',(req,res)=>{
	res.sendFile(__dirname+"/public/login.html");
});

var server = app.listen(8080,()=>{
	var host = server.address().address
	var port = server.address().port
	console.log("example app listen on port",host,port)
});
