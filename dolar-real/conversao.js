function converter(){
var valorDolarTexto = prompt("Qual o valor em dólar que você quer converter?");

var valorDolarNumero = parseFloat(valorDolarTexto);

var valorReal = valorDolarNumero * 5.5;

var valorRealFix = valorReal.toFixed(2);

var res = document.getElementById('res');

res.innerHTML = `${valorDolarNumero} dólares são ${valorRealFix} reais.`;
}