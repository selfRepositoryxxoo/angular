var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var mime = require('mime');
var books = [
    {name: 'node', count: 3, price: 37,id: 1},
    {name: 'angular', count: 2, price: 70,id: 2},
    {name: 'vuejs', count: 3, price: 90, id:3},
    {name: 'reactjs', count: 5, price: 10,id: 4},
    {name: 'es5', count: 7, price: 30, id:5}
]
http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    if (pathname == '/') {
        res.setHeader('content-type', 'text/html;charset=utf8');
        fs.createReadStream('./11.book.html').pipe(res);
    } else if (pathname=='/books'){
        if (fs.existsSync('.' + pathname)) {
            res.setHeader('content-type', mime.lookup(pathname) + ';charset=utf8');
            fs.createReadStream('.' + pathname).pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }
    }
}).listen(3000);
