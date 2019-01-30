var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');

server.listen(process.env.PORT || 9999, function(){
console.log("Servidor conectedado. Escuchando en el puerto: " + (process.env.PORT || 9999));
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
app.use( express.static(__dirname + '/front' ) );
app.get('/test', function(req,res){ //example http request receiver
return res.send(myTestVar);
});
//send the index.html on every page refresh and let angular handle the routing
app.get('/*', function(req, res, next) {
console.log("Reloading");
res.sendFile('index.html', { root: __dirname });
});
// npm install para instalar las dependencias
