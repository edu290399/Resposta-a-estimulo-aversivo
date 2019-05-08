module.exports = function(){
this.enviar1 = function(envio1, connection, callback){
    connection.query('select senha from senha where senha like '+envio1.senha,callback);
    }
this.tempo = function(envio1, connection){
    connection.query('insert into condicaoum (tempo)  values(' + envio1.tempo +')');
    }
    return this;
}
