module.exports = function(app){

	app.post('/experimento2F1',function(req, res){
		app.app.controllers.enviar.experimento2F1(app,req,res);
		
	});
	app.post('/experimento2F2',function(req, res){
		app.app.controllers.enviar.experimento2F2(app,req,res);
		
	});

	app.post('/enviar2',function(req, res){
		app.app.controllers.enviar.enviar2(app,req,res);
		
	});

	app.post('/enviar2F1',function(req, res){
		app.app.controllers.enviar.enviar2F1(app,req,res);
		
	});
	
	app.post('/enviar2F2',function(req, res){
		app.app.controllers.enviar.enviar2F2(app,req,res);
		
	});
	

	app.post('/enviar2S30',function(req, res){
		app.app.controllers.enviar.enviar2S30(app,req,res);
		
	});
	app.post('/enviar2S80',function(req, res){
		app.app.controllers.enviar.enviar2S80(app,req,res);
		
	});
	app.post('/info21',function(req, res){
		app.app.controllers.condicao2.info21(app,req,res);
		
	});
	app.post('/info22',function(req, res){
		app.app.controllers.condicao2.info22(app,req,res);
		
	});


	app.post('/buscaSujeito2',function(req, res){
		app.app.controllers.condicao2.buscaSujeito2(app,req,res);
		
	});

}