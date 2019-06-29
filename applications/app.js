var express = require('express');

var app = express();

app.get('/', (req, res)=>{
    res.render('index.ejs');
});

app.get('/stream', (req, res)=>{
    res.setHeader('Content-Type', 'Text/html');
    res.send('Stream Page');
});

app.use((req, res)=>{
    res.setHeader('Content-Type', 'Text/html');
    res.status(404).send('Page Introuvable');
});

app.listen(5000);