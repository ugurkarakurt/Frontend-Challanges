// Codes required to open "help modal"

$("#helper").hide();

$("#modalClose").on("click", function() {
    $("#helper").fadeOut(500);
});

$("#close").on('click', function() {
    $("body").fadeOut(1000, function() {
        $(this).remove()
        alert("refresh the page")
    });
});

$("#help").on('click', function() {
    $("#helper").fadeToggle(500)
});

//OPERATIONS

let firstNumber = ''; //save the first number
let secondNumber = ''; //save the second number
let operator = ''; //save the operator 
let total = ''; //save the total value

const display = document.getElementById("display")
const islemler = document.getElementById("operations");
const operators = document.querySelectorAll(".operators")

//I ran a click to hold all of the Buttons.

$('button').click(function(e) {

    let btn = e.target.value; //value of the button 

    if (btn >= '0' && btn <= '9') { //question the number

        if (total != "" || total === Infinity || total === undefined || total === NaN || total == "0") {

            //to make a new transaction without refreshing the page
            total = ""
            display.value = ""
            display.value = btn
            firstNumber = display.value
        } else {
            display.value += btn;
            firstNumber = display.value
        };

    } else if (btn == "C") { //Deleting all values

        display.value = "";
        firstNumber = "";
        secondNumber = "";
        islemler.value = "";
        operator = "";

    } else if (btn == "CE") { //delete the display value

        display.value = "";

    } else if (btn == "--") { //Backspace 

        if (total == "") //not to change the result
            display.value = display.value.substring(0, display.value.length - 1);

    } else if (btn == "=") { //Using equals - only to show the result

        if (firstNumber != "")
            calculations();

    } else if (btn == "negative") { //Using negative numbers

        if (display.value == "")
            display.value = "-"

    } else if (btn === ".") { //Using dot 

        if (display.value != "" && display.value.indexOf(".") === -1 && total === "") {
            display.value += btn;
            firstNumber = display.value
        }

    } else if (btn == "√") { //square root

        if (firstNumber != "") {
            display.value = Math.sqrt(firstNumber);
            firstNumber = Math.sqrt(firstNumber);
            console.log(firstNumber)
        } else if (secondNumber != "") {
            display.value = Math.sqrt(secondNumber);
            secondNumber = Math.sqrt(secondNumber);
            console.log(secondNumber)
        } else if (total != "") {
            display.value = Math.sqrt(total);
            firstNumber = Math.sqrt(total);
        }

    } else if (btn == "pi") { //Pi

        let pi = "3.14159265359"

        if (firstNumber == "") {
            display.value = pi
            firstNumber = pi
        } else {
            display.value = pi
            secondNumber = pi
        }

    } else if (operator === '') { //Operators

        if (firstNumber === "") {
            islemler.value = ""
        } else {
            operator = btn;
            islemler.value += display.value
            islemler.value += btn
            secondNumber += islemler.value
            display.value = ""

        };

    } else { //if the operator is clicked
         
        if (firstNumber != "")
            calculations();
    };

    e.preventDefault(); //Do not refresh the page in any click
     
});

// Calculations

function calculations() {
    switch (operator) {
        case '+':
            total = parseFloat(firstNumber) + parseFloat(secondNumber);
            displayButton(total);
            break;
        case '-':
            total = parseFloat(secondNumber) - parseFloat(firstNumber);
            displayButton(total);
            break;
        case '÷':
            total = parseFloat(secondNumber) / parseFloat(firstNumber);
            displayButton(total);
            break;
        case '×':
            total = parseFloat(firstNumber) * parseFloat(secondNumber);
            displayButton(total);
            break;
        case 'ⁿ':
            total = parseFloat(secondNumber) ** parseFloat(firstNumber);
            displayButton(total);
            break;
    };

};

// total value display

function displayButton(total) {

    $(display).val(total);
    firstNumber = ""
    secondNumber = ""
    islemler.value = ""
    operator = ""

};