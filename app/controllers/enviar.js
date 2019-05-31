var cont1 = 0;
var cont2 = 0;
module.exports.experimento1F1 = function(app,req,res){       
    res.render('experimento1F1',{ validacao: [], err: ''});
    cont1 = cont1 + 1;
}
module.exports.experimento1F2 = function(app,req,res){       
    res.render('experimento1F2',{ validacao: [], err: ''});
    console.log("estamos aqui ainda...")
}
module.exports.experimento2F1 = function(app,req,res){       
    res.render('experimento2FS50MIN15',{ validacao: [], err: ''});
    cont2 = cont2 + 1;
}
module.exports.experimento2F2 = function(app,req,res){     
	res.render('experimento2FS50MAX15',{ validacao: [], err: ''});
	console.log("estamos aqui ainda...")
	//cont2 = cont2 + 1;
}
module.exports.enviar1 = function(app, req, res){
	var envio1 = req.body;


	req.assert('senha','Inserir senha').notEmpty();
	

	var erros = req.validationErrors();
	if(erros){
		if(envio1.tempo<153 && cont1==2){
		var err='Preencher Senha';
		res.render('experimento1F1SE', {err: err, experimento1F1SE : envio1});
		}
		else{
			var err='Preencher Senha';
			res.render('experimento1SE', {err: err, experimento1SE : envio1});	
		}
		return;
	}

	var connection  = app.config.connection();
	var senhaModel =  app.app.models.condicao1;

	senhaModel.enviar1(envio1, connection, function(error, result){
			if(result.length){
				if(cont1<5){	
				senhaModel.tempo(envio1, connection);
				//senhaModel.pessoa(resultado,connection);
				if(envio1.tempo<=150){
						res.render('experimento1TE5', {err: err, validacao: []});
						cont1 = cont1 + 1	
				}
				else{
						res.render('experimento1TE15', {err: err, validacao: []});
						cont1 = cont1 + 1	
				}
				
			}
			else{
				senhaModel.tempo(envio1, connection);
				var err='fim exp';
				cont1=0;
				res.render('telaFinal', {err: err, validacao: []});
			}	
		}
		else{
			if(envio1.tempo<153 && cont1==2){
			var err='Senha Incorreta';
			res.render('experimento1F1SE', {err: err, experimento1F1SE : envio1});
			}
			else{
				var err='Senha Incorreta';
				res.render('experimento1SE', {err: err, experimento1SE : envio1});
			}
		}
	
	})	
}
module.exports.errosenha = function(app,req,res){       
    res.render('experimento1F1E15',{ validacao: [], err: ''});
    console.log("estamos aqui ainda...")
}
module.exports.errosenha2 = function(app,req,res){       
    res.render('experimento1F2',{ validacao: [], err: ''});
    console.log("estamos aqui ainda...")
}
module.exports.enviar1F1 = function(app, req, res){
	var envio1 = req.body;


	req.assert('senha','Inserir senha').notEmpty();
	

	var erros = req.validationErrors();
	if(erros)
	{
		var err='Preencher Senha';
		res.render('experimento1F1SE1', {err: err, experimento1F1SE1 : envio1});
		return;
	}

	var connection  = app.config.connection();
	var senhaModel =  app.app.models.condicao1;

	senhaModel.enviar1(envio1, connection, function(error, result){
		if(result.length){
			if(cont1<5){	
				
				//senhaModel.pessoa(resultado,connection);
				if(cont1==2){
					if(envio1.tempo>150){
						res.render('experimento1F1E15', {err: err, validacao: []});
						console.log("deu certo!");
						console.log(cont1);
					}
					else{
						res.render('experimento1TE5', {err: err, validacao: []});
						senhaModel.tempo(envio1, connection);
						cont1 = cont1 + 1;
					}	
				}
				else{
					res.render('experimento1F1E15', {err: err, validacao: []});
					senhaModel.tempo(envio1, connection);
					cont1 = cont1 + 1;
				}
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
			res.render('experimento1F1SE1', {err: err, experimento1F1SE1 : envio1});
		}
	
	})	
}
module.exports.enviar1F2 = function(app, req, res){
	var envio1 = req.body;


	req.assert('senha','Inserir senha').notEmpty();
	

	var erros = req.validationErrors();
	if(erros)
	{
		var err='Preencher Senha';
		res.render('experimento1F2SE', {err: err, experimento1F2SE : envio1});
		return;
	}

	var connection  = app.config.connection();
	var senhaModel =  app.app.models.condicao1;

	senhaModel.enviar1(envio1, connection, function(error, result){
			if(result.length){
				if(cont1<5){	
	
				//senhaModel.pessoa(resultado,connection);
				if(cont1==0){
				if(envio1.tempo<=150){
						res.render('experimento1F2E5', {err: err, validacao: []});
						senhaModel.tempo(envio1, connection);
						cont1 = cont1 + 2;
				}
					else{
						
						res.render('experimento1F2', {err: err, validacao: []});
						console.log("deu certo!");

					}
				}		
				
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
			res.render('experimento1F2SE', {err: err, experimento1F2SE : envio1});
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
				if(cont2<5){	
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
		res.render('experimento2SE30', {err: err, experimento2SE30 : envio2});
		return;
	}

	var connection  = app.config.connection();
	var senhaModel =  app.app.models.condicao2;

	senhaModel.enviar2(envio2, connection, function(error, result){
		if(result){
			if(result.length>0){
				if(cont2<5){	
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
		res.render('experimento2SE80', {err: err, experimento2SE80 : envio2});
		return;
	}

	var connection  = app.config.connection();
	var senhaModel =  app.app.models.condicao2;

	senhaModel.enviar2(envio2, connection, function(error, result){
		if(result){
			if(result.length>0){
				if(cont2<5){	
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

module.exports.enviar2F1 = function(app, req, res){
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
				if(cont2 == 2){
				if(envio2.tempo>150){
					res.render('experimento2FS30MAX15', {err: err, validacao: []});
					console.log('chegou com contador2 = ');
					console.log(cont2);

				}
			}
				else{
					if(envio2.tempo<150){
						res.render('experimento2FS80MIN15', {err: err, validacao: []});
						cont2 = cont2 + 1;
					}
					else
					res.render('experimento2FS30MAX15', {err: err, validacao: []});
					senhaModel.tempo(envio2, connection);
					cont2 = cont2 + 1;
					console.log(cont2)
				}	
		}
		else{
			var err='Senha Incorreta';
			res.render('experimento2SE', {err: err, experimento2SE : envio2});
		}
		}
	})	
}

module.exports.enviar2F2 = function(app, req, res){
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
				if(cont2<5){	
				
				if(cont2==1){
				if(envio2.tempo<150){
					res.render('experimento2FS80MIN15', {err: err, validacao: []});
					senhaModel.tempo(envio2, connection);
					cont2 = cont2 + 1;
				}
				else{
					cont2 = cont2 - 1;
					res.render('experimento2FS50MAX15', {err: err, validacao: []});
					console.log("deu certo!")
				}
				
			}
						
			
				
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

