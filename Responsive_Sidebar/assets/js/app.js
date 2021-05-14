import { UI } from "./ui.js";
import { pokemonList } from "./data.js";
const ui = new UI();

//Variables
let root = document.documentElement;

const aside = document.getElementById("aside");
ui.addNavItem(aside, pokemonList);

const navLinks = document.querySelectorAll(".nav-link");

// Event Listeners
(function addEventListeners() {
  navLinks.forEach((link) => {
    link.onclick = activeLink;
  });
})();

function activeLink() {
  const colors = this.querySelectorAll("span");
  const bg = document.getElementById("bg");

  bg.src = `./assets/images/${this.id}.png`;

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
  this.classList.add("active");
  root.style.setProperty("--bg-primary", `${colors[1].innerHTML}`);
  root.style.setProperty("--bg-secondary", `${colors[2].innerHTML}`);
  root.style.setProperty("--bg-tertiary", `${colors[3].innerHTML}`);
}
