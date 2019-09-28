var ulElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement= document.querySelector('#app button');
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];


function renderTodos(){
    ulElement.innerHTML = '';
    for(todo of todos){
        var liElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
                
        //cria link
        var aElement = document.createElement('a');
        var aText = document.createTextNode('Excluir');
        aElement.setAttribute('href', '#');

        ulElement.appendChild(liElement);
        liElement.appendChild(todoText);
        liElement.appendChild(aElement);
        aElement.appendChild(aText);

        var pos = todos.indexOf(todo);
        aElement.setAttribute('onclick', 'deleteTodo('+ pos +')');
        saveToStorage();
        


    }
}



function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = ' ';
    renderTodos();
}

function deleteTodo(pos){
    todos.splice(pos,1);
    renderTodos();
    saveToStorage();
}


function saveToStorage(){
    
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
buttonElement.onclick = addTodo;

