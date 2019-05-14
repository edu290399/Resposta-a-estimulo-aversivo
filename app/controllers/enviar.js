var cont1 = 0;
var cont2 = 0;
module.exports.experimento1 = function(app,req,res){       
    res.render('experimento1',{ validacao: [], err: ''});
    cont1 = cont1 + 1;
}
module.exports.experimento2 = function(app,req,res){       
	res.render('experimento2',{ validacao: [], err: ''});
	cont2 = cont2 + 1;
}
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
			if(result.length){
				if(cont1<2){	
				senhaModel.tempo(envio1, connection);
				//senhaModel.pessoa(resultado,connection);
				if(envio1.tempo<150)
				res.render('experimento1TE5', {err: err, validacao: []});
				else
				res.render('experimento1TE15', {err: err, validacao: []});
				cont1 = cont1 + 1
				
				
			}
			else{
				senhaModel.tempo(envio1, connection);
				var err='fim exp';
				cont1=0;
				res.render('telaFinal', {err: err, validacao: []});
			}	
		}
		else{
			var err='Senha Incorreta';
			res.render('experimento1SE', {err: err, experimento1SE : envio1});
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
				if(cont2<4){	
				senhaModel.tempo(envio2, connection);
				if(envio2.tempo<150)
				res.render('experimento2TE5', {err: err, validacao: []});
				else
				res.render('experimento2TE15', {err: err, validacao: []});
				cont2 = cont2 + 1;
				
			}
			else{
				senhaModel.tempo(envio2, connection);
				var err='fim exp';
				cont2 = 0;
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
				if(cont2<4){	
				senhaModel.tempo(envio2, connection);
				if(envio2.tempo<150)
				res.render('experimento2TE5', {err: err, validacao: []});
				else
				res.render('experimento2TE15', {err: err, validacao: []});
				cont2 = cont2 + 1;
				
			}
			else{
				senhaModel.tempo(envio2, connection);
				var err='fim exp';
				cont2 = 0;
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
				if(cont2<4){	
				senhaModel.tempo(envio2, connection);
				if(envio2.tempo<150)
				res.render('experimento2TE5', {err: err, validacao: []});
				else
				res.render('experimento2TE15', {err: err, validacao: []});
				cont2 = cont2 + 1;
				
			}
			else{
				senhaModel.tempo(envio2, connection);
				var err='fim exp';
				cont2 = 0;
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