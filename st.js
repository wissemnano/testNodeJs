// import modules
var express = require('express');
var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);
var fs = require('fs');

var cv = require('opencv4nodejs'); 


app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

// create a videoCapture object
wCap = new cv.VideoCapture(0);

// create app server
app.get('/',(req, res)=>{
    res.render('./chat');
})


setInterval( () =>{
    var frame = wCap.read();
    var img = cv.imencode('.jpg', frame).toString('base64');
    //console.log(img);
    /*
    fs.readFile(img , (err , buff) =>{
        io.emit('image', {image : true, buffer : buff.toString('base64')});
    });
    */
   io.emit('image', img);
}, 10);

// add commit
server.listen(8080);