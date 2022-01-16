var menuBar = document.getElementById('menu-bar');
var homeButton = document.getElementById('home-button');
var designButton = document.getElementById('design-button');
var prototypeButton = document.getElementById('prototype-button');
var contactButton = document.getElementById('contact-button');
var creditsButton = document.getElementById('credits-button');
var creditsContainer = document.getElementById('credits-container');
var dismissCreditsButton = document.getElementById('dismiss-credits');
var creditsContent = document.getElementById('credits-content');
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

creditsContainer.addEventListener("click", function(evt) {
    targetEl = evt.target; // clicked element
  do {
    if(targetEl == creditsContent) {
      // This is a click inside, does nothing, just return.
      DoNothing();
      return;
    }
    // Go up the DOM
    targetEl = targetEl.parentNode;
  } while (targetEl);
  // This is a click outside.
  CreditsToggle("close");
});

dismissCreditsButton.addEventListener("click", function() {CreditsToggle("close")});

function CreditsToggle(whichAnim) { // Options: open, close
  if (whichAnim == "open") {
    creditsContainer.style.left = "0vw";
    creditsContainer.style['pointer-events'] = "all";
    creditsContainer.style.opacity = "1.0";
  } else if (whichAnim == "close") {
    creditsContainer.style.opacity = "0.0";
    creditsContainer.style['pointer-events'] = "none";
    setTimeout(function() {creditsContainer.style.left = "100vw";}, 200);
  } else {
    console.log("Function CreditsToggle() has bad parameter!");
  }
}

function MenuBarButtonNav(desiredSlide) {
    if (desiredSlide == 0) {
      mainContent1.style.top = 0 + "vh";
      mainContent2.style.top = 100 + 0 + "vh";
      mainContent3.style.top = 200 + 0 + "vh";
      mainContent4.style.top = 300 + 0 + "vh";
      slideInit = 0
      NavArrowAnim(slideInit, false)
    } else if (desiredSlide == -100) {
      mainContent1.style.top = -100 + "vh";
      mainContent2.style.top = 100 + -100 + "vh";
      mainContent3.style.top = 200 + -100 + "vh";
      mainContent4.style.top = 300 + -100 + "vh";
      slideInit = -100
      NavArrowAnim(slideInit, false)
    } else if (desiredSlide == -200) {
      mainContent1.style.top = -200 + "vh";
      mainContent2.style.top = 100 + -200 + "vh";
      mainContent3.style.top = 200 + -200 + "vh";
      mainContent4.style.top = 300 + -200 + "vh";
      slideInit = -200
      NavArrowAnim(slideInit, false)
    } else if (desiredSlide == -300) {
      mainContent1.style.top = -300 + "vh";
      mainContent2.style.top = 100 + -300 + "vh";
      mainContent3.style.top = 200 + -300 + "vh";
      mainContent4.style.top = 300 + -300 + "vh";
      slideInit = -300
      NavArrowAnim(slideInit, false)
    } else {
      console.log("Function MenuBarButtonNav() has bad parameter!")
    }
}

function NavIndicatorAnim(imageName, animStatus) { //Must Include File extension for imageName, // anim status can either be true or false
  if ("img/" + imageName == currentImage){
    DoNothing();
  } else if (animStatus == true) {
  navIndicator.style.opacity = "0.0";
  setTimeout(function() {navIndicator.src = "./img/" + imageName;}, 50);
  setTimeout(function () {navIndicator.style.opacity = "1.0";}, 100);
  currentImage = "img/" + imageName;
} else if (animStatus == false) {
  navIndicator.src = "./img/" + imageName;
  currentImage = "img/" + imageName;
} else {
  console.log("Function NavIndicatorAnim() has bad parameter!")
}
}

function NavArrowAnim(slideInit, indicatorAnimStatus) {
  if (slideInit === 0) {
    navArrowUp.style["pointer-events"] = "none";
    navArrowUp.style.opacity = "0.0";
    navArrowDown.style["pointer-events"] = "all";
    navArrowDown.style.opacity = "1.0";
      switch (indicatorAnimStatus) {
      case true:
        NavIndicatorAnim("ProjectImperiumLogo.svg", true);
        break;
      case false:
        NavIndicatorAnim("ProjectImperiumLogo.svg", false);
        break;
      }
  } else if (slideInit === -100) {
    navArrowUp.style["pointer-events"] = "all";
    navArrowUp.style.opacity = "1.0";
    navArrowDown.style["pointer-events"] = "all";
    navArrowDown.style.opacity = "1.0";
      switch (indicatorAnimStatus) {
        case true:
          NavIndicatorAnim("DesignLogo.svg", true);
          break;
        case false:
          NavIndicatorAnim("DesignLogo.svg", false);
          break;
      }
  } else if (slideInit === -200) {
    navArrowUp.style["pointer-events"] = "all";
    navArrowUp.style.opacity = "1.0";
    navArrowDown.style["pointer-events"] = "all";
    navArrowDown.style.opacity = "1.0";
      switch (indicatorAnimStatus) {
        case true:
          NavIndicatorAnim("PrototypeLogo.svg", true);
          break;
        case false:
          NavIndicatorAnim("PrototypeLogo.svg", false);
          break;
    }
  } else if (slideInit === -300) {
    navArrowUp.style["pointer-events"] = "all";
    navArrowUp.style.opacity = "1.0";
    navArrowDown.style["pointer-events"] = "none";
    navArrowDown.style.opacity = "0.0";
      switch (indicatorAnimStatus) {
        case true:
          NavIndicatorAnim("ContactLogo.svg", true);
          break;
        case false:
          NavIndicatorAnim("ContactLogo.svg", false);
          break;
  }
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
      NavArrowAnim(slideInit, true);
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
