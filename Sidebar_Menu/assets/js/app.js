//Variables ~~
const sideBar = document.querySelector(".sidebar")
const navLinks = document.querySelectorAll(".nav-link");
const background = document.getElementById("background");
const cancel = document.getElementById("cancel");
var audio = document.getElementById("myAudio");


navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(link => {
            link.classList.remove("active");
        });
        this.classList.add("active");
        sideBar.style.setProperty('--background', `${this.name}`);
        background.src = `./assets/images/${this.id}.png`;
        cancel.style.color = this.name;
        audio.src = `./assets/audio/${this.id}.mp3`;
        pauseAudio()
        playAudio()

    });


});

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}