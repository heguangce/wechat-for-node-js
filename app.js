
var http = require('http');

var wechat = require('./wechat');
http.createServer(function (req, res) {
    wechat.process(req, res);
}).listen(80);

/*
实现自定义消息处理器
var myMsgHandler = require('./myMsgHandler');
http.createServer(function (req, res) {
    wechat.process(req, res,myMsgHandler);
}).listen(3000, "127.0.0.1");
*/

/*
实现自定义请求过滤类型
http.createServer(function (req, res) {
    wechat.process(req, res,null,'/mywechat/');
}).listen(3000, "127.0.0.1");
*/
