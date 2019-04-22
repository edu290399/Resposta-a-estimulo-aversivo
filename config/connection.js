var mysql = require('mysql');

var connection = function(){
	return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : '',
			database : 'projetoAmanda'
		});
	connection.connect(function(err) {
		if (err) {
		  console.error('Erro ao conectar');
		  return;
		}
	})
}

module.exports = function(){
	return connection;
}