import { UI } from "./ui.js";
import { allElementsInformation } from "./elements.js";

const ui = new UI();

// Setup module
// ------------------------------

const periodicTableBasic = (function () {
  //
  // Setup module components
  //

  //Variables
  const elements = document.querySelectorAll(".element");
  const changeButtons = document.querySelectorAll(".changeCheck");
  const checkState = "all";

  // Hover Effect
  const _hoverEffectOnElements = function () {
    ui.hoverEffectOnElementsUI(elements);
  };

  // Information Modals
  const _informationForElement = function () {
    elements.forEach((element) => {
      element.addEventListener("click", function () {
        ui.informationForElementUI(elements);
      });
    });
  };

  // Change element check state

  const _changeCheck = function () {
    changeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        ui.changeCheckUI(elements, button);
      });
    });
  };

  //
  // Return objects assigned to module
  //

  return {
    init: function () {
      _hoverEffectOnElements();
      _informationForElement();
      _changeCheck();
    },
  };
})();

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  periodicTableBasic.init();
});
