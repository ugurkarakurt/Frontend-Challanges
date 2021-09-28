import { allElementsInformation } from "./elements.js";
export class UI {
  mouseoutEffectOnElementsUI(elements, changeButtons) {
    elements.forEach((element) => {
      element.addEventListener("mouseout", function () {
        changeButtons.forEach((btn) => {
          btn.style.transform = "scale(1)";
        });
      });
    });
  }

  hoverEffectOnElementsUI(elements) {
    elements.forEach((element) => {
      element.addEventListener("mouseover", function () {
        const className = element.className
          .split(" ")
          .slice(1)
          .join(" ")
          .trim();
        const activeBTN = document.querySelector(`.${className}__info`);
        activeBTN && (activeBTN.style.transform = "scale(1.1)");
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

  changeCheckUI(elements, button, buttons) {
    let className = button.className.split(" ").slice(1).join(" ");
    buttons.forEach((btn) => {
      !button.classList.contains("status__info") &&
        (btn.style.transform = "scale(1)");
    });
    !button.classList.contains("status__info") &&
      (button.style.transform = "scale(1.1)");

    switch (className) {
      case "alkali__metal__info":
        elements.forEach((element) => {
          element.classList.contains("alkali__metal")
            ? (element.style.filter = "grayscale(0%)")
            : (element.style.filter = "grayscale(90%)");
        });
        break;
      case "alkaline__earth__metal__info":
        elements.forEach((element) => {
          element.classList.contains("alkaline__earth__metal")
            ? (element.style.filter = "grayscale(0%)")
            : (element.style.filter = "grayscale(90%)");
        });
        break;
      case "nonmetal__info":
        elements.forEach((element) => {
          element.classList.contains("nonmetal")
            ? (element.style.filter = "grayscale(0%)")
            : (element.style.filter = "grayscale(90%)");
        });
        break;
      case "transition__metal__info":
        elements.forEach((element) => {
          element.classList.contains("transition__metal")
            ? (element.style.filter = "grayscale(0%)")
            : (element.style.filter = "grayscale(90%)");
        });
        break;
      case "lanthanide__info":
        elements.forEach((element) => {
          element.classList.contains("lanthanide")
            ? (element.style.filter = "grayscale(0%)")
            : (element.style.filter = "grayscale(90%)");
        });
        break;
      case "actinide__info":
        elements.forEach((element) => {
          element.classList.contains("actinide")
            ? (element.style.filter = "grayscale(0%)")
            : (element.style.filter = "grayscale(90%)");
        });
        break;
      case "post__transition__metal__info":
        elements.forEach((element) => {
          element.classList.contains("post__transition__metal")
            ? (element.style.filter = "grayscale(0%)")
            : (element.style.filter = "grayscale(90%)");
        });
        break;
      case "metalloid__info":
        elements.forEach((element) => {
          element.classList.contains("metalloid")
            ? (element.style.filter = "grayscale(0%)")
            : (element.style.filter = "grayscale(90%)");
        });
        break;
      case "halogen__info":
        elements.forEach((element) => {
          element.classList.contains("halogen")
            ? (element.style.filter = "grayscale(0%)")
            : (element.style.filter = "grayscale(90%)");
        });
        break;
      case "noble__gas__info":
        elements.forEach((element) => {
          element.classList.contains("noble__gas")
            ? (element.style.filter = "grayscale(0%)")
            : (element.style.filter = "grayscale(90%)");
        });
        break;
    }
  }

  informationForElementUI(element) {
    const elementNumber = Number(element.nextElementSibling.innerHTML.trim());
    const elementNumberConvert = elementNumber - 1;

    const main = document.querySelector("main");

    main.style.filter = "blur(1.1rem)";
    this.informationForElementModal(
      allElementsInformation[elementNumberConvert]
    );
  }

  closeModalEventFromUI() {
    infoModal.style.display = "none";
    const main = document.querySelector("main");
    main.style.filter = "blur(0)";
  }

  informationForElementModal(element) {
    const infoModal = document.getElementById("infoModal");
    infoModal.style.display = "flex";
    infoModal.innerHTML = "";
    infoModal.innerHTML = `
    <div class="box drop_menu_animation_half_second">
        <div class="modal-content">
            <table>
                <tbody>
                    <tr>
                        <th>Name :</th>
                        <td> ${element.name}</td>
                    </tr>
                    <tr>
                        <th>Type :</th>
                        <td>${element.type}</td>
                    </tr>
                    <tr>
                        <th>Atomic Number :</th>
                        <td>${element.atomic_number}</td>
                    </tr>
                    <tr>
                        <th>Atomic Mass :</th>
                        <td>${element.atomic_mass}</td>
                    </tr>
                    <tr>
                        <th>Electronegativity According to Pauling :</th>
                        <td>${element.electronegativity_according_to_pauling}</td>
                    </tr>
                    <tr>
                        <th>Density :</th>
                        <td>${element.density}</td>
                    </tr>
                    <tr>
                        <th>Melting Point :</th>
                        <td>${element.melting_point}</td>
                    </tr>
                    <tr>
                        <th>Boiling Point :</th>
                        <td>${element.boiling_point}</td>
                    </tr>
                    <tr>
                        <th>Vanderwaal Radius :</th>
                        <td>${element.vanderwaals_radius}</td>
                    </tr>
                    <tr>
                        <th>Ionic Radius :</th>
                        <td>${element.ionic_radius}</td>
                    </tr>
                    <tr>
                        <th>Isotopes :</th>
                        <td>${element.isotopes}</td>
                    </tr>
                    <tr>
                        <th>Electronic Shell :</th>
                        <td>${element.electronic_shell}</td>
                    </tr>
                    <tr>
                        <th>Energy of First Ionisation :</th>
                        <td>${element.energy_of_first_ionisation}</td>
                    </tr>
                    <tr>
                        <th>Discovered By :</th>
                        <td>${element.discovered_by}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <span class="atomic__number" title="Atomic Number">11</span>
        <a class="close__modal" title="Close Modal">&#10005;</a>
    </div>
                            `;
  }

  searchElementUI(elements, elementNames, input) {
    input.addEventListener("input", function () {
      const titles = document.querySelectorAll(".changeCheck");
      titles.forEach((title) => {
        title.classList.remove("active");
        title.classList.add("grayscale");
      });
      elements.forEach((element) => {
        element.classList.remove("active");
        element.classList.add("grayscale");
      });
      let filterResult = [];
      elementNames.filter((item) => {
        item.innerHTML
          .toLocaleLowerCase()
          .trim()
          .includes(this.value.toLocaleLowerCase().trim()) &&
          filterResult.push(item.innerHTML);
      });
      if (filterResult && filterResult.length <= 118) {
        for (let i = 0; i < filterResult.length; i++) {
          const filteredElement = document.querySelector(
            `[data-name="${filterResult[i].toLocaleLowerCase()}"]`
          );
          if (filteredElement) {
            filteredElement.classList.add("active");
            filteredElement.classList.remove("grayscale");
            let group =
              filteredElement.className
                .replace("active", "")
                .replace("element", "")
                .trim() + "__info";
            const selectedClassName = document.querySelector("." + group);
            selectedClassName.classList.add("active");
            selectedClassName.classList.remove("grayscale");
          }
        }
      } else {
        elements.forEach((element) => {
          element.classList.remove("grayscale");
          titles.forEach((title) => {
            title.classList.remove("grayscale");
          });
        });
      }
    });
  }
}
