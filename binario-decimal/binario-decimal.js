// Converte um número binário para decimal
function converter(bin){
    var decimal = 0;
    var bin = document.getElementById('ini').value
    var res = document.getElementById('res')

    for(var index = bin.length -1; index >= 0; index --){
        decimal += parseInt(bin[index])*Math.pow(2, bin.length-1-index);
    }
    res.innerHTML = `O valor correspondente em decimal é ${decimal}.`
}


