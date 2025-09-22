//array
let tasks = [
    {id:1, description: "Assignment in COMP254", status: "pending"},
    {id:2, description: "Clean the house", status: "completed"},
    {id:3, description: "Pay bills", status: "high-priority"},
];


function displayTasks(){
    // get reference of the element
const taskListDiv = document.getElementById("task-list");

// start adding content to the task list div
taskListDiv.innerHTML = "";

//array of statueses
const statuses = ["high-priority", "pending", "completed" ];

// foreach loop
statuses.forEach(status => {
    const filteredTasks = tasks.filter(task => task.status === status);
    if (filteredTasks.length > 0){
        taskListDiv.innerHTML += `<h2>${status} Tasks</h2><ul>`;
        filteredTasks.forEach(task => {
            taskListDiv.innerHTML += `
            <li>
                ${task.description}
                ${task.status == "pending" ? `<button onclick="markcompleteTask(${task.id})">Mark Complete</button>` : ""}
            </li>
            `;
        });
        taskListDiv.innerHTML += "</ul>";
    }

});
}

//function to add a new task
function AddTask(){
    const taskDescription = document.getElementById("taskDescription").value;
    const taskStatus = document.getElementById("taskStatus").value;
    const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1: 1,
    description: taskDescription,
    status: taskStatus
}
    tasks.push(newTask);
    displayTasks();
}

function markcompleteTask(taskId){
    const task = tasks.find(task => task.id === taskId);
    task.status = "completed";
    displayTasks();
}

function removeCompletedTasks(){
    tasks = tasks.filter(task => task.status !== "completed");
    displayTasks();

}
//load the page - display all task
document.addEventListener("DOMContentLoaded", displayTasks);
