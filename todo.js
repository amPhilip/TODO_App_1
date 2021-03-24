/*filter tasks*/

/*delete tasks*/


/* add a task*/
const addTask = document.querySelector('.add');
const taskItems = document.querySelector('.items')

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

addTask.addEventListener('submit', e => {

    e.preventDefault();

    const theTask = addTask.task.value.trim();
    //prevent submitting an empty task
    if(theTask.length){
        todolist(theTask);
        addTask.reset(); 
    }
    
});