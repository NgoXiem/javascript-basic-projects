const btns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        
        btns.forEach(btn => {
            btn.classList.remove('active');
        });
        
        e.target.classList.add('active');
        
        contents.forEach(content => {
            
            if(content.id == e.target.dataset.id) {
                content.classList.add('active');
            }

            if(content.id !== e.target.dataset.id){
                content.classList.remove('active');
            }
        });
    });
});
