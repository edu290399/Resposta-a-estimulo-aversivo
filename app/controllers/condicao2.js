module.exports.condicao2 = function(app,req,res){       
    res.render('condicao2',{ validacao: [], err: ''});
}

module.exports.buscaSujeito2= function(app, req,res){
    var id = req.body.IDpessoa;
    var connection = app.config.connection();
    var condicao2= app.app.models.condicao2;
    condicao2.getIDpessoa(id,connection,function(error, result){res.render('buscaSujeito2',{sujeito: result});});

}

module.exports.info21 = function(app,req,res){       
    res.render('info21',{ validacao: [], err: ''});
}
module.exports.info22 = function(app,req,res){       
    res.render('info22',{ validacao: [], err: ''});
}