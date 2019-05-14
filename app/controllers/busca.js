module.exports.buscaTempo1 = function(app, req,res){
var connection = app.config.connection();
var condicao1 = app.app.models.condicao1;
condicao1.getTempo(connection,function(error, result){res.render('buscaTempo1',{tempo1: result});})
}

module.exports.buscaTempo2 = function(app, req,res){
    var connection = app.config.connection();
    var condicao2 = app.app.models.condicao2;
    condicao2.getTempo(connection,function(error, result){res.render('buscaTempo2',{tempo2: result});})
}