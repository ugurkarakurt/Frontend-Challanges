// Setup module
// ------------------------------

const App = (function () {
  // Variables
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  const body = document.querySelector("body");
  const dayWrapper = document.querySelector(".js-day-wrapper");
  const nightWrapper = document.querySelector(".js-night-wrapper");
  const plane = document.querySelector(".js-plane");
  const day = document.querySelector(".js-day");
  const night = document.querySelector(".js-night");

  const planeTemplate = `
              <div class="plane">
                <div class="propeller">
                  <img src="./assets/images/propeller.png" alt="">
                </div>
                <img src="./assets/images/plane.svg" alt="">
              </div>`;

  const shipTemplate = `
              <div class="starShip">
              <div class="spacecraft">
                <div class="flames">
                  <div class="container">
                    <div class="red flame"></div>
                    <div class="orange flame"></div>
                    <div class="yellow flame"></div>
                    <div class="white flame"></div>
                    <div class="blue circle"></div>
                    <div class="black circle"></div>
                  </div>
                  <div class="container2">
                    <div class="red flame"></div>
                    <div class="orange flame"></div>
                    <div class="yellow flame"></div>
                    <div class="white flame"></div>
                    <div class="blue circle"></div>
                    <div class="black circle"></div>
                  </div>
                </div>
              </div>
            </div>`;

  //
  // Setup module components
  //

  const _setPlaneTemplate = function () {
    plane.innerHTML = planeTemplate;
  };
  const _eventListeners = function () {
    plane.onmousedown = _mouseDownHandlerPlane;
    day.addEventListener("click", _changeNight);
    night.addEventListener("click", _changeDay);
  };

  const _changeNight = function () {
    setTimeout(() => {
      body.classList.remove("body-day");
      body.classList.add("body-night");
      dayWrapper.classList.remove("active");
      nightWrapper.classList.add("active");
      plane.innerHTML = shipTemplate;
      body.classList.add("scale-up-center");
      body.classList.remove("scale-down-center");
    }, 400);
    body.classList.add("scale-down-center");
  };

  const _changeDay = function () {
    setTimeout(() => {
      body.classList.remove("body-night");
      body.classList.add("body-day");
      dayWrapper.classList.add("active");
      nightWrapper.classList.remove("active");
      plane.innerHTML = planeTemplate;
      body.classList.add("scale-up-center");
      body.classList.remove("scale-down-center");
    }, 400);
    body.classList.add("scale-down-center");
  };

  // Draggable Element
  const _mouseDownHandlerPlane = function (e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = _closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = _elementDrag;
  };

  // Mouse Move Handler
  const _elementDrag = function (e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    plane.style.top = plane.offsetTop - pos2 + "px";
    plane.style.left = plane.offsetLeft - pos1 + "px";
  };

  // Mouse Up Handler
  const _closeDragElement = function () {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  };

  //
  // Return objects assigned to module
  //

  return {
    init: function () {
      _eventListeners();
      _setPlaneTemplate();
    },
  };
})();

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  App.init();
});
