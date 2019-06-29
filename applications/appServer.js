let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let session = require('express-session');
//Set Moteur engine to ejs file
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
    secret : 'secrectKey',
    resave : false,
    saveUninitialized: true,
    cookie: {secure: false}
}));

// Routes
app.get('/', (req, res)=>{
    if(req.session.error){
        res.locals.error = req.session.error;
        req.session.error = undefined;
    }
    res.render('salut');
});

// Data formulaire
app.post('/',(req, res)=>{
    if(req.body.message === undefined || req.body.message ==='' ){
        req.session.error = "Il ya une erreur" ; // definr cle error
        res.redirect('/');
        //res.render('salut', {error : 'Message Vide'});
    }
});

app.listen(5000);