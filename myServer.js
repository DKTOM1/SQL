var http = require('http');
var url = require('url');
var querystringg = require('querystring');

function Start() {
    var server = http.createServer(function (req, res) {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });
        var value = "";
        req.on('data', function (data) {
            value += data;
        });
        req.on('end', function () {
            var querystring = querystringg.parse(value);
            res.write("我的名字是:" + querystring['myName'] + '我的年龄是:' + querystring['myAge']);
            res.end();
        })
    });
    server.listen(3002, '127.0.0.1');
}
exports.Start = Start;