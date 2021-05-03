Swal.fire({
    icon: 'success',
    title: 'Congratulations!',
    html: "<h5>We've received your order</h5><br><h6>After we have verified your data, we will contact you</h6>",
    confirmButtonText: '<a href="../index.html">Back to the website!</a>',
})

//Alert bodye tıklayınca da anasayfaya gitmesi için gereken func.
let alertBody = document.querySelector(".swal2-container");

alertBody.addEventListener("click", function () {
    window.location = "../index.html";
})