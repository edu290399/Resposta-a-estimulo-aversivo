module.exports = function(app){

	app.post('/experimento1F1',function(req, res){
		app.app.controllers.enviar.experimento1F1(app,req,res);
		
	});

	app.post('/experimento1F2',function(req, res){
		app.app.controllers.enviar.experimento1F2(app,req,res);
		
	});

	app.post('/info11',function(req, res){
		app.app.controllers.condicao1.info11(app,req,res);
		
	});
	app.post('/info12',function(req, res){
		app.app.controllers.condicao1.info12(app,req,res);
		
	});
	app.post('/enviar1',function(req, res){
		app.app.controllers.enviar.enviar1(app,req,res);
		
	});	

	app.post('/enviar12',function(req, res){
		app.app.controllers.enviar.enviar12(app,req,res);
		
	});	
	
	app.post('/buscaSujeito1',function(req, res){
		app.app.controllers.condicao1.buscaSujeito1(app,req,res);
		
	});


}