
module.exports.buscaSujeito1= function(app, req,res){
            var id = req.body.IDpessoa;
            var connection = app.config.connection();
            var condicao1= app.app.models.condicao1;
            condicao1.getIDpessoa(id,connection,function(error, result){res.render('buscaSujeito1',{sujeito: result});});
        
}

module.exports.info1 = function(app,req,res){       
    res.render('info1',{ validacao: [], err: ''});
}



    