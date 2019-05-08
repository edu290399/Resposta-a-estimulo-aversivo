module.exports = function(){
    this.enviar2 = function(envio1, connection, callback){
        connection.query('select senha from senha where senha like '+envio2.senha,callback);
        }
    this.tempo = function(envio1, connection){
        connection.query('insert into condicaodois (tempo)  values(' + envio2.tempo +')');
        }
        return this;
    }