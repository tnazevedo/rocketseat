function pares(x,y){
    var resultado = [];
    while(x<=y){
        var calc = x % 2;
        if(calc === 0){
            resultado.push(x);
        }
        x++
    }
    return resultado;
}

console.log(pares(32,321));

