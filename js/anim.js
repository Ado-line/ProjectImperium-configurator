
var menuBar = document.getElementById('menu-bar');
var navButtonTextHome = document.getElementById('nav-button-text-home');
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
  // console.log("Beeeeeg");
  homeButton.style.width = '15vw';
  menuBar.style.width = '15%';
  menuBar.style['box-shadow'] = '10px 0px 10px rgba(0,0,0,0.5)';
  mainContent1.style['padding-left'] = '16%';
  mainContent2.style['padding-left'] = '16%';
  mainContent3.style['padding-left'] = '16%';
  mainContent4.style['padding-left'] = '16%';
  navButtonTextHome.style['clip-path'] = 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)';
  setTimeout(function(){homeButton.style.width = '15vw';}, 500);
}

function MouseCheckLeave() {
  // console.log("Smoooool");
  setTimeout(function(){homeButton.style.width = '6vw';}, 500);
  menuBar.style.width = '6%';
  menuBar.style['box-shadow'] = '0px 0px 0px rgba(0,0,0,0)';
  mainContent1.style['padding-left'] = '7%';
  mainContent2.style['padding-left'] = '7%';
  mainContent3.style['padding-left'] = '7%';
  mainContent4.style['padding-left'] = '7%';
  navButtonTextHome.style['clip-path'] = 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)';
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

// Event Listeners for Slide Show Animation
// "onwheel" Located in HTML on the "<body>" tag itself, doesn't work with an event Listener for some reason.
// Okay, so creating artificial events in Javascript is incredibly strange, just gonna do the hackey method, it will save a lot of time.
// The Arrow Navigation Buttons at the top and buttom of the page have "onclick="SlideMove()"" attached to them.

function NavArrowAnim(slideInit) {
  if (slideInit === 0) {
    navArrowUp.style["pointer-events"] = "none";
    navArrowUp.style.opacity = "0.0";
  } else if (slideInit === -100) {
    navArrowUp.style["pointer-events"] = "all";
    navArrowUp.style.opacity = "1.0";
  } else if (slideInit === -200) {
    navArrowDown.style["pointer-events"] = "all";
    navArrowDown.style.opacity = "1.0";
  } else if (slideInit === -300) {
    navArrowDown.style["pointer-events"] = "none";
    navArrowDown.style.opacity = "0.0";
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
            console.log(slideInit + " <---- New Offset Value")
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
              console.log(slideInit + " <---- New Offset Value")
            }
          } else {
        console.log("Function 'SlideMove' has bad trigger!");
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
  console.log("Function 'ScrollCheck' ran, Var 'scrollDi' = " + scrollDi);
  SlideMove(scrollDi)
}
