module.exports = function(app){

	app.post('/experimento1',function(req, res){
		app.app.controllers.enviar.experimento1(app,req,res);
		
	});

	app.post('/info1',function(req, res){
		app.app.controllers.condicao1.info1(app,req,res);
		
	});
	app.post('/enviar1',function(req, res){
		app.app.controllers.enviar.enviar1(app,req,res);
		
	});	
	



}