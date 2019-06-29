var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer((req, res)=>{
    var page = url.parse(req.url).pathname; // recuperer URL saisie par visiteurs
    var params = querystring.parse(url.parse(req.url).query);
    //console.log(page);
    res.writeHead(200, {"Content-Type":"text/html"});
    
    if(page == '/'){
        res.write("Page Acceille");
        if('prenom' in params){
            res.write('<br>Bonjour '+params['prenom']);
    }
    else{
        res.write("<h3> Salut </h3>");
    }
    
   
   }
    
    res.end();
});

server.listen(5000);