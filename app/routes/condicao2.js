module.exports = function(app){

	app.post('/experimento2',function(req, res){
		app.app.controllers.enviar.experimento2(app,req,res);
		
	});

	app.post('/enviar2',function(req, res){
		app.app.controllers.enviar.enviar2(app,req,res);
		
	});

	app.post('/enviar2S30',function(req, res){
		app.app.controllers.enviar.enviar2S30(app,req,res);
		
	});
	app.post('/enviar2S80',function(req, res){
		app.app.controllers.enviar.enviar2S80(app,req,res);
		
	});
	app.post('/info2',function(req, res){
		app.app.controllers.condicao2.info2(app,req,res);
		
	});

	app.post('/buscaSujeito2',function(req, res){
		app.app.controllers.condicao2.buscaSujeito2(app,req,res);
		
	});

}