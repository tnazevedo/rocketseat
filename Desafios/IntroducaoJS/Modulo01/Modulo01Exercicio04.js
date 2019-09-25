var anosDeEstudo = 7

function experiencia(anos){
    var nivel= ['Iniciante','Intermediario', 'Avançado', 'Jedi Master','Seu nível de Experiência é:'];
    if(anos >= 0 && anos == 1 ){return nivel[4] + " " + nivel[0];}
    if(anos >1 && anos <=3){return nivel[4] + " " +  nivel[1]; }
    if(anos >3 && anos <= 6 ){return nivel[4] + " " + nivel[2];}
    if(anos >= 7 ){return nivel[4] + " " + nivel[3];}

    
    

}

console.log(experiencia(anosDeEstudo));