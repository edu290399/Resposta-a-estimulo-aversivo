module.exports = function(app){

	app.get('/redirect',function(req, res){
		app.app.controllers.condicao1.condicao1(app,req,res);
	});

	app.get('/condicao2',function(req, res){
		app.app.controllers.condicao2.condicao2(app,req,res);
		
	});


}