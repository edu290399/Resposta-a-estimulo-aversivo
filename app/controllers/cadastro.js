
module.exports.cadastro1= function(app,req,res){
    var sujeito = req.body;
        req.assert('nome','Inserir nome').notEmpty();
        req.assert('idade','Inserir idade').notEmpty();
        req.assert('sexo','Inserir sexo').notEmpty();
       
        var erros = req.validationErrors();
        if(erros){
            res.render('cadastro',{validacao: erros, cadastro: sujeito});
            return;
        }

        var connection  = app.config.connection();
        var sujeitoModel = app.app.models.sujeitoModel;

        sujeitoModel.cadastro1(sujeito, connection, function(error, result){
            res.redirect('info1');
        });
}

module.exports.cadastro2= function(app,req,res){
    var sujeito = req.body;
        req.assert('nome','Inserir nome').notEmpty();
        req.assert('idade','Inserir idade').notEmpty();
        req.assert('sexo','Inserir sexo').notEmpty();
       
        var erros = req.validationErrors();
        if(erros){
            res.render('cadastro',{validacao: erros, cadastro: sujeito});
            return;
        }

        var connection  = app.config.connection();
        var sujeitoModel = app.app.models.sujeitoModel;

        sujeitoModel.cadastro2(sujeito, connection, function(error, result){
            res.redirect('info2');
        });
}
