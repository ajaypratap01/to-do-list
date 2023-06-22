const input = document.querySelector("#ti");
const taskList = document.querySelector("#tl");

document.querySelector("#btn").addEventListener("click", function() {
  const taskValue = input.value.trim();
  
  if (taskValue === "") {
    alert("You can't add an empty task");
  } else {
    const li = createTaskElement(taskValue);
    taskList.appendChild(li);
    input.value = "";
  }
});

document.querySelector("#btn-1").addEventListener("click", function() {
  clearTaskList();
});

function createTaskElement(taskValue) {
  const li = document.createElement("li");
  li.classList.add("task-item");
  li.innerText = taskValue;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", function() {
    li.remove();
  });

  li.appendChild(deleteButton);
  return li;
}

function clearTaskList() {
  taskList.innerHTML = "";
}
