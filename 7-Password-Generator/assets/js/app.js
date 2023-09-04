// Setup module
// ------------------------------

const periodicTableBasic = (function () {
  //
  // Setup module components
  //

  const screen = document.getElementById("display");
  let generatedPassword = "";

  //Custom Dynamic Range Input Color & Value

  const _customRangeInput = function () {
    const rangeInputs = document.getElementById("range");
    const numberInput = document.getElementById("rangevalue");

    eventListeners();

    function eventListeners() {
      rangeInputs.addEventListener("input", handleInputChange);
      numberInput.addEventListener("input", handleInputChange);
    }

    function handleInputChange(e) {
      let target = e.target;
      if (e.target.type !== "range") {
        target = document.getElementById("range");
      }
      const min = target.min;
      const max = target.max;
      const val = target.value;

      target.style.backgroundSize =
        ((val - min) * 100) / (max - min) + "% 100%";
    }
  };

  //Generate Random Password

  const _generatePassword = function () {
    const generateButton = document.getElementById("generateButton");
    const range = document.getElementById("range");

    eventListeners();

    function eventListeners() {
      generateButton.addEventListener("click", generatePassword);
    }

    function generatePassword() {
      const uppercase = document.getElementById("uppercase");
      const lowercase = document.getElementById("lowercase");
      const numbers = document.getElementById("numbers");
      const symbols = document.getElementById("symbols");

      let charsetUppercase = uppercase.checked
        ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        : "";
      let charsetLowercase = lowercase.checked
        ? "abcdefghijklmnopqrstuvwxyz"
        : "";
      let charsetNumbers = numbers.checked
        ? "0123456789" 
        : "";
      let charsetSymbols = symbols.checked
        ? "!@#$%^&*()_+~`|}{[]:;?><,./-='"
        : "";

      let charset =
        charsetUppercase + charsetLowercase + charsetNumbers + charsetSymbols;

      generatedPassword = "";

      let length = range.value;
      console.log(charset);
      for (var i = 0, n = charset.length; i < length; ++i) {
        generatedPassword += charset.charAt(Math.floor(Math.random() * n));
      }

      screen.value = generatedPassword;
    }
  };

  //
  // Return objects assigned to module
  //

  return {
    init: function () {
      _customRangeInput();
      _generatePassword();
    },
  };
})();

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  periodicTableBasic.init();
});
