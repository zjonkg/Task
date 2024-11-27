

const pendingTasks = document.getElementById('pending-tasks');
const doneTasks = document.getElementById('done-tasks');


function moveTask(event) {
    const task = event.target;
    

    if (task.tagName === 'LI') {

        if (task.parentNode === pendingTasks) {
            doneTasks.appendChild(task);
        } else {
            pendingTasks.appendChild(task);
        }
    }
}

pendingTasks.addEventListener('click', moveTask);
doneTasks.addEventListener('click', moveTask);
