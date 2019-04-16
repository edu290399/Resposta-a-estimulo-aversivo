module.exports.cadastro = function(app,req,res){       
    res.render('cadastro',{ validacao: [], err: ''});
}
module.exports.submitSujeito= function(app,req,res){
    var sujeito = req.body;
        req.assert('nome','Inserir nome').notEmpty();
        req.assert('idade','Inserir idade').notEmpty();
        req.assert('condicao','Inserir condição').notEmpty();
        req.assert('sexo','Inserir sexo').notEmpty();
       
        var erros = req.validationErrors();
        if(erros){
            res.render('cadastro',{validacao: erros, cadastro: sujeito});
            return;
        }

        var connection  = app.config.connection();
        var sujeitoeModel = app.app.models.sujeito;

        clienteModel.cadastrarClienteFisico(sujeito, connection, function(error, result){
            res.redirect('condicao1');
        });
}