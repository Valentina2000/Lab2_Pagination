const contactsInfo = users
console.log(contactsInfo)

document.addEventListener('DOMContentLoaded', function (){
    const conte = document.querySelector('.contact-list');
    const contactsPage = 10; 
    let current = 0; 
    const item = Array.from(conte.getElementsByTagName('li')).slice(0);
    
    let avatar = document.getElementById("avatar");
    let name = document.getElementById("name");

    function show(page){
        const start = page * contactsPage; 
        const end = start + contactsPage;

        item.forEach((item1, index) =>{
         
            item1.classList.toggle('hidden', index < start || index >= end);
            
            console.log(index);
            
        });
        updateActiveButtonStates();
    }
    
    function createButtons(){
        //Round up number of pages to show
        const totalP = Math.ceil(item.length / contactsPage);
        const paginationContainer = document.createElement('div');
        const paginationSec = document.body.appendChild(paginationContainer);
        paginationContainer.classList.add('pagination');
    
        for(let i = 0; i < totalP; i++){
            const pageButton = document.createElement('button');
            pageButton.textContent = i + 1;
            pageButton.addEventListener('click', () =>{
                current = i;
                show(current);
                updateActiveButtonStates();
            });

            conte.appendChild(paginationContainer);
            paginationSec.appendChild(pageButton);
        }
    
        
    }
    
    function updateActiveButtonStates(){
        const pageButton = document.querySelectorAll('.pagination button');
        pageButton.forEach((button, index) =>{
            if(index === current){
                button.classList.add('active');
            }else{
                button.classList.remove('active');
            }
        });
    }
    
    createButtons();
    show(current);

});

