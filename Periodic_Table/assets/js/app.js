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

  const atomicNumber = document.getElementById("atomicNumber");
  const atomicMass = document.getElementById("atomicMass");
  const electronegravity = document.getElementById("electronegravity");
  const desity = document.getElementById("desity");
  const meltingPoint = document.getElementById("meltingPoint");
  const boilingPoint = document.getElementById("boilingPoint");
  const vanderwaalsRadius = document.getElementById("vanderwaalsRadius");
  const ionicRadius = document.getElementById("ionicRadius");
  const isotopes = document.getElementById("isotopes");
  const electronicShell = document.getElementById("electronicShell");
  const energy = document.getElementById("energy");
  const discovered = document.getElementById("discovered");
  const description = document.getElementById("description");
  const titleFirst = document.getElementById("titleFirst");
  const contentFirst = document.getElementById("contentFirst");
  const titleSecond = document.getElementById("titleSecond");
  const contentSecond = document.getElementById("contentSecond");
  const titleThird = document.getElementById("titleThird");
  const contentThird = document.getElementById("contentThird");

  const modalElements = {
    atomicNumber,
    atomicMass,
    electronegravity,
    desity,
    meltingPoint,
    boilingPoint,
    vanderwaalsRadius,
    ionicRadius,
    isotopes,
    electronicShell,
    energy,
    discovered,
    description,
    titleFirst,
    contentFirst,
    titleSecond,
    contentSecond,
    titleThird,
    contentThird,
  };

  // Hover Effect
  const _hoverEffectOnElements = function () {
    ui.hoverEffectOnElementsUI(elements);
  };

  // Information Modals
  const _informationForElement = function () {
    elements.forEach((element) => {
      element.addEventListener("click", function () {
        ui.informationForElementUI(elements);
        ui.addModalUI(this, modalElements, allElementsInformation);
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
    },
  };
})();

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  periodicTableBasic.init();
});
