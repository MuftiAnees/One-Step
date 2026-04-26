console.log("One Step is running");

const button = document.querySelector(".btn-primary");
const launchScreen = document.querySelector(".launch-screen");
const addBtn = document.querySelector(".add-btn");
const addInput = document.querySelector(".add-input");
const taskList = document.querySelector("#task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach(function (task, index) {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    if (task.done) taskItem.classList.add("done");
    taskItem.innerHTML = `
      <div class="task-check"></div>
      <p class="task-text">${task.text}</p>
      <span class="delete-btn">
        <i data-feather="trash-2"></i>
      </span>
    `;
    taskItem
      .querySelector(".task-check")
      .addEventListener("click", function () {
        tasks[index].done = !tasks[index].done;
        saveTasks();
        renderTasks();
      });
    taskItem
      .querySelector(".delete-btn")
      .addEventListener("click", function () {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
      });
    taskList.appendChild(taskItem);
    feather.replace();
  });
}

button.addEventListener("click", function () {
  launchScreen.style.display = "none";
  document.querySelector(".task-screen").style.display = "flex";
});

addBtn.addEventListener("click", function () {
  const taskText = addInput.value;
  if (taskText === "") {
    return;
  }
  tasks.push({ text: taskText, done: false });
  saveTasks();
  renderTasks();
  addInput.value = "";
});

addInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

const hour = new Date().getHours();
const greeting = document.querySelector(".greeting");
if (hour < 12) {
  greeting.textContent = "Good Morning";
} else if (hour < 18) {
  greeting.textContent = "Good Afternoon";
} else if (hour < 21) {
  greeting.textContent = "Good Evening";
} else {
  greeting.textContent = "Good Night";
}

renderTasks();
