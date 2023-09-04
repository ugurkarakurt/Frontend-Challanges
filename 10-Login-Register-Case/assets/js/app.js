import { Components } from "./components.js";
import { formValidation } from "./validationSettings.js";

const FormValidation = (function () {
  const components = new Components();

  //Variables
  const formBody = document.querySelector(".form-body");
  const loginBtn = document.querySelector(".login-btn");
  const registerBtn = document.querySelector(".register-btn");

  // Event Listeners
  const eventListeners = function () {
    loginBtn.addEventListener("click", addLoginComponent);
    registerBtn.addEventListener("click", registerLoginComponent);
  };

  const showPassword = function () {
    const eyeIcon = document.getElementById("eyeIcon");
    const eyeIcon2 = document.getElementById("eyeIcon2");
    const password = document.getElementById("password");
    const repeat_password = document.getElementById("repeat_password");
    eyeIcon.addEventListener("click", function () {
      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
    });
    if (eyeIcon2) {
      eyeIcon2.addEventListener("click", function () {
        if (repeat_password.type === "password") {
          repeat_password.type = "text";
        } else {
          repeat_password.type = "password";
        }
      });
    }
  };

  //Checkbox check Func
  const checkText = function () {
    const consentText = document.getElementById("consentText");
    const registerBtn = document.querySelector(".submit-btn");
    consentText.addEventListener("click", function () {
      if (this.checked) {
        registerBtn.classList.add("active");
      } else {
        registerBtn.classList.remove("active");
      }
    });
  };

  // Add login component func
  const addLoginComponent = function (e) {
    e.preventDefault();
    this.classList.add("active");
    registerBtn.classList.remove("active");
    formBody.innerHTML = components.login();
    showPassword();
  };

  // Add Register component func
  const registerLoginComponent = function (e) {
    e.preventDefault();
    this.classList.add("active");
    loginBtn.classList.remove("active");
    formBody.innerHTML = components.register();
    checkText();
    showPassword();
  };

  //
  // Return objects
  //

  return {
    init: function () {
      formValidation();
      formValidation();
      eventListeners();
      showPassword();
    },
  };
})();

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  FormValidation.init();
});
