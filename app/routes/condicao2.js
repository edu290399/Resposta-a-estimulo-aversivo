module.exports = function(app){

	app.post('/experimento2',function(req, res){
		app.app.controllers.condicao2.experimento2(app,req,res);
		
	});

	app.get('/condicao2',function(req, res){
		app.app.controllers.condicao2.condicao2(app,req,res);
		
	});


}