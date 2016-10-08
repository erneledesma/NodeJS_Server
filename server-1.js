var express = require('express');
var app = express();
var mensajes = [];


app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index2.html');
});

app.get('/mensajes/new/:mensaje', function (req, res) {
	mensajes.push(req.params.mensaje);

 
	res.send('Tu Mensaje es: '+ req.params.mensaje);
});

app.get('/mensajes/list', function (req, res) {
			res.send(mensajes);

});

app.listen(3000);
console.log("Aplicacion corriendo en NodeJS\n  => http://localhost:3000/\nCTRL + C to shutdown");
