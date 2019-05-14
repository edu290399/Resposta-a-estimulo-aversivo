module.exports = function(app){

	app.post('/cadastro1',function(req, res){
		app.app.controllers.cadastro.cadastro1(app,req,res);
	});
	app.post('/cadastro2',function(req, res){
		app.app.controllers.cadastro.cadastro2(app,req,res);
	});
	app.post('/redirect',function(req,res){
		app.app.controllers.index.redirect(app,req,res);
	});

	app.post('/condicao',function(req, res){
		app.app.controllers.cadastro.condicao(app,req,res);
		
	});
	app.post('/busca1', function(req, res){
		app.app.controllers.busca.buscaTempo1(app,req,res);
	});
	
	app.post('/busca2', function(req, res){
		app.app.controllers.busca.buscaTempo2(app,req,res);
	});

}
