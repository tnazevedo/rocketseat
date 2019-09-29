/*const arr = [1, 3, 4, 5, 8, 9];
const newArr = arr.map(function (item, index) {

    return item + index;
});

console.log(newArr);


const sum = arr.reduce(function (total, next) {
    return total + next;
});

console.log(sum);

const filter = arr.filter(function (item) {
    return item % 2 === 0;

});

console.log(filter);

const find = arr.find(function (item) {
    return item === 4;
});

console.log(find);
*/

// arrow functions
/*
const arr = [1, 3, 4, 5, 6];
const newArr = arr.map(item => item * 2);
console.log(newArr);

const teste = () => ({
    nome: 'Talita'
});
console.log(teste());
*/
/*
function soma(a = 0, b = 3) {
    return a + b;
};
console.log(soma(1));
*/
/*
const soma = (a = 0, b = 3) => a + b;
console.log(soma(1));
*/




/**
 * 

// desestruturação





const usuario = {
    nome: 'Talita',
    idade: 23,
    endereco: {
        cidade: 'Osasco',
        Estado: 'SP',
    },

}
console.log(usuario);
// isso aqui é uma ddesestruturação
const {
    nome,
    idade,
    endereco: {
        cidade
    }
} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);


// outro exemplo

function mostraNome({
    nome,
    idade
}) {
    console.log(nome, idade);
}

console.log(mostraNome(usuario));
 */

// operadores rest e spread
// antes de utilizar  fazer o seguinte comando yarn add @babel/plugin-proposal-object-rest-spread



// Primeiro falar sobre REST
// serve para pegar o resto das propriedades

/**
 *
 const usuario = {
     nome: 'Talita',
     idade: 28,
     empresa: 'Rocketseat'
 };
 const {
     nome,
     ...resto
 } = usuario;

 console.log(nome);
 console.log(resto);

 const arr = [1, 2, 3, 4, 5];

 const [a, b, ...c] = arr;
 console.log(a);
 console.log(b);
 console.log(c);

 function soma(a, b, ...params) {
     return params;

 }

 console.log(soma(1, 3));


 // conceito de spread

 const arr1 = [1, 2, 3];
 const arr2 = [4, 5, 6];
 const arr3 = [...arr1, ...arr2];
 console.log(arr3);


 const usuario1 = {
     nome: 'Talita',
     idade: 28,
     empresa: 'Rocketseat'

 };
 const usuario2 = {
     ...usuario1,
     nome: 'Diego'
 };
 console.log(usuario2);
 */

// aula sobre template literals 
/*
const nome = 'Talita';
const idade = 28;
console.log('Meu nome é ' + nome + ' e tenho ' + idade);
// agora com o template literals
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);


* */


// aula sobre objecy short syntax

/**
const nome = 'Talita';
const idade = 28;


const usuario = {
    // no ES6 não precisa declarar nome:nome, se o nome da variavel for igual ao nome do objeto
    nome,
    idade,
    empresa: 'Rocketseat',
}

console.log(usuario);


*/

// configurando o webpack
// após a configuração do webpak é possível importar arquivos.
/*import {
    soma
} from './funcoes';
console.log(soma(1, 2));
*/
// quando define o export default pode também importar da forma como abaixo
/**
import somaFuncction from '../funcoes';
import * as funcoes from '../funcoes';
console.log(funcoes);
console.log(funcoes.soma(1, 2));
console.log(funcoes.sub(3, 4));
console.log(funcoes.multi(5, 7));

*/

//alert('testando');

// crianddo uma promisse
/**
 *
 const minhaPromise = () => new Promise((resolve, reject) => {
     setTimeout(() => {
         resolve('Ok');
     }, 2000);
 });
 */

/*minhaPromise().then(response => {
    console.log(response);
})
*/




// async await

//async function executaPromise() {
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//    console.log(await minhaPromise());
//}

//executaPromise();
/**
 * 
 *
 const executaPromise = async () => {
     console.log(await minhaPromise());
     console.log(await minhaPromise());
     console.log(await minhaPromise());


 };
 executaPromise();
 */


// importando o axios
//import axios from 'axios';

/***
 * 
 * 
 * class Api {
     static async getUserInfo(username) {
         // quando trabalhamos coma sintaxe de async e await é muito comum utilizar try e catch
         try {
             const response = await axios.get(`https:api.github.com/users/${username}`);
             console.log(response);

         } catch (err) {
             console.warn('Erro na API');
         }



     }
 }


 Api.getUserInfo('tnazevedo');
 */


//criando o app 



import api from './api';
class App {
    constructor() {
        this.repositories = [];
        this.formEL = document.querySelector('#repo-form');
        this.listEL = document.querySelector('#repo-list');
        this.inputEL = document.querySelector(' input[name = repository]');
        this.registerHandlers();
    }
    registerHandlers() {
        this.formEL.onsubmit = (event) => this.addRepository(event);

    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');
            this.formEL.appendChild(loadingEl);

        } else {
            document.getElementById('loading').remove;
        }
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEL.value;
        if (repoInput === 0)
            return;
        this.setLoading();

        try {
            const response = await api.get(`/repos/${repoInput}`);
            console.log(response);
            const {
                name,
                description,
                html_url,
                avatar_url,

            } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });

            this.inputEL.value = '';
            this.render();

        } catch (err) {
            alert('O repositório não existe');
        }
        this.setLoading(false);




    }
    render() {
        this.listEL.innerHTML = '';
        this.repositories.forEach(repo => {
            let imgEL = document.createElement('img');
            imgEL.setAttribute('src', repo.avatar_url);

            let tittleEL = document.createElement('strong');
            tittleEL.appendChild(document.createTextNode(repo.name));

            let descriptionEL = document.createElement('p');
            descriptionEL.appendChild(document.createTextNode(repo.description));

            let linkEL = document.createElement('a');
            linkEL.setAttribute('target', '_blank');
            linkEL.setAttribute('href', repo.html_url);
            linkEL.appendChild(document.createTextNode('Acessar'));


            let listItemEL = document.createElement('li');
            listItemEL.appendChild(imgEL);
            listItemEL.appendChild(tittleEL);
            listItemEL.appendChild(descriptionEL);
            listItemEL.appendChild(linkEL);

            this.listEL.appendChild(listItemEL);




        });

    }
}

new App();