var express = require('express');

app = express();

// route pour lister 
app.get('/',(req, res)=>{
    res.render("liste.ejs");
});

// route for add liste

app.post('/add', (req, res)=>{
    res.render('liste.ejs');
});

// route for Delete item

app.get('/delete',(req, res)=>{
    res.render('liste.ejs');
});

app.use((req, res)=>{
    res.setHeader('Content-Type', 'Text/plain');
    res.status(404).send('Page Introuvable');
});
app.listen(5000);