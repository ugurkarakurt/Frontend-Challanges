// Variables 
const header = document.querySelector("header");
const moonIcon = document.querySelector(".fa-moon");

//images
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let mountains_front = document.getElementById("mountains_front");
//Texts
let title = document.getElementById("title");
let explore_btn = document.getElementById("explore_btn");
//Cards
let cards = document.querySelectorAll(".card");
//Add Event Listeners -- IIFE 
(function addEventListeners() {
    window.addEventListener("scroll", windowScroll);
    moonIcon.onclick = toggleMenu;

})()

function windowScroll() {
    let scrollValue__Y = window.scrollY;

    stars.style.transform = `translateY(${scrollValue__Y * .25}px)`
    moon.style.transform = `translateY(${scrollValue__Y * 1}px)`
    mountains_behind.style.transform = `translateY(${scrollValue__Y * 0.5}px)`
    mountains_front.style.transform = `translateY(${scrollValue__Y * 0}px)`
    title.style.transform = `translateX(-${scrollValue__Y * 1}px)`
    title.style.marginTop = ` ${scrollValue__Y * 1.5}px`
    explore_btn.style.marginTop = ` ${scrollValue__Y * 1.7}px`
    header.style.transform = `translateY(${scrollValue__Y * 0.5}px)`
    for (let i = 0; i < cards.length; i++) {
        if (scrollValue__Y > 650) {
            cards[i].classList.remove("animate__fadeOutRight")
            cards[1].classList.remove("animate__delay-1s")
            cards[2].classList.remove("animate__delay-2s")
            cards[i].classList.add("animate__fadeInRight")
            cards[1].classList.add("animate__delay-1s")
            cards[2].classList.add("animate__delay-2s")
            cards[i].style.display = "block"
        } else if (scrollValue__Y < 650) {
            cards[i].classList.remove("animate__fadeInRight")
            cards[1].classList.remove("animate__delay-1s")
            cards[2].classList.remove("animate__delay-2s")
            cards[i].classList.add("animate__fadeOutRight")
            cards[1].classList.add("animate__delay-1s")
            cards[2].classList.add("animate__delay-2s")
        }
    }
}

function toggleMenu() {
    const dropdownMenu = document.querySelector(".dropdown-list");
    console.log(dropdownMenu);
    if (dropdownMenu.classList.contains("display")) {
        dropdownMenu.classList.remove("display");
    } else {
        dropdownMenu.classList.add("display");
    }
}