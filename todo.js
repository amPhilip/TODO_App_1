const addTask = document.querySelector('.add');
const taskItems = document.querySelector('.items')
const searchItems = document.querySelector('.search input');


//create a function that will add the tasks

const todolist = (theTask) => {
    //pass in the theTask
    const html = 
    `<li class="item">
        <h4>${theTask}</h4>
        <i class="fas fa-trash"></i>
    </li>`;

    //injecting theTask to the ul
    taskItems.innerHTML += html;

}
/* add a task*/
addTask.addEventListener('submit', e => {

    e.preventDefault();

    const theTask = addTask.task.value.trim();
    //prevent submitting an empty task
    if(theTask.length){
        todolist(theTask);
        addTask.reset(); 
    }
    
});

/*delete tasks*/
taskItems.addEventListener('click', e => {

    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.remove();
    }

});

const filteredWords = (searchWords)=> {
    //change tthe htmlcollection into an array
    Array.from(taskItems.children)
    .filter((todotasks) => {
        return !todotasks.textContent.toLowerCase().includes(searchWords);
        })
    .forEach((todotasks) => {
        todotasks.classList.add('filtered');
    })

    Array.from(taskItems.children)
    .filter((todotasks) => {
        return todotasks.textContent.toLowerCase().includes(searchWords);
        })
    .forEach((todotasks) => {
        todotasks.classList.remove('filtered');
    })
};

/*filter tasks*/
searchItems.addEventListener('keyup', () => {

    //get the search 
    const searchWords = searchItems.value.trim().toLowerCase();
     filteredWords(searchWords);
    
});







