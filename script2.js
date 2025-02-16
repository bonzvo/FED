// Učitaj zadatke iz localStorage pri pokretanju
document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((taskText) => {
    createTaskElement(taskText);
  });
}

function createTaskElement(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Obriši";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
    saveTasks();
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function saveTasks() {
  const tasks = Array.from(taskList.children).map(
    (li) => li.firstChild.textContent
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Unesite zadatak!");
    return;
  }

  createTaskElement(taskText);
  saveTasks();
  taskInput.value = "";
}
