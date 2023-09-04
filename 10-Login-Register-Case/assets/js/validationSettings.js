export let formValidation = function () {
  $(".form-validate").validate({
    errorClass: "error-message",
    successClass: "success-message",
    validClass: "validation-valid-label",

    highlight: function (element, errorClass) {
      $(element).removeClass(errorClass);
      $(element).addClass("error-input");
      $("#eyeIcon").addClass("error-img");

      if ($("#range_characters_surname-error")) {
        $("#range_characters_name-error").remove();
      }
      if ($("#range_characters_name-error")) {
        $("#range_characters_surname-error").remove();
      }
    },
    unhighlight: function (element, errorClass) {
      $(element).removeClass(errorClass);
      $(element).removeClass("error-input");
      $("#eyeIcon").removeClass("error-img");
    },
    success: function (label) {
      label.addClass("validation-success").text(""); // remove to hide Success message
    },

    rules: {
      password: {
        minlength: 8,
      },
      repeat_password: {
        equalTo: "#password",
      },
      repeat_password: {
        equalTo: "#password",
      },
      email: {
        email: true,
      },
      range_characters_name: {
        rangelength: [3, 24],
      },
      range_characters_surname: {
        rangelength: [3, 24],
      },
      consentText: {
        minlength: 2,
      },
    },
    messages: {
      email: {
        required: "E-posta adresinizi girmelisiniz.",
        email: "Geçerli bir e-posta adresi girmelisiniz.",
      },
      password: {
        required: "Şifrenizi girmelisiniz.",
        minlength: "En az 8 karakter girmelisiniz.",
      },
      repeat_password: {
        required: "Şifrenizi onaylamalısınız.",
        equalTo: "Girdiğiniz şifreler aynı olmalı",
      },
      range_characters_name: {
        required: "Adınızı girmelisiniz.",
        rangelength: "Adınız en az 3 en fazla 24 karakter olmalıdır.",
      },
      range_characters_surname: {
        required: "Soyadınızı girmelisiniz.",
        rangelength: "Soyadınız en az 3 en fazla 24 karakter olmalıdır.",
      },
      consentText: {
        required: "",
        minlength: "",
      },
    },
  });
};
