import { UI } from "./ui.js";

const _app = (function () {
  //Variables
  const ui = new UI();
  const navbarButtons = document.querySelectorAll(".navbar-btn");
  const media = document.querySelector(".media");
  const commentArea = document.getElementById("commentArea");
  const addCommentBTN = document.getElementById("addCommentBTN");

  const navbarActive = function () {
    ui.activeButtonUI(navbarButtons);
  };

  const addComment = function () {
    addCommentBTN.addEventListener("click", function (e) {
      e.preventDefault()
      ui.addCommentToUI(media, commentArea);
      removeComment();
    });
  };

  const removeComment = function () {
    const closeBTN = document.querySelectorAll(".close-btn");
    closeBTN.forEach((btn) => {
      btn.addEventListener("click", function () {
        ui.removeCommentFromUI(this);
      });
    });
  };

  //
  // Return objects
  //

  return {
    init: function () {
      navbarActive();
      addComment();
      removeComment();
    },
  };
})();

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  _app.init();
});
