module.exports = function(){
    this.enviar2 = function(envio2, connection, callback){
        connection.query('select senha from senha where senha like '+envio2.senha,callback);
        }
    this.tempo = function(envio2, connection){
        connection.query('select id from sujeitos where id = (select max(id) from sujeitos)',function(error,result){
            console.log(result[0].id)
            connection.query('insert into  condicaodois (tempo, IDpessoa)  values(' + envio2.tempo +','+ result[0].id +')');
        });
        }
    	this.getTempo = function(connection, callback){
            connection.query('select * from condicaodois',callback);
        }
        return this;
    }