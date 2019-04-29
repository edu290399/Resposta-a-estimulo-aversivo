
exports.teclado1 = function(app, req, res){
   
   
var result = document.getElementById('resultado');
var valor = [];
  //Aqui são armzenados os valores do button
  for (var i = 0; i < 10; i++){
    
    valor[i] = document.getElementById('bt'+i).value;
    result.value = this.value;
   
  }
    
    for (var i = 0; i < 10; i++) {
      document.getElementById('b'+i).addEventListener ('click', function () {
      result.value = this.value;
      });
    }
  
    
    document.getElementById('btapagar').addEventListener ('click', function () {
      result.value = this.value;
    });
  
    console.log(valor[i]);
  }
   
  



   
