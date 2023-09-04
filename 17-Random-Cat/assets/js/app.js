import {
   Request
} from "./request.js";


const RandomCat = (function () {
   //Variables

   // New Classes
   const request = new Request();

   //Urls
   const url = "https://aws.random.cat/meow";
   const catImage = document.querySelector("#catImage");
   const cursorPaw = document.querySelector("#getCatData");
   const text = document.querySelector("#text");

   // Event Listeners
   const eventListeners = function () {
      cursorPaw.addEventListener('click', setCatPhoto);
      window.addEventListener('mousemove', moveCursor);
   };

   const setCatPhoto = function () {
      request.get(url).then((data) => {
         if (data) {
            catImage.src = data.file;
            text && text.remove();
         }
      }).then(() => {
         catImage.classList.add('active');
      })
   }


   const moveCursor = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;
      cursorPaw.style.transform = `translate3d(${mouseX - 20}px, ${mouseY -20}px, 0)`;
   }
   //
   // Return objects
   //

   return {
      init: function () {
         eventListeners();
      },
   };
})();

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
   RandomCat.init();
});