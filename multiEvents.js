/* ----------- gestion des evennemments ------------
------ Multi events----------
---------------------------------------------------*/

var http = require('http');
// import le mosule EventEmitter 
var EventEmitter = require('events').EventEmitter;
// create un EventEmittter object
var jeu = new EventEmitter();
jeu.on('gameover',(message) =>{
    console.log(message);
});
jeu.emit(' hhhhhhhhhh');