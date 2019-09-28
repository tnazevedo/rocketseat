/*
# Yarn é um gerenciador de pacotes do Javascript
###Permite a instalação de apis de outras pessoas no ambiente
### Node é um compilador
#### Comanddo do yarn ::::yarn init => inicializa o yarn na pasta raiz do preojeto
### yarn add @babel/cli para instalar o babel no meu ambiente
### yarn add @babel / preset - env  => instalar esta dependencia também
## ignorar a pasta node_modules
## criar um arquivo .babelrc
## no arquivo package.json 
### criar a linha abaixo
"scripts": {
    ### linha dev => executa o babel no arquivo main.js e -o envia para um arquivo bundle.js compilado
    "dev": "babel ./main.js -o ./bundle.js  -w"
    

}

### yarn add @babel / core mais um pacote para adicionar;
##
executar o comando yarn dev ele vai criar o arquivo bundle.js
##Comando para instalar outro pacote do babel sobre rest e spread do ecma script
yarn add @babel / plugin - proposal - object - rest - spread
## configurando o webpack
## > yarn add webpack webpack - cli
// as dependencias so são necessárias no ambiente de desenvolvimento
o que vai para produção é o arquivo bbundle.js
para definir o que vai para o ambiente de produção 
criar um arquivo webpack.config.js
##
adicionar o modulo yarn add babel-loader

#### configuração do webpack
module.exports = {
    // arquivo de entrada
    entry: './main.js',
    output: {
        //isso aqui é uma var global obrigatoria
        path: __dirname,
        // saida neste arquivo que é o que vai para produção
        filename: './bundle.js',
    },
    module: {
        rules: [{
            // procura todos os arquivos com a extensão js
                test: /\.js$/,
                // exclui a pasta node modules
                exclude: /node_modules/,
                // carrega o modulo do babel
                use: {
                    loader: 'babel-loader',
                }

            }

        ],
    }

};

### Para testar o webpack 

### vá até o arquivo packaje.json 
altere a propriedade para o seguinte

 "scripts": {
     "dev": "webpack --mode-development -w"
 },

 ### Instalando o webpack dev server 
yarn add webpack - dev - server - D
Mudar os arquivos de configuração no webpack.config

fica assim 
module.exports = {
    entry: './src/main.js',
    output: {
        // mudou o path
        path: __dirname + '/public',
        filename: './bundle.js',
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }

            }

        ],
    }

};

após instalação do modulo de webserver  adicionar estas configurações no webconfig

 devServer: {
     contentBase: __dirname + './public'
 },

 alterar o script do packaje.json para 
 "scripts": {
     "dev": "webpack-dev-server --mode=development"
 },

 Adiciconando o babel loader na versão mais recente yarn add babel - loader @8 .0 - beta .0 - D
 
 para trabalhar com async await instalar o modulo do babel abaixo

 yarn add @babel / plugin - transform - async -to - generator

yarn add @babel/polyfill -D


Mudar no webpack.config
entry: ['@babel/polyfill', './src/main.js'],
mudar no babelrc
 "plugins": [
     "@babel/plugin-proposal-object-rest-spread",
     "@babel / plugin-transform-sync-to-generator"

 ]

 adicione o axios para trabalhar com promises
 yarn add axios
 
*/