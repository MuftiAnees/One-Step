console.log("One Step is running");

const button = document.querySelector(".btn-primary");
const launchScreen = document.querySelector(".launch-screen");

button.addEventListener("click", function () {
  launchScreen.style.display = "none";
  document.querySelector(".task-screen").style.display = "flex";
});

const addBtn = document.querySelector(".add-btn");
const addInput = document.querySelector(".add-input");
const taskList = document.querySelector("#task-list");

addBtn.addEventListener("click", function () {
  const taskText = addInput.value;
  if (taskText === "") {
    return;
  }

  const taskItem = document.createElement("div");
  taskItem.classList.add("task");
  taskItem.innerHTML = `
    <div class="task-check"></div>
    <p class="task-text">${taskText}</p>
    <span class="delete-btn">
      <i data-feather="trash-2"></i>
    </span>
  `;

  taskItem.querySelector(".delete-btn").addEventListener("click", function () {
    taskItem.remove();
  });

  taskItem.querySelector(".task-check").addEventListener("click", function () {
    taskItem.classList.toggle("done");
  });

  taskList.appendChild(taskItem);
  addInput.value = "";
  feather.replace();
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
