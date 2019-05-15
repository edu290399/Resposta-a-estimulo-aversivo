module.exports = function(){

    this.getSujeito = function(connection, callback){
        connection.query('select * from sujeitos ORDER BY nome',callback);
    }

    this.cadastro1 = function(sujeito, connection, callback){
        connection.query('insert into sujeitos set ?', sujeito);
        connection.query('insert into sujeitos set condicao', "1",callback);
    }

    this.cadastro2 = function(sujeito, connection, callback){
        connection.query('insert into sujeitos set ?', sujeito);
        connection.query('insert into sujeitos set condicao', "2",callback);
    }

   

    return this;
  
}