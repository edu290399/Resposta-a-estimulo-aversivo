module.exports.index = function(app, req, res){
	res.render('cadastro', { validacao: [], cadastro: []});
	var teste;
	teste  = 6 / 3;
	console.log(parseInt(teste,10));
}

module.exports.redirect = function(app, req, res){
	var pagina = req.body;
	if(pagina.c1)res.redirect('condicao1');
	else if(pagina.c2)res.redirect('condicao2');
}