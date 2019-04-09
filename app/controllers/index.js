module.exports.index = function(app, req, res){
	res.render('index', { validacao: [], err: ''});
}

module.exports.redirect = function(app, req, res){
	var pagina = req.body;
	if(pagina.c1)res.redirect('condicao1');
	else if(pagina.c2)res.redirect('condicao2');
}