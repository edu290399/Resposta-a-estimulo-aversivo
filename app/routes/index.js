module.exports = function(app){

	app.get('/cadastro',function(req, res){
		app.app.controllers.index.index(app,req,res);
	});
	app.get('/',function(req, res){
		app.app.controllers.index.index(app,req,res);
	});
	app.post('/redirect',function(req,res){
		app.app.controllers.index.redirect(app,req,res);
	});

}
