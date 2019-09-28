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

alert('testando');

// crianddo uma promisse

/**
 *
 const minhaPromise = () => new Promise((resolve, reject) => {
     setTimeout(() => {
         resolve('Ok');
     }, 2000);
 });
 minhaPromise().then(response => {
     console.log(response);
 })


 */