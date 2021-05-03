// <<==== Currency Converter ====>>

const amount = document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");

const currency = new Currency("USD", "TRY");
const ui = new UI(firstSelect, secondSelect);

eventListeners();

function eventListeners() {
    amount.addEventListener("input", exchangeCurrency);
    firstSelect.onchange = function () {
        currency.changeFirstCurrency(
            firstSelect.options[firstSelect.selectedIndex].value
        );
        exchangeCurrency();
        ui.changeFlagFirst(firstSelect.options[firstSelect.selectedIndex].value);
    };
    secondSelect.onchange = function () {
        currency.changeSecondCurrency(
            secondSelect.options[secondSelect.selectedIndex].value
        );
        exchangeCurrency();
        ui.changeFlagSecond(secondSelect.options[secondSelect.selectedIndex].value);
    };
}

function exchangeCurrency() {
    currency.changeAmount(amount.value);

    currency
        .exchange()
        .then((result) => {
            ui.displayResult(result);
        })
        .catch((err) => console.log(err));
}

ui.addCurrency();