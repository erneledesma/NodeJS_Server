var onReady = function () {
	$('#enviar-mensaje').on('click', clickHander);
}

var clickHander = function(){
	console.log( $('#mensaje').val() );

	var xhr = $.post('/mensajes/new', {
		 		mensaje : $('#mensaje').val()
	 });

		xhr.done(function(data){
			console.log('mensajes del servidor con exito', data);
		});

		xhr.fail(function (data){
			console.log(data)
			throw 'Error';
		});
	}

$(document).on('ready', onReady);
