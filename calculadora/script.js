function calcular(){
var primeiroValor = document.getElementById("n1").value;
console.log(primeiroValor)
var segundoValor = document.getElementById("n2").value;
console.log(segundoValor)
var operacao = document.getElementById("op").value;
console.log(typeof(operacao))
var res = document.getElementById('res');

// Opção usando if, else if e else:

if(operacao == 1){
  var resultado = parseInt(primeiroValor) + parseInt(segundoValor); 
  res.innerHTML =  resultado;  
  }else if(operacao == 2){
  var resultado = primeiroValor - segundoValor;
  res.innerHTML =  resultado; 
}else if(operacao == 3){
  var resultado = primeiroValor * segundoValor;
  res.innerHTML =  resultado; 
}else if(operacao == 4){
  var resultado = parseFloat(primeiroValor) / parseFloat(segundoValor);
  res.innerHTML =  resultado; 
}else{
  res.innerHTML = "Opção inválida!"
}

}
/*
// Opção usando switch:

switch(operacao){
  case 1:          
    var resultado = parseInt(primeiroValor) + parseInt(segundoValor); 
    res.innerHTML =  resultado; 
    
    break;
  
  case 2:
    var resultado = primeiroValor - segundoValor;    
    res.innerHTML =  resultado; 
    break;

  case 3:
    var resultado = primeiroValor * segundoValor;    
    res.innerHTML =  resultado; 
    break;
  
  case 4:
    var resultado = primeiroValor / segundoValor;    
    res.innerHTML =  resultado; 
    break;

  default:
    res.innerHTML = "Opção inválida!"

  }
}
*/