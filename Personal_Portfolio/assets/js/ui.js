export class UI {
  activeButtonUI(elements) {
    elements.forEach((item) => {
      item.addEventListener("click", function () {
        elements.forEach((item) => {
          item.classList.remove("btn-light");
        });
        this.classList.add("btn-light");
      });
    });
  }
  addCommentToUI(mediaItem, commentArea) {
    if (!commentArea.value) {
      commentArea.style.border = "1px solid red";
    } else {
      mediaItem.innerHTML += `<li class="media-item d-flex align-items-center">
                                <p class="m-0"></i>${commentArea.value}</p>
                                <span class="close-btn"><i class="fas fa-times text-danger"></i></span>
                            </li>`;
      commentArea.value = "";
      commentArea.style.border = "0px";

    }
  }
  removeCommentFromUI(element) {
    element.closest(".media-item").remove();
  }
}
