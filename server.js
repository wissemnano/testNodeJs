var http = require('http');

var server = http.createServer((req, res) =>{
    res.writeHead(200,{"Content-Type": "text/html"});
    res.end('<h1>Salut tout le monde</h1>');
});

server.listen(5000);

/* Other Method de communication
var clientConnect = function(req, res){
    res.writeHead(200)
    res.end('Salut Visiteur');
};

var server = http.createServer(clientConnect);
server.listen(5000);
remaruqe le res.writeHead(), prend plusieurs parametres:
** indication sur la connection : 200 (connection ok)
** on peut précisie le type de response: html, image, text, video..

*/