const addTodo = document.querySelector('.add');
const todo = document.querySelector('.todos');
const searchTodo = document.querySelector('.search');

const displayTodo = (item) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${item}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `
    todo.innerHTML += html;
}

//display to-dos

addTodo.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = addTodo.add.value.trim();
    if(todo.length){
        displayTodo(todo);
        addTodo.reset();
    }
    
});

//delete todos

todo.addEventListener('click', (e) => {
    if(e.target.tagName == "I"){
        e.target.parentElement.remove();
    }
});


//filter todos
const filterArray = (key) => {
    Array.from(todo.children)
    .filter((item) => {
        return !item.textContent.toLowerCase().includes(key);
    })
    .forEach(item => {
        //item.classList.add('filtered');
        item.classList.add('filtered');
    });

    Array.from(todo.children)
    .filter((item) => {
        return item.textContent.toLowerCase().includes(key);
    })
    .forEach(item => {
        //item.classList.add('filtered');
        item.classList.remove('filtered');
    });
};

searchTodo.addEventListener('keyup', (e) => {
    const key = searchTodo.search.value.toLowerCase().trim();
    filterArray(key);
});

