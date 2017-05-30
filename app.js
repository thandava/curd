var express=require('express');
var dataRouter = require('./routers/dataRouter');
var app=express();
var bodyparser= require('body-parser');
var path = require('path');
var config = require('./webpact.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
app.use(express.static('./dist'));
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler,{noInfo:true ,publicPath:config.output.publicPath}))
app.use(webpackHotMiddleware(compiler));
//app.use(express.static('public'));
app.listen(3000,function()
{
	console.log('Server started');
});
app.use(bodyparser.json());
app.use('/bye',dataRouter);
app.use('/',function(req,res){
	res.sendFile(path.resolve('client/index.html'))
});
