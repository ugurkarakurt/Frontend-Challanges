import { UI } from "./ui.js";
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
  const search = document.querySelector(".search");
  const elementNames = Array.from(document.querySelectorAll(".name"));

  // Hover Effect
  const _hoverEffectOnElements = function () {
    ui.hoverEffectOnElementsUI(elements);
  };

  // MouseOut Event
  const _mouseoutEffectOnElements = function () {
    ui.mouseoutEffectOnElementsUI(elements, changeButtons);
  };

  // Element info
  const _informationForElement = function () {
    elements.forEach((element) => {
      element.addEventListener("click", function () {
        document.querySelector(".input__description").style.display = "none";
        document.querySelector(".search").style.display = "none";
        ui.informationForElementUI(element);
        _closeModalEvent();
        search.value = "";
      });
    });
  };

  // Change element check state
  const _changeCheck = function () {
    changeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        ui.changeCheckUI(elements, button, changeButtons);
      });
    });
  };

  // Close Modal Event
  const _closeModalEvent = function () {
    const closeButton = document.querySelector(".close__modal");
    const infoModal = document.getElementById("infoModal");
    const keyESC = 27;

    infoModal.addEventListener("click", function (e) {
      if (e.target.id === infoModal.id) {
        ui.closeModalEventFromUI(infoModal);
        document.querySelector(".input__description").style.display = "block";
        document.querySelector(".search").style.display = "block";
      }
    });

    closeButton.addEventListener("click", function () {
      ui.closeModalEventFromUI(infoModal);
      search.focus();
      document.querySelector(".input__description").style.display = "block";
      document.querySelector(".search").style.display = "block";
    });

    document.addEventListener("keydown", function (event) {
      if (event.keyCode === keyESC) {
        ui.closeModalEventFromUI(infoModal);
        search.focus();
        document.querySelector(".input__description").style.display = "block";
        document.querySelector(".search").style.display = "block";
      }
    });
  };

  //Empty search
  const _removeSearch = function () {
    document.addEventListener("keyup", function (e) {
      if (e.keyCode === 27) {
        search.value = "";
        elements.forEach((element) => {
          element.classList.remove("active");
          element.classList.remove("grayscale");
        });
      }
    });
  };

  // Search An Element
  const _searchElement = function () {
    document.addEventListener("click", function (e) {
      const main = document.querySelector(".main");
      const emptySpacer = document.querySelector(".empty-spacer");
      if (e.target === main || emptySpacer) {
        search.focus();
      }
    });

    ui.searchElementUI(elements, elementNames, search);
  };

  //
  // Return objects assigned to module
  //

  return {
    init: function () {
      _hoverEffectOnElements();
      _mouseoutEffectOnElements();
      _informationForElement();
      _changeCheck();
      _searchElement();
      _removeSearch();
    },
  };
})();

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  periodicTableBasic.init();
});
