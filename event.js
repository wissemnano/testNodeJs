// crrer un evennement sur le close de server

var http = require('http');

var server = http.createServer((req, res)=>{
    res.writeHead(200);
    res.end('Salut Server');
});

server.on('close', () =>{
    console.log('Server Closed');
})
server.listen(5000);
server.close();