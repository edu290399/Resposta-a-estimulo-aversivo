module.exports = function(app){

	app.post('/experimento1',function(req, res){
		app.app.controllers.condicao1.experimento1(app,req,res);
		
	});


	app.get('/condicao1',function(req, res){
		app.app.controllers.condicao1.condicao1(app,req,res);
		
	});

}