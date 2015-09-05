var express = require('express'),
		swig = require('swig'),
		cons = require('consolidate');

var app = express();
// inicializa las vistas de swig
	swig.init({
		cache : false
	});

	//inicializa los templets
	// vistas de Engine
	app.engine('.html', cons.swig);
	app.set('view engine','html');
	app.set('views', './views');//creamos un folder para las vistas

//Staic file
	app.use( express.static('./public'));

	//para recibir Post
	app.use( express.bodyParser() );
	app.use( express.cookieParser() );

var mensajes = [],
		ress = [];

app.get('/', function(req, res) {
  	res.render('home');
});

app.post('/mensajes/new', function (req, res) {
	mensajes.push(req.body.mensaje);

	ress.forEach(function (res) {
		res.send(mensajes+'<script>window.location.reload()</script>');
	});

	res.send('Tu mensaje es: '+ req.body.mensaje);
});

app.get('/mensajes/list', function (req, res) {
			ress.push(res);

});

app.listen(3000);
console.log("Express server running at\n  => http://localhost:3000/\nCTRL + C to shutdown");
