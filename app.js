const addForm = document.getElementById("add-form");
addForm.addEventListener("submit", addTask);

document.addEventListener('click', (e) => {
    if(e.target.className.includes('delete-icon')) {
       const span = e.target;
       const btn = span.parentElement;
       const task = btn.parentElement.parentElement;
       task.remove();
    }
  })


//Delete a task 

function deleteTask(task){

}



//Adding a Task
function addTask(e) {
  e.preventDefault();
  // read the user entered value in the input field
  const inputField = document.getElementById("entered-todo");
  const enteredValue = inputField.value.trim()
  //validation
  if (!enteredValue) return alert("please enter a task !");
  //create a div with class card
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<div>
    <input type="checkbox">
    <span>${enteredValue}</span>
</div>

<button class="delete-btn">
<span class="material-symbols-outlined delete-icon">
    delete_forever
    </span>
</button>`;


// add the task to the dom 
const taskList = document.getElementById('todos-list');
taskList.appendChild(card);
//clear the input
inputField.value = '';



}