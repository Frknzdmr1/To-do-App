const addForm = document.getElementById("add-form");
addForm.addEventListener("submit", addTask);


// variables

let total = 0;
let completed = 0;


document.addEventListener('click', (e) => {
    if(e.target.className.includes('delete-icon')) {
       const span = e.target;
       const btn = span.parentElement;
       const task = btn.parentElement;

       const checkBox = btn.previousElementSibling.firstElementChild;
       if( checkBox.checked) {
       // decrease the completed task number by 1
        completed -= 1;
        document.getElementById('completed').textContent= completed;
       }
       task.remove();
       // update the app stats with total number of tasks
      total -=1;
      document.getElementById('total').textContent = total;
    }
  })

// change color if checkbox is clicked 

  document.addEventListener('change', (e) => {
    if(e.target.checked && e.target.className.includes('finish-box')) {
      const task = e.target.parentElement.parentElement;
      task.style.backgroundColor = 'lightgreen';

  //increase the completed task number by 1
  completed += 1;
  document.getElementById('completed').textContent = completed
  }else if (e.target.className.includes('finish-box') && !e.target.checked){
      const task = e.target.parentElement.parentElement
      task.style.backgroundColor = 'skyblue';
      completed -= 1;
      document.getElementById('completed') = completed;
    }
  })

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
    <input type="checkbox" class="finish-box">
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

// update the app stats with total number of tasks
total += 1;
document.getElementById('total').textContent = total;

}