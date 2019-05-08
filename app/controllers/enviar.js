var cont = 1;

module.exports.enviar1 = function(app, req, res){
	var envio1 = req.body;
	console.log(envio1.tempo)


	req.assert('senha','Inserir senha').notEmpty();
	

	var erros = req.validationErrors();
	if(erros)
	{
		res.render('experimento1',{ validacao: erros, err: ''});
		return;
	}

	var connection  = app.config.connection();
	var senhaModel =  app.app.models.condicao1;

	senhaModel.enviar1(envio1, connection, function(error, result){
		if(result){
			if(result.length>0){
				if(cont<5){	
				senhaModel.tempo(envio1, connection);
				if(envio1.tempo<1000)
				res.render('experimento1TE5', {err: err, validacao: []});
				else
				res.render('experimento1TE10', {err: err, validacao: []});
				cont = cont + 1;
				
			}
			else{
				var err='fim exp';
				res.render('telaFinal', {err: err, validacao: []});
			}	
		}
		else{
			var err='Senha Incorreta';
			res.render('experimento1SE', {err: err, validacao: []});
		}
	}
	})	
}
