var http = require('http'); // import http lib

var server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<html>'+
        '<head>'+
            '<title>NodeJS</title>'+
        '</head>'+
        '<body>'+
            '<h1>Multiline Response</h1>'+
            '<h2>Secondd Ligne</h2>'+
        '</body>'+
        '</html>'
    );
    res.end();
});
server.listen(5000);
