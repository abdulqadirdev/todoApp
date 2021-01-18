const TodoAddBtn = document.getElementById('todo-adder');
const TodoInput = document.getElementById('todo-input');
const TodoList = document.getElementById('todo-list');
const shadow = document.createElement('div');
const TodoListArea = document.getElementById('todo-list-area')


let todos;


window.addEventListener('DOMContentLoaded' , ()=> {
    todos = getAllTodos();
    renderTodos(todos);
     
})

shadow.classList.add('shadow-lg','p-3', 'mb-5', 'bg-white', 'rounded')

function renderTodos(todos){
    if (todos.length){
        todos.forEach(function(item){
            // let TodoValue = TodoInput.value
    let li = document.createElement('li');
    li.classList.add('list-item','li-style','align-items-center')
    let divtodo = document.createElement('div');
    divtodo.innerText = item;
    li.classList.add('todo-product','d-flex','justify-content-between','padding','mt-3');
    
    

//save to local storage

// todos.push(TodoValue);


    //actions area
    let DivAction = document.createElement('div');
    DivAction.classList.add('action')

    //check btn 

    let CheckBtn = document.createElement('button');
    CheckBtn.classList.add('btn', 'btn-success','mr-2');
    CheckBtn.innerHTML = '<i class="fas fa-check"></i>';
    CheckBtn.addEventListener('click',CompTodo)

    //dlt btn 
    let DltBtn = document.createElement('button');
    DltBtn.classList.add('btn', 'btn-danger');
    DltBtn.innerHTML = '<i class="fas fa-trash"></i>'
    DltBtn.addEventListener('click', DltTodo)


    shadow.appendChild(TodoList)
TodoListArea.appendChild(shadow)

    DivAction.appendChild(CheckBtn);
    DivAction.appendChild(DltBtn);

    li.append(divtodo);
    li.append(DivAction);
    
    TodoList.append(li);

        })
    }

}

TodoAddBtn.addEventListener('click' , event => {
    event.preventDefault();

    //todo add
    let TodoValue = TodoInput.value
    let li = document.createElement('li');
    li.classList.add('list-item','li-style','align-items-center',)
    let divtodo = document.createElement('div');
    divtodo.classList.add('value-area',)
    divtodo.innerText = TodoValue;
    li.classList.add('todo-product','d-flex','justify-content-between','padding','mt-3');
    
    

//save to local storage

// todos.push(TodoValue);


    //actions area
    let DivAction = document.createElement('div');
    DivAction.classList.add('action')

    //check btn 

    let CheckBtn = document.createElement('button');
    CheckBtn.classList.add('btn', 'btn-success','mr-2');
    CheckBtn.innerHTML = '<i class="fas fa-check-square"></i>';
    CheckBtn.addEventListener('click',CompTodo)

    //dlt btn 
    let DltBtn = document.createElement('button');
    DltBtn.classList.add('btn', 'btn-danger');
    DltBtn.innerHTML = '<i class="fas fa-trash"></i>'
    DltBtn.addEventListener('click', DltTodo)


    shadow.appendChild(TodoList)
TodoListArea.appendChild(shadow)

    DivAction.appendChild(CheckBtn);
    DivAction.appendChild(DltBtn);

    li.append(divtodo);
    li.append(DivAction);
    
    TodoList.append(li);


    TodoInput.value = '';

    //todos push in array
    todos.push(TodoValue);
// save into local storage

saveIntoLocalStorage(todos);




});

function CompTodo(event){
    event.target.parentElement.parentElement.firstChild.classList.toggle('line');
    
    
};
function DltTodo(event){
   
    event.target.parentElement.parentElement.remove();
    console.log(event)
    // event.target.window.localStorage..remove()
    
    
    
}

function saveIntoLocalStorage(todos){
localStorage.setItem('todos',JSON.stringify(todos))
}

function getAllTodos(){
    return JSON.parse(localStorage.getItem('todos')) || [];
}





