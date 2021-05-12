//Variables
const navbar = document.querySelector(".nav");
const navTrigger = document.querySelector(".navTrigger");
const mainListDiv = document.getElementById("mainListDiv");
const toTop = document.getElementById("toTop");
const rememberMe = document.getElementById("rememberMe");
const username = document.getElementById("username");
const checkInp = document.getElementById("checkbox");
const checkBoxes = document.querySelector(".checkBoxes");
const login = document.getElementById("login");

// Event Listeners
(function addEventListeners() {
  window.addEventListener("scroll", windowScroll);
  rememberMe.onclick = rememberMeFunc;
  username.addEventListener("input", checkField);
  login.addEventListener("click", () => {
    checkInp.classList.add("fa-times");
    checkInp.classList.remove("fa-check");
  });
})();

function windowScroll() {
  let scrollValue__Y = window.scrollY;
  if (scrollValue__Y > 50) {
    toTop.style.display = "block";
    navbar.classList.add("affix");
    console.log("OK");
  } else {
    toTop.style.display = "none";
    navbar.classList.remove("affix");
  }
}
if (!username.value) {
  checkBoxes.style.display = "none";
}

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rememberMe.setAttribute("checked", "checked");
  username.value = localStorage.username;
  checkInp.classList.remove("fa-times");
  checkInp.classList.add("fa-check");
} else {
  rememberMe.removeAttribute("checked");
  username.value = "";
  checkInp.classList.add("fa-times");
  checkInp.classList.remove("fa-check");
}

function rememberMeFunc() {
  if (rememberMe.checked && username.value !== "") {
    localStorage.username = username.value;
    localStorage.checkbox = rememberMe.value;
    checkInp.classList.remove("fa-times");
    checkInp.classList.add("fa-check");
    checkInp.classList.remove("rotate");
    checkInp.classList.add("rotateNeg");
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
    checkInp.classList.add("fa-times");
    checkInp.classList.remove("fa-check");
    checkInp.classList.add("rotate");
    checkInp.classList.remove("rotateNeg");
  }
}
function checkField(e) {
  if (this.value) {
    checkBoxes.style.display = "flex";
  } else {
    checkBoxes.style.display = "none";
    checkInp.classList.add("fa-times");
    checkInp.classList.remove("fa-check");
  }
  rememberMeFunc();
}
