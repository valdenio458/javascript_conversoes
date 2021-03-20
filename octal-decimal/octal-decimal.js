// Converte um número octal para decimal
function converter(oct){
    var decimal = 0;
    var oct = document.getElementById('ini').value
    var res = document.getElementById('res')

    for(var index = oct.length -1; index >= 0; index --){
        decimal += parseInt(oct[index])*Math.pow(8, oct.length-1-index);
    }
    res.innerHTML = `O valor correspondente em decimal é ${decimal}.`
}


// console.log(bin2Dec('0001'))
/*
// Arrow function
var converte = (bin) => {
    var decimal = 0;

    for(var index = bin.length -1; index >= 0; index --){
        decimal += parseInt(bin[index])*Math.pow(2, bin.length-1-index);
    }
    return decimal
}
console.log(converte('1111'))
*/