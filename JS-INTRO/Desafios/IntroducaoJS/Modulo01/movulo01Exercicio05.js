var usuarios =[
    {
        nome:'Diego',
        habilidades: ['JavaScript', ' ReactJs', ' Redux']
    },
    {
        nome: 'Gabriel',
        habilidades:['VueJS ',' Ruby on Rails', ' Elixir']
    }
];
function retornaValores(usuarios){
    for(usuario of usuarios){
        console.log(' O ' +  usuario.nome + ' Possui Habilidades utilizando: ' + usuario.habilidades);
    }

}

console.log(retornaValores(usuarios));