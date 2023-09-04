//variables
const section = document.querySelector("section");
const toggle = document.querySelector(".toggle");
const i = toggle.querySelector("i");
const pp = document.getElementById("pp");
const title = document.getElementById("title");
const article = document.getElementById("article");

let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
    pp.src = "./assets/images/moon.jpg";
    title.innerHTML = "Selene";
    article.innerHTML = "Personification of the Moon";
}
if (localStorage.getItem('theme') === "dark") {
    i.classList.remove("fa-moon");
    i.classList.add("fa-sun");
    pp.src = "./assets/images/moon.jpg";
    title.innerHTML = "Selene";
    article.innerHTML = "Personification of the Moon";
} else if (localStorage.getItem('theme') === "light") {
    i.classList.add("fa-moon");
    i.classList.remove("fa-sun");
    pp.src = "./assets/images/sun.png";
    title.innerHTML = "Helios";
    article.innerHTML = "Personification of the Sun";
}

toggle.onclick = function () {
    let currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
        i.classList.remove("fa-moon");
        i.classList.add("fa-sun");
        i.classList.remove("rotateMoon");
        i.classList.add("rotateSun");
        pp.classList.remove("changeMoon");
        pp.classList.add("changeSun");
        pp.src = "./assets/images/moon.jpg"
        title.innerHTML = "Selene";
        article.innerHTML = "Personification of the Moon";
    } else {
        i.classList.add("fa-moon");
        i.classList.remove("fa-sun");
        i.classList.add("rotateMoon");
        i.classList.remove("rotateSun");
        pp.classList.remove("changeSun");
        pp.classList.add("changeMoon");
        pp.src = "./assets/images/sun.png"
        title.innerHTML = "Helios";
        article.innerHTML = "Personification of the Sun";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
}


