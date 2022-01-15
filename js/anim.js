var menuBar = document.getElementById('menu-bar');
var homeButton = document.getElementById('home-button');
var designButton = document.getElementById('design-button');
var prototypeButton = document.getElementById('prototype-button');
var contactButton = document.getElementById('contact-button');
var creditsButton = document.getElementById('credits-button');
var navIndicator = document.getElementById('nav-indicator');
var navArrowUp = document.getElementById('nav-arrow-up');
var navArrowDown = document.getElementById('nav-arrow-down');
var mainContent1 = document.getElementById('main-content-1');
var mainContent2 = document.getElementById('main-content-2');
var mainContent3 = document.getElementById('main-content-3');
var mainContent4 = document.getElementById('main-content-4');
var homeButton = document.getElementById('home-button');
var mainBody = document.body;

// Event Listeners for Menu Animation
menuBar.addEventListener("mouseenter", MouseCheckEnter);
menuBar.addEventListener("mouseleave", MouseCheckLeave);

function DoNothing() {
  // Does literally nothing
}

function MouseCheckEnter() {
  navIndicator.style.opacity = "0.0";
  menuBar.style.height = '7vh';
  menuBar.style['box-shadow'] = '0px 10px 5px rgba(0,0,0,0.33)';
  //
  homeButton.style.top = "0vh";
  designButton.style.top = "0vh";
  prototypeButton.style.top = "0vh";
  contactButton.style.top = "0vh";
  creditsButton.style.top = "0vh";
  //
  mainContent1.style['margin-top'] = '6vh';
  mainContent2.style['margin-top'] = '6vh';
  mainContent3.style['margin-top'] = '6vh';
  mainContent4.style['margin-top'] = '6vh';
}

function MouseCheckLeave() {
  setTimeout(function() {navIndicator.style.opacity = "1.0";}, 150)
  setTimeout(function() {menuBar.style.height = '3vh';}, 100)
  setTimeout(function() {menuBar.style['box-shadow'] = '0px 0px 0px rgba(0,0,0,0)';}, 100)
  //
  homeButton.style.top = "-10vh";
  designButton.style.top = "-10vh";
  prototypeButton.style.top = "-10vh";
  contactButton.style.top = "-10vh";
  creditsButton.style.top = "-10vh";
  //
  setTimeout( function() {
  mainContent1.style['margin-top'] = '2vh';
  mainContent2.style['margin-top'] = '2vh';
  mainContent3.style['margin-top'] = '2vh';
  mainContent4.style['margin-top'] = '2vh';}, 100)
}


function initAttention() {
  MouseCheckEnter();
  setTimeout(MouseCheckLeave, 1750);
}



function epochTimer() {
  return new Date().getTime();
}



// Necessary Variables for functions below

let delayTimer = 0
delayTimer = epochTimer() - 1000;
let slideInit = parseInt(0);
var slideOffSet = parseInt(-100);
var slideAmount = 4; // How many slides are there?
let scrollDi = 0;
let currentImage = "img/" + "ProjectImperiumLogo.svg";

// Event Listeners for Slide Show Animation
// "onwheel" Located in HTML on the "<body>" tag itself, doesn't work with an event Listener for some reason.
// Okay, so creating artificial events in Javascript is incredibly strange, just gonna do the hackey method, it will save a lot of time.
// The Arrow Navigation Buttons at the top and buttom of the page have "onclick="SlideMove()"" attached to them.

function NavIndicatorAnim(imageName) { //Must Include File extension for imageName
  if ("img/" + imageName == currentImage){
    DoNothing();
  } else {
  navIndicator.style.opacity = "0.0";
  setTimeout(function() {navIndicator.src = "./img/" + imageName;}, 50);
  setTimeout(function () {navIndicator.style.opacity = "1.0";}, 100);
  currentImage = "img/" + imageName;
}
}

function NavArrowAnim(slideInit) {
  if (slideInit === 0) {
    navArrowUp.style["pointer-events"] = "none";
    navArrowUp.style.opacity = "0.0";
    NavIndicatorAnim("ProjectImperiumLogo.svg");
  } else if (slideInit === -100) {
    navArrowUp.style["pointer-events"] = "all";
    navArrowUp.style.opacity = "1.0";
    NavIndicatorAnim("DesignLogo.svg");
  } else if (slideInit === -200) {
    navArrowDown.style["pointer-events"] = "all";
    navArrowDown.style.opacity = "1.0";
    NavIndicatorAnim("PrototypeLogo.svg");
  } else if (slideInit === -300) {
    navArrowDown.style["pointer-events"] = "none";
    navArrowDown.style.opacity = "0.0";
    NavIndicatorAnim("ContactLogo.svg");
  } else {
    console.log("Function 'NavArrowAnim' recieved bad parameter!");
  }
}

function SlideMove(scrollDi)  {
  if (epochTimer() > delayTimer + 500) {
    if (scrollDi > 0) {
      slideInit = slideInit + slideOffSet;
      if (slideInit === -100*slideAmount) {
        slideInit = (slideAmount-1)*-100;
            //console.log(slideInit + " <---- No More Slides, Value Unchanged")
          } else {
            //console.log("Going Down");
            mainContent1.style.top = slideInit + "vh";
            mainContent2.style.top = 100 + slideInit + "vh";
            mainContent3.style.top = 200 + slideInit + "vh";
            mainContent4.style.top = 300 + slideInit + "vh";
            delayTimer = epochTimer();
            //console.log(slideInit + " <---- New Offset Value")
          }
        } else if (scrollDi < 0) {
            slideInit = slideInit - slideOffSet;
            if (slideInit === 100) {
              slideInit = 0;
              //console.log(slideInit + " <---- No More Slides, Value Unchanged")
            } else {
              //console.log("Going Up");
              mainContent1.style.top = slideInit + "vh";
              mainContent2.style.top = 100 + slideInit + "vh";
              mainContent3.style.top = 200 + slideInit + "vh";
              mainContent4.style.top = 300 + slideInit + "vh";
              delayTimer = epochTimer();
              //console.log(slideInit + " <---- New Offset Value")
            }
          } else {
        console.log("Function 'SlideMove' has bad parameter!");
        }
      NavArrowAnim(slideInit);
} else {
  DoNothing();
}
}

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 38: // Up-Key
      SlideMove(-1)
      //console.log("Up-Key");
      //console.log(event.keyCode)
      break;
    case 40: // Down-Key
      SlideMove(1)
      //console.log("Down-Key");
      //console.log(event.keyCode)
      break;
      }
}

function ScrollCheck(event) {
  //console.log(slideOffSet + " <---- Slide Amount");
  scrollDi = event.deltaY;
  //console.log("Function 'ScrollCheck' ran, Var 'scrollDi' = " + scrollDi);
  SlideMove(scrollDi)
}
