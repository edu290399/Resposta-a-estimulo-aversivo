module.exports.condicao = function(app,req,res){ 
    var sujeito = req.body;
    
    req.assert('nome','Inserir nome').notEmpty();
    req.assert('idade','Inserir idade').notEmpty();
    req.assert('sexo','Inserir sexo').notEmpty();
   /*
    var erros = req.validationErrors();
    if(erros){
        res.render('cadastro',{validacao: erros, cadastro: sujeito});
        return;
    }*/

    var connection  = app.config.connection();
    var sujeitoModel = app.app.models.sujeitoModel;
    if (sujeito.condicao1){
    sujeito.condicao = 1;
    delete sujeito.condicao1;
    sujeitoModel.cadastro1(sujeito, connection, function(error, result){
        res.render('condicao1',{ validacao: [], err: ''});
    });      
    }
    if(sujeito.condicao2){
        sujeito.condicao = 2;
        delete sujeito.condicao2;
        sujeitoModel.cadastro2(sujeito, connection, function(error, result){
            res.render('condicao2',{ validacao: [], err: ''});
        });
    }     
}
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
