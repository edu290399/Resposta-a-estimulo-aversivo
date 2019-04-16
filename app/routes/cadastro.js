module.exports = function(app){

	app.get('/cadastro',function(req, res){
		app.app.controllers.cadastro.cadastro(app,req,res);
	});
	app.post('/redirect',function(req,res){
		app.app.controllers.index.redirect(app,req,res);
	});

}
