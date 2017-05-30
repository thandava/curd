var express=require('express');

var app=express();

app.listen(3000,function()
{
	console.log('Server started');
});

app.get('/',function(req,res){
	res.send('Hello From Thandava')
});

app.get('/books',function(req,res){
	res.send('Hello From Books')
});