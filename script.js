var express = require('express');
var app = express();

const path = require('path');
const server = require('http').Server(app);

const io = require('socket.io')(server);
const cv = require('opencv4nodejs');

/* Create opencv video capture object*/
var wCap = new cv.VideoCapture(0);

/* resizing opencv videoCapture */
wCap.set(cv.CAP_PROP_FRAME_WIDTH, 480);
wCap.set(cv.CAP_PROP_FRAME_HEIGHT, 320);

/* Set nbr Frame per second*/
const FPS = 50;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index');
});

setInterval(()=>{
    var frame = wCap.read();
    var image = cv.imencode('.jpg', frame).toString('base64');
    io.emit('message', image);
}, 1000);

app.listen(5000);
