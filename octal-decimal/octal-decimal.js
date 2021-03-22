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



