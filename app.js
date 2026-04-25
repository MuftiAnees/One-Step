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
  `;
  taskItem.querySelector(".task-check").addEventListener("click", function () {
    taskItem.classList.toggle("done");
  });
  taskList.appendChild(taskItem);
  addInput.value = "";
});

addInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});
