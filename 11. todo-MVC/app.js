//select the DOM
const list = document.querySelector('.list');
const form = document.querySelector('.question');
const todo = document.querySelector('#todo');
const filter = document.querySelector('.filter');

class Item {
    constructor(name, done) {
        this.name = name;
        this.done = false;
    }
}
//Set LocalStorage - do at the end 

const saveToLocal = (todo) => {
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
};

const deleteLocal = (todo) => {
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const index = todos.findIndex(e => e.name === todo);
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
};

const getTodos = () => {
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    
    todos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('item');
        const checkboxForm = document.createElement('form');
        
        const checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        
        const label = document.createElement('label');
        label.textContent = todo.name;

        const button = document.createElement('button');
        button.classList.add('delete-btn');
        button.innerHTML = ` <i class="fas fa-times fa-lg"></i>`;

        list.appendChild(todoDiv);
        todoDiv.appendChild(checkboxForm);
        todoDiv.appendChild(button);
        checkboxForm.appendChild(checkbox);
        checkboxForm.appendChild(label);

    //Local storage displays checkbox form
        if(todo.done == true){
            checkbox.checked = true;
            todoDiv.classList.add('done');
        }

        //reset form
        form.reset();
        //display filter
        displayFilter();
    });
};

////End of functions for local storage

//////addTodo
const addTodo = (e) => {
    //prevent defaul behaviour
    e.preventDefault();
    
    // create todos
    const todo = e.target.todo.value;
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('item');
    const checkboxForm = document.createElement('form')
    
    const checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    
    const label = document.createElement('label');
    label.textContent = todo;
    ////////store to Local storage
    const todoOne = new Item(todo, false);
    saveToLocal(todoOne);

    const button = document.createElement('button');
    button.classList.add('delete-btn');
    button.innerHTML = ` <i class="fas fa-times fa-lg"></i>`;

    list.appendChild(todoDiv);
    todoDiv.appendChild(checkboxForm);
    todoDiv.appendChild(button);
    checkboxForm.appendChild(checkbox);
    checkboxForm.appendChild(label);

    //reset form
    form.reset();
    //display filter
    displayFilter();
};


const clickArrow =  (e) => {
    const listForms = document.querySelectorAll('.item form');
    if(e.target.tagName == 'I'){
        const arrayOne = Array.from(list.children).filter(item => {
            return !item.classList.contains('done');
        });
        const arrayTwo = Array.from(list.children).filter(item => {
            return item.classList.contains('done');
        });

        if(arrayOne.length > 0){
            arrayOne.forEach(item => {
                item.classList.add('done');
                item.firstElementChild.firstElementChild.checked = true;    
            });
        } else if(arrayOne.length == 0){
            arrayTwo.forEach(item => {
                item.classList.remove('done');
                item.firstElementChild.firstElementChild.checked = false;
            });
        }
        ////////Local Storage/////////////
        let todos;
        
        if(localStorage.getItem("todos") === null){
            todos = [];
        } else {
        todos = JSON.parse(localStorage.getItem("todos"));
        }
        
        if(arrayOne.length > 0) {
            todos.forEach(todo => todo.done = true);
        } 
        
        if(arrayOne.length == 0) {
            todos.forEach(todo => todo.done = false);
        }

        localStorage.setItem("todos", JSON.stringify(todos));
        
        displayFilter();
    } 
};

const deleteItem = (e) => {
    
    if(e.target.tagName == 'INPUT'){
        e.target.parentElement.parentElement.classList.toggle('done');
        //save to Local Storage
        let todos;
        if(localStorage.getItem("todos") === null){
            todos = [];
        } else {
        todos = JSON.parse(localStorage.getItem("todos"));
        }
        const index = todos.findIndex(todo => todo.name == e.target.parentElement.textContent);
        if(e.target.parentElement.parentElement.classList.contains('done')){
            todos[index].done = true;
            
        } else {
            todos[index].done = false;
        }
        localStorage.setItem("todos", JSON.stringify(todos));
        
        displayFilter();
        
    }
    if(e.target.tagName == 'I'){
        e.target.parentElement.parentElement.remove();
        deleteLocal(e.target.parentElement.parentElement.textContent);
        displayFilter(e.target.parentElement.parentElement.innerText);
        hideFilter();
    }
};

const displayFilter = () => {
    const numTodos = Array.from(list.children)
    .filter(todo => {
        return !todo.classList.contains('done');
    }).length;

    if(numTodos >= 0){
        html = `
            <p> ${numTodos} items left</p>
            <ul>
                <li><button type="button" class="all"><span>All</span></button></li>
                <li><button type="button" class="active"><span>Active</span></button></li>
                <li><button type="button" class="completed"><span>Completed</span></button></li>
            </ul>
            <button type="button" class="clear"><span>Clear completed</span></button>
            `
        filter.innerHTML = html;
        filter.style.border = "1px solid gray";
        filter.classList.remove('hide');
    } 
};

const hideFilter = () => {
    if(Array.from(list.children).length == 0) {
        filter.classList.add('hide');
    }
}

const clickFilter = (e) => {
    const val = e.target.parentElement.classList;
    
    if(val.contains('all')){
        Array.from(list.children)
        .forEach(item => {
            item.style.display = "flex";
        });
    }
    if(val.contains('active')){  
        Array.from(list.children).forEach(item => {
            if(item.classList.contains('done')){
                item.style.display = "none";
            } else {
                item.style.display = "flex";
            }
        });
    }
    if(val.contains('completed')){
        Array.from(list.children).forEach(item => {
            if(item.classList.contains('done')){
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    }
    if(val.contains('clear')){
        Array.from(list.children)
        .filter(item => {
            return item.classList.contains('done');   
        }).forEach(item => {
            item.remove();
            deleteLocal(item.innerText);
        });
        displayFilter();
        hideFilter();
    }
}; 

//Event Listeners
window.addEventListener('DOMContentLoaded', getTodos);
form.addEventListener('submit', addTodo);
form.addEventListener('click', clickArrow);
list.addEventListener('click', deleteItem);
filter.addEventListener('click', clickFilter);


