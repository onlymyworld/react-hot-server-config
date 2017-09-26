const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const port =80;
const app = express();


// var target = 'http://127.0.0.1';	//本地
var target = 'http://10.109.4.36:8080';  //远程


app.use(express.static(__dirname+"/"));
const broserHistory = true;

app.use('/',proxy({target:target,changeOrigin:true}));
if(broserHistory){
	app.get('*',function(request,response){
		response.sendFile(path.resolve(__dirname,'index.html'))
	})
}

app.listen(port);