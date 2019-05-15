module.exports = function(){

this.enviar1 = function(envio1, connection, callback){
    connection.query('select senha from senha where senha like '+envio1.senha,callback);
    }
this.tempo = function(envio1, connection){
    connection.query('select id from sujeitos where id = (select max(id) from sujeitos)',function(error,result){
        console.log(result[0].id)
        connection.query('insert into  condicaoum (tempo, IDpessoa)  values(' + envio1.tempo +','+ result[0].id +')');
    });
    }
this.getTempo = function(connection, callback){
        connection.query('select * from condicaoum',callback);
    }
this.getIDpessoa = function(IDpessoa, connection, callback){
        connection.query('select * from sujeitos where id = "'+IDpessoa+'"',callback);
    }
    return this;
}
