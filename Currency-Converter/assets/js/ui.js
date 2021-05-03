class UI {
    constructor(firstSelect, secondSelect) {
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;

        this.outputResult = document.getElementById("output");

        this.selectFirst = document.getElementById("firstCurrency");
        this.selectSecond = document.getElementById("secondCurrency");

        this.flagFirst = document.getElementById("icon1");
        this.flagSecond = document.getElementById("icon2");
    }

    addCurrency() {
        this.selectFirst.innerHTML = `<option selected  value="USD">United States dollar</option>
                                                  <option value="EUR">European euro</option>
                                                  <option value="JPY">Japanese yen</option>
                                                  <option value="BGN">Bulgarian lev</option>
                                                  <option value="CZK">Czech koruna</option>
                                                  <option value="DKK">Danish krone</option>
                                                  <option value="GBP">Pound sterling</option>
                                                  <option value="HUF">Hungarian forint</option>
                                                  <option value="PLN">Polish zloty</option>
                                                  <option value="RON">Romanian leu</option>
                                                  <option value="SEK">Swedish krona</option>
                                                  <option value="CHF">Swiss franc</option>
                                                  <option value="ISK">Icelandic krona</option>
                                                  <option value="NOK">Norwegian krone</option>
                                                  <option value="HRK">Croatian kuna</option>
                                                  <option value="RUB">Russian ruble</option>
                                                  <option value="TRY">Turkish lira</option>
                                                  <option value="AUD">Australian dollar</option>
                                                  <option value="BRL">Brazilian real</option>
                                                  <option value="CAD">Canadian dollar</option>
                                                  <option value="CNY">Chinese Yuan Renminbi</option>
                                                  <option value="HKD">Hong Kong dollar</option>
                                                  <option value="IDR">Indonesian rupiah</option>
                                                  <option value="ILS">Israeli new shekel</option>
                                                  <option value="INR">Indian rupee</option>
                                                  <option value="KRW">South Korean won</option>
                                                  <option value="MXN">Mexican peso</option>
                                                  <option value="MYR">Malaysian ringgit</option>
                                                  <option value="NZD">New Zealand dollar</option>
                                                  <option value="PHP">Philippine peso</option>
                                                  <option value="SGD">Singapore dollar</option>
                                                  <option value="THB">Thai baht</option>
                                                  <option value="ZAR">South African rand</option>`;
        this.selectSecond.innerHTML = `         <option value="USD">United States dollar</option>
                                                  <option value="EUR">European euro</option>
                                                  <option value="JPY">Japanese yen</option>
                                                  <option value="BGN">Bulgarian lev</option>
                                                  <option value="CZK">Czech koruna</option>
                                                  <option value="DKK">Danish krone</option>
                                                  <option value="GBP">Pound sterling</option>
                                                  <option value="HUF">Hungarian forint</option>
                                                  <option value="PLN">Polish zloty</option>
                                                  <option value="RON">Romanian leu</option>
                                                  <option value="SEK">Swedish krona</option>
                                                  <option value="CHF">Swiss franc</option>
                                                  <option value="ISK">Icelandic krona</option>
                                                  <option value="NOK">Norwegian krone</option>
                                                  <option value="HRK">Croatian kuna</option>
                                                  <option value="RUB">Russian ruble</option>
                                         <option selected value="TRY">Turkish lira</option>
                                                  <option value="AUD">Australian dollar</option>
                                                  <option value="BRL">Brazilian real</option>
                                                  <option value="CAD">Canadian dollar</option>
                                                  <option value="CNY">Chinese Yuan Renminbi</option>
                                                  <option value="HKD">Hong Kong dollar</option>
                                                  <option value="IDR">Indonesian rupiah</option>
                                                  <option value="ILS">Israeli new shekel</option>
                                                  <option value="INR">Indian rupee</option>
                                                  <option value="KRW">South Korean won</option>
                                                  <option value="MXN">Mexican peso</option>
                                                  <option value="MYR">Malaysian ringgit</option>
                                                  <option value="NZD">New Zealand dollar</option>
                                                  <option value="PHP">Philippine peso</option>
                                                  <option value="SGD">Singapore dollar</option>
                                                  <option value="THB">Thai baht</option>
                                                  <option value="ZAR">South African rand</option>`;
    }

    changeFlagFirst(value) {
        this.flagFirst.src = `assets/img/${value}.png`;
    }
    changeFlagSecond(value) {
        this.flagSecond.src = `assets/img/${value}.png`;
    }
    displayResult(result) {
        this.outputResult.value = result;
    }
}