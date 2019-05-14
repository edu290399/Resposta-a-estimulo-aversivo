var cont1 = 1;
var cont2 = 1;

module.exports.enviar1 = function(app, req, res){
	var envio1 = req.body;


	req.assert('senha','Inserir senha').notEmpty();
	

	var erros = req.validationErrors();
	if(erros)
	{
		var err='Preencher Senha';
		res.render('experimento1SE', {err: err, experimento1SE : envio1});
		return;
	}

	var connection  = app.config.connection();
	var senhaModel =  app.app.models.condicao1;

	senhaModel.enviar1(envio1, connection, function(error, result){
		if(result && envio1.senha!=[]){
			if(result.length>0){
				if(cont1<2){	
				senhaModel.tempo(envio1, connection);
				//senhaModel.pessoa(resultado,connection);
				if(envio1.tempo<150)
				res.render('experimento1TE5', {err: err, validacao: []});
				else
				res.render('experimento1TE15', {err: err, validacao: []});
				cont1 = cont1 + 1;
				
				
			}
			else{
				var err='fim exp';
				cont1=1;
				res.render('telaFinal', {err: err, validacao: []});
			}	
		}
		else{
			var err='Senha Incorreta';
			res.render('experimento1SE', {err: err, experimento1SE : envio1});
		}
	}
	})	
}

module.exports.enviar2 = function(app, req, res){
	var envio2 = req.body;
	

	req.assert('senha','Inserir senha').notEmpty();
	

	var erros = req.validationErrors();
	if(erros)
	{
		var err='Preencher Senha';
		res.render('experimento2SE', {err: err, experimento2SE : envio2});
		return;
	}

	var connection  = app.config.connection();
	var senhaModel =  app.app.models.condicao2;

	senhaModel.enviar2(envio2, connection, function(error, result){
		if(result){
			if(result.length>0){
				if(cont2<20){	
				senhaModel.tempo(envio2, connection);
				if(envio2.tempo<150)
				res.render('experimento2TE5', {err: err, validacao: []});
				else
				res.render('experimento2TE15', {err: err, validacao: []});
				cont2 = cont2 + 1;
				
			}
			else{
				var err='fim exp';
				cont2 = 1;
				res.render('telaFinal', {err: err, validacao: []});
			}	
		}
		else{
			var err='Senha Incorreta';
			res.render('experimento2SE', {err: err, experimento2SE : envio2});
		}
	}
	})	
}


module.exports.enviar2S30 = function(app, req, res){
	var envio2 = req.body;
	

	req.assert('senha','Inserir senha').notEmpty();
	

	var erros = req.validationErrors();
	if(erros)
	{
		var err='Preencher Senha';
		res.render('experimento2SE', {err: err, experimento2SE : envio2});
		return;
	}

	var connection  = app.config.connection();
	var senhaModel =  app.app.models.condicao2;

	senhaModel.enviar2(envio2, connection, function(error, result){
		if(result){
			if(result.length>0){
				if(cont2<20){	
				senhaModel.tempo(envio2, connection);
				if(envio2.tempo<150)
				res.render('experimento2TE5', {err: err, validacao: []});
				else
				res.render('experimento2TE15', {err: err, validacao: []});
				cont2 = cont2 + 1;
				
			}
			else{
				var err='fim exp';
				cont2 = 1;
				res.render('telaFinal', {err: err, validacao: []});
			}	
		}
		else{
			var err='Senha Incorreta';
			res.render('experimento2SE30', {err: err, experimento2SE30 : envio2});
		}
	}
	})	
}


module.exports.enviar2S80 = function(app, req, res){
	var envio2 = req.body;
	


	req.assert('senha','Inserir senha').notEmpty();
	

	var erros = req.validationErrors();
	if(erros)
	{
		var err='Preencher Senha';
		res.render('experimento2SE', {err: err, experimento2SE : envio2});
		return;
	}

	var connection  = app.config.connection();
	var senhaModel =  app.app.models.condicao2;

	senhaModel.enviar2(envio2, connection, function(error, result){
		if(result){
			if(result.length>0){
				if(cont2<20){	
				senhaModel.tempo(envio2, connection);
				if(envio2.tempo<150)
				res.render('experimento2TE5', {err: err, validacao: []});
				else
				res.render('experimento2TE15', {err: err, validacao: []});
				cont2 = cont2 + 1;
				
			}
			else{
				var err='fim exp';
				cont2 = 1;
				res.render('telaFinal', {err: err, validacao: []});
			}	
		}
		else{
			var err='Senha Incorreta';
			res.render('experimento2SE80', {err: err, experimento2SE80 : envio2});
		}
	}
	})	
}