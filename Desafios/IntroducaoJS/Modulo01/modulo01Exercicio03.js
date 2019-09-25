

var habilidades = ["JavaScript", "React", "Node.js"]
function temHabilidades(skills){
    var resultado = [];
    for(var i =0; i < skills.length; i++){
        var pos  = skills[i];
        if(skills.indexOf(pos) !== -1){
            resultado.push(true);
        }else{resultado.push(false)}
    }
    return resultado;


}

console.log(temHabilidades(habilidades));