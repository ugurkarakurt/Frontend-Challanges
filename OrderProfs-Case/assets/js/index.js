const form = document.querySelector('form')
let reqInputs = form.querySelectorAll('.required');
let inputs = form.querySelectorAll("input");
const breakPoint = window.matchMedia("(max-width: 768px)");

//Gerekli elemanları seçtim.

function windowSize(breakPoint) { //Burada ayarladığım stiller için responsive özelliğini burada yazdım.
    if (breakPoint.matches) {
        // inputlarda dinamik stiller eklemek için focusin ve focusou özelliklerini kullandım. 
        inputs.forEach(input => {
            input.addEventListener('focus', function () {
                this.style.border = "2px solid #c50101";
                this.nextElementSibling.style.cssText = "top: -6px; left: 24px; font-size: 8px;  opacity: 1; background-color: #ffffff; color: #c50101;";
            });
            input.addEventListener('focusout', function () {
                if (this.value) {
                    this.style.border = "2px solid #c50101";
                    this.nextElementSibling.style.cssText = "top: -6px; left: 24px; font-size: 8px;  opacity: 1; background-color: #ffffff; color: #c50101;";
                }
                if (!this.value) {
                    this.style.border = "1px solid #676767";
                    this.nextElementSibling.style.cssText = "color: #676767; position: absolute; left: 20 px; top: 8 px; transition: 0.2 s ease all;";
                }
            }, false);

        });

    } else {
        inputs.forEach(input => {
            input.addEventListener('focus', function () {
                this.style.border = "2px solid #c50101";
                this.nextElementSibling.style.cssText = "top: -9px; left: 35px; font-size: 12px;  opacity: 1; background-color: #ffffff; color: #c50101;";
            });
            input.addEventListener('focusout', function () {
                if (this.value) {
                    this.style.border = "2px solid #c50101";
                    this.nextElementSibling.style.cssText = "top: -9px; left: 35px; font-size: 12px;  opacity: 1; background-color: #ffffff; color: #c50101;";
                }
                if (!this.value) {
                    this.style.border = "1px solid #676767";
                    this.nextElementSibling.style.cssText = "color: #676767; position: absolute; left: 20 px; top: 8 px; transition: 0.2 s ease all;";
                }
            }, false);

        });
    }
}
//Uyarı mesajı vermesi için yapılan kontrol. 
inputs.forEach(input => {
    input.addEventListener('focusout', function () {
        if (this.value) {
            if (!this.validity.valid) {
                this.value = '';
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Please enter a valid value ',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        }
    }, false);
});

windowSize(breakPoint)
breakPoint.addListener(windowSize)

//Form submir olursa inputların içi boşaltılıyor.

form.addEventListener("submit", function () {
    inputs.forEach(input => {
        input.value = ""
    })
})