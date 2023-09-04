//Variables
const body = document.querySelector("body")
const editableInput = document.querySelector(".editable");
const readonlyInput = document.querySelector(".readonly");
const placeholder = document.querySelector(".placeholder");
const counter = document.querySelector(".counter");
const button = document.querySelector("button");

(function addEventListeners() {
    editableInput.onkeyup = editableInputFunc;
    editableInput.onkeydown = () => {
        placeholder.style.display = "none";
    };
})()

let tweetText;

function editableInputFunc(e) {
    let element = e.target;
    let currentLength = element.innerText.length;
    let textTag = element.innerHTML;
    let maxLength = 101;
    console.log(currentLength);
    if (currentLength <= 1) {
        counter.style.display = "none"
        placeholder.style.display = "block"
        button.classList.remove("active");
    } else {
        counter.style.display = "block"
        placeholder.style.display = "none"
        button.classList.add("active");
    }
    counter.innerText = maxLength - currentLength;

    if (currentLength > 100) {
        let overText = element.innerText.substr(maxLength);
        console.log(overText);
        overText = `<span class="highlight">${overText}</span>`;
        textTag = element.innerText.substr(0, maxLength) + overText;
        readonlyInput.style.zIndex = "1";
        counter.style.color = "#e0245e";
        button.classList.remove("active")
    } else {
        readonlyInput.style.zIndex = "1";
        counter.style.color = "#ffffff  ";
        button.classList.add("active")
    }
    readonlyInput.innerHTML = textTag;
    tweetText = editableInput.innerHTML;
}