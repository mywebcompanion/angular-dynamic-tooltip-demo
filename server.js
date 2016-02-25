/**
 * Created by ARUN on 24/2/2016.
 */

var express = require('express');
var path = require('path');

var PORT   = 8006;
var app = express();
app.use(express.static(path.resolve(__dirname + '/public')));

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname + '/public/index.html'));
});
app.get('/product', function(req,res){
    res.json({product:'mayuri'});
});

app.listen(PORT,function(){
    console.log("Application listening in port " + PORT);
});