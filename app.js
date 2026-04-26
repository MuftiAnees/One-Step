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

const now = new Date();
const dateElement = document.querySelector(".date");
dateElement.textContent = now.toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
});

const quotes = [
  {
    text: "You don't have to see the whole staircase. Just take the first step.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
  { text: "Done is better than perfect.", author: "Sheryl Sandberg" },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  { text: "Small steps every day.", author: "One Step" },
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
const quoteText = document.querySelector(".quote-text");
const quoteAttr = document.querySelector(".quote-attr");
quoteText.textContent = `"${randomQuote.text}"`;
quoteAttr.textContent = `— ${randomQuote.author}`;
