console.log("One Step is running");
const button = document.querySelector(".btn-primary");
const launchScreen = document.querySelector(".launch-screen");
button.addEventListener("click", function () {
  launchScreen.style.display = "none";
});
