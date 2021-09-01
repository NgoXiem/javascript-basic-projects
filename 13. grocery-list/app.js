

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//variables

const list = document.querySelector('.grocery-list');
const form = document.querySelector('.grocery-form');
const showContainer = document.querySelector('.grocery-container');
const alert = document.querySelector('.alert');
const clearBtn = document.querySelector('.clear-btn');
const submitBtn = document.querySelector('.submit-btn');
const grocery = document.querySelector('#grocery');
let value = false;
let editItem;

//function

displayItem = (value) => {
    html = `
    <article class="grocery-item">
        <p class="title">${value}</p>
        <div class="btn-container">
        <!-- edit btn -->
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <!-- delete btn -->
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
        </div>
    </article>
          `;
    list.innerHTML += html;
}



//display List in UI

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const item = e.target.grocery.value.trim();
    
    if(item && !value){
        displayItem(item);
        showContainer.classList.add('show-container'); 
        alert.textContent = 'Item added to the list' ;

        list.addEventListener('click', (e) => {

            //Delete Function////
            if(e.target.classList.contains('fa-trash')){
                e.target.parentElement.parentElement.parentElement.remove();
                alert.textContent = 'Item removed';
            }
            
            if(list.children.length == 0) {
                showContainer.classList.remove('show-container');   
            }
        
            //Edit Function////
            if(e.target.classList.contains('fa-edit')){
                editItem = e.target.parentElement.parentElement.previousElementSibling;
                value = true;
                submitBtn.textContent = 'Edit';
                grocery.value = editItem.textContent;
            }
        
            setTimeout(() => {
                alert.textContent = '';
            }, 500);
        
        });

    } else if(item && value) { 
        editItem.textContent = grocery.value;
        alert.textContent = 'Value changed';
        setBackToDefault();    
    } else {
        alert.textContent = 'Please enter value';
    }

    setTimeout(() => {
        alert.textContent = '';
    }, 500);

    form.reset();
});

//back to Default

setBackToDefault = () => {
    value = false;
    submitBtn.textContent = 'Submit';
}


//Clear Items

clearBtn.addEventListener('click', () => {
    Array.from(list.children).forEach(item => {
        item.remove();
    });
    alert.textContent = 'Empty list';
    setTimeout(()=> {
        showContainer.classList.remove('show-container');
        alert.textContent = '';  
    }, 500);
});



