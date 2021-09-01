
const form = document.querySelector('#message-form')


form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    const mesgContent = document.querySelector('.message-content');
    const message = document.querySelector('#message');
    const feedback = document.querySelector('.feedback');

    if(message.value.trim()) {
        if(feedback.classList.contains('show')){
            feedback.classList.remove('show');
        }
        mesgContent.textContent = message.value;
    } else {
        feedback.classList.add('show');
    }

})