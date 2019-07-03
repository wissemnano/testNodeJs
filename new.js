
var express = require('express');
var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);
var fs = require('fs');



app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

//server.use();
// Chargement du fichier index.html affiché au client
app.get('/',(req, res)=>{
    res.render('./index');
})

app.get('/image', (req, res) => {
    res.sendFile(__dirname+'/public/img/1.jpg');
});
// Chargement de socket.io

/* Test client Connection
// Quand un client se connecte, on le note dans la console
io.on('connection', function (socket) {
    console.log('Un client est connecté !');
});
*/


io.on('connect', (client)=>{
    console.log('Client Connecting');
    client.on('join', (data)=>{
        console.log(data);
        client.emit('message', 'Thats the server');
    });
});

io.on('connection', (socket) =>{
    fs.readFile(__dirname+'/public/img/1.jpg' , (err , buff) =>{
        socket.emit('image', {image : true, buffer : buff.toString('base64')});
        console.log('image file is initialized');
    });
});

server.listen(8080);