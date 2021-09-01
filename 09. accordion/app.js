//using selectors inside the element
// traversing the dom
const btns = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        questions.forEach(question => {
            if(e.currentTarget.parentElement.parentElement !== question) {
                question.classList.remove('show-text');
            }
        });
        
        e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
    });




});
