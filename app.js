
// Referenciramo elemente
var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");
var time = document.getElementById("timeLine");

// Funkcija za dodavanje novog zadatka
addButton.addEventListener("click", () => {
  var taskText = taskInput.value.trim();

  if (taskText !== "") {
    var li = document.createElement("li");

    // Dodaj tekst zadatka u listu
    li.innerHTML = `${taskText} <button class="remove">Briši</button>`;

    // Dodaj zadatak na listu
    taskList.appendChild(li);

    // Brisanje zadatka
    var removeButton = li.querySelector(".remove");
    removeButton.addEventListener("click", () => {
      li.remove();
    });

    // Oznaka zadatka kao dovršen
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    // Očisti input polje
    taskInput.value = "";
  }
});

// Dodavanje zadatka s tipkom Enter
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addButton.click();
  }
});

//Vrijeme kreiranja
date to 
