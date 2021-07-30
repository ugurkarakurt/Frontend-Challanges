export class UI {
  hoverEffectOnElementsUI(elements) {
    elements.forEach((element) => {
      element.addEventListener("mouseover", function (e) {
        const className = element.className.split(" ").slice(1).join(" ");

        switch (className) {
          case "alkali__metal":
            elements.forEach((element) => {
              element.classList.contains("alkali__metal")
                ? (element.style.filter = "grayscale(0%)")
                : (element.style.filter = "grayscale(90%)");
            });
            break;
          case "alkaline__earth__metal":
            elements.forEach((element) => {
              element.classList.contains("alkaline__earth__metal")
                ? (element.style.filter = "grayscale(0%)")
                : (element.style.filter = "grayscale(90%)");
            });
            break;
          case "nonmetal":
            elements.forEach((element) => {
              element.classList.contains("nonmetal")
                ? (element.style.filter = "grayscale(0%)")
                : (element.style.filter = "grayscale(90%)");
            });
            break;
          case "transition__metal":
            elements.forEach((element) => {
              element.classList.contains("transition__metal")
                ? (element.style.filter = "grayscale(0%)")
                : (element.style.filter = "grayscale(90%)");
            });
            break;
          case "lanthanide":
            elements.forEach((element) => {
              element.classList.contains("lanthanide")
                ? (element.style.filter = "grayscale(0%)")
                : (element.style.filter = "grayscale(90%)");
            });
            break;
          case "actinide":
            elements.forEach((element) => {
              element.classList.contains("actinide")
                ? (element.style.filter = "grayscale(0%)")
                : (element.style.filter = "grayscale(90%)");
            });
            break;
          case "post__transition__metal":
            elements.forEach((element) => {
              element.classList.contains("post__transition__metal")
                ? (element.style.filter = "grayscale(0%)")
                : (element.style.filter = "grayscale(90%)");
            });
            break;
          case "metalloid":
            elements.forEach((element) => {
              element.classList.contains("metalloid")
                ? (element.style.filter = "grayscale(0%)")
                : (element.style.filter = "grayscale(90%)");
            });
            break;
          case "halogen":
            elements.forEach((element) => {
              element.classList.contains("halogen")
                ? (element.style.filter = "grayscale(0%)")
                : (element.style.filter = "grayscale(90%)");
            });
            break;
          case "noble__gas":
            elements.forEach((element) => {
              element.classList.contains("noble__gas")
                ? (element.style.filter = "grayscale(0%)")
                : (element.style.filter = "grayscale(90%)");
            });
            break;
        }
      });
      element.addEventListener("mouseout", function (e) {
        elements.forEach((element) => {
          element.style.filter = "grayscale(0%)";
        });
      });
    });
  }
  
  informationForElementUI(elements) {
    $("#information").modal("show");
  }

  addModalUI(currentElement, elementList, allElementsInformation) {
    const name = currentElement.querySelector(".name");
    elementList.atomicNumber.innerHTML = `${allElementsInformation}.${name.innerHTML}.atomic_number;
    `;
  }
}
