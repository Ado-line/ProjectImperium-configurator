var adoURL = import("./Ado-URL_V1.js")


var loaContainer = document.getElementById('loa-container');
var loaImage = document.getElementById('loa-image');
var loaText1 = document.getElementById('loa-text1');
var loaText2 = document.getElementById('loa-text2');
var loaButton = document.getElementById('loa-button');
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
var modularTaglineLine = document.getElementById('modular-tagline-line');
var durableTaglineLine = document.getElementById('durable-tagline-line');
var preciseTaglineLine = document.getElementById('precise-tagline-line');
var modularTagline = document.getElementById('modular-tagline-content');
var durableTagline = document.getElementById('durable-tagline-content');
var preciseTagline = document.getElementById('precise-tagline-content');
var mainContent2 = document.getElementById('main-content-2');
var mainContent3 = document.getElementById('main-content-3');
var mc3griditem1 = document.getElementById('mainContent3-grid-item1');
var mc3griditem2 = document.getElementById('mainContent3-grid-item2');
var mc3griditem3 = document.getElementById('mainContent3-grid-item3');
var mc3griditem4 = document.getElementById('mainContent3-grid-item4');
var mc3gridtext1 = document.getElementById('mainContent3-grid-item1-h4');
var mc3gridtext2 = document.getElementById('mainContent3-grid-item2-h4');
var mc3gridtext3 = document.getElementById('mainContent3-grid-item3-h4');
var mc3gridtext4 = document.getElementById('mainContent3-grid-item4-h4');
var mc3gridimg1 = document.getElementById('mainContent3-grid-item1-img');
var mc3gridimg2 = document.getElementById('mainContent3-grid-item2-img');
var mc3gridimg3 = document.getElementById('mainContent3-grid-item3-img');
var mc3gridimg4 = document.getElementById('mainContent3-grid-item4-img');
var mainContent4 = document.getElementById('main-content-4');
var homeButton = document.getElementById('home-button');
var mainBody = document.body;

// Event Listeners for Menu Animation
menuBar.addEventListener("mouseenter", MouseCheckEnter);
menuBar.addEventListener("mouseleave", MouseCheckLeave);

function DoNothing() {
  // Does literally nothing
}

function InRange(x, min, max) {
  //console.log(x >= min && x <= max);
  return x >= min && x <= max;
}


function MouseCheckEnter() {
  navIndicator.style.opacity = "0.0";
  menuBar.style.height = '7vh';
  menuBar.style['box-shadow'] = '0px 10px 5px rgba(0,0,0,0.33)';
  //
  homeButton.style['pointer-events'] = "all";
  designButton.style['pointer-events'] = "all";
  prototypeButton.style['pointer-events'] = "all";
  contactButton.style['pointer-events'] = "all";
  creditsButton.style['pointer-events'] = "all";
  //
  setTimeout(MenuButtonAnim("visible"), 100)
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
  homeButton.style['pointer-events'] = "none";
  designButton.style['pointer-events'] = "none";
  prototypeButton.style['pointer-events'] = "none";
  contactButton.style['pointer-events'] = "none";
  creditsButton.style['pointer-events'] = "none";
  //
  setTimeout(MenuButtonAnim("invisible"), 100)
  //
  setTimeout( function() {
  mainContent1.style['margin-top'] = '2vh';
  mainContent2.style['margin-top'] = '2vh';
  mainContent3.style['margin-top'] = '2vh';
  mainContent4.style['margin-top'] = '2vh';}, 100)
}

function MenuButtonAnim(whatAnim) {
  if (whatAnim == "visible") {

    homeButton.style.opacity = "1.0";
    designButton.style.opacity = "1.0";
    prototypeButton.style.opacity = "1.0";
    contactButton.style.opacity = "1.0";
    creditsButton.style.opacity = "1.0";
  } else if (whatAnim == "invisible") {

    homeButton.style.opacity = "0.0";
    designButton.style.opacity = "0.0";
    prototypeButton.style.opacity = "0.0";
    contactButton.style.opacity = "0.0";
    creditsButton.style.opacity = "0.0";
  } else {
    console.log("Function MenuButtonAnim() has bad parameter!");
  }
}

function initAttention() {
  MouseCheckEnter();
  setTimeout(MouseCheckLeave, 1750);
}



function epochTimer() {
  return new Date().getTime();
}

modularTagline.addEventListener("mouseenter", function () {modularTagline.style.height = "66%"; durableTagline.style.top = "66%"; modularTaglineLine.style.opacity = "0.5";});
modularTagline.addEventListener("mouseleave", function () {modularTagline.style.height = "17%"; durableTagline.style.top = "37%"; modularTaglineLine.style.opacity = "0.2";});
durableTagline.addEventListener("mouseenter", function () {durableTagline.style.height = "66%"; durableTagline.style.top = "17%"; durableTaglineLine.style.opacity = "0.5";});
durableTagline.addEventListener("mouseleave", function () {durableTagline.style.height = "17%"; durableTagline.style.top = "37%"; durableTaglineLine.style.opacity = "0.2";});
preciseTagline.addEventListener("mouseenter", function () {preciseTagline.style.height = "66%"; preciseTagline.style.top = "34%"; durableTagline.style.top = "17%"; preciseTaglineLine.style.opacity = "0.5";});
preciseTagline.addEventListener("mouseleave", function () {preciseTagline.style.height = "17%"; preciseTagline.style.top = "83%"; durableTagline.style.top = "37%"; preciseTaglineLine.style.opacity = "0.2";});


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
      URL_Change('hash', 'set', '0', '0');
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
      URL_Change('hash', 'set', '0', '1');
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
    URL_Change('hash', 'set', '0', '2');
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
  URL_Change('hash', 'set', '0', '3');
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

function Mc3Anim(whichAnim) {
  switch (whichAnim) {
    case 1:
      mc3griditem1.style.height = "64%";
      mc3gridtext1.style.opacity = "1.0";
      mc3gridimg1.style.opacity = "0.9";
      mc3griditem2.style.height = "12%";
      mc3gridtext2.style.opacity = "0.0";
      mc3gridimg2.style.opacity = "0.4";
      mc3griditem3.style.height = "12%";
      mc3gridtext3.style.opacity = "0.0";
      mc3gridimg3.style.opacity = "0.4";
      mc3griditem4.style.height = "12%";
      mc3gridtext4.style.opacity = "0.0";
      mc3gridimg4.style.opacity = "0.4";
      break;
    case 2:
      mc3griditem2.style.height = "64%";
      mc3gridtext2.style.opacity = "1.0";
      mc3gridimg2.style.opacity = "0.9";
      mc3griditem1.style.height = "12%";
      mc3gridtext1.style.opacity = "0.0";
      mc3gridimg1.style.opacity = "0.4";
      mc3griditem3.style.height = "12%";
      mc3gridtext3.style.opacity = "0.0";
      mc3gridimg3.style.opacity = "0.4";
      mc3griditem4.style.height = "12%";
      mc3gridtext4.style.opacity = "0.0";
      mc3gridimg4.style.opacity = "0.4";
      break;
    case 3:
      mc3griditem3.style.height = "64%";
      mc3gridtext3.style.opacity = "1.0";
      mc3gridimg3.style.opacity = "0.9";
      mc3griditem2.style.height = "12%";
      mc3gridtext2.style.opacity = "0.0";
      mc3gridimg2.style.opacity = "0.4";
      mc3griditem1.style.height = "12%";
      mc3gridtext1.style.opacity = "0.0";
      mc3gridimg1.style.opacity = "0.4";
      mc3griditem4.style.height = "12%";
      mc3gridtext4.style.opacity = "0.0";
      mc3gridimg4.style.opacity = "0.4";
      break;
    case 4:
      mc3griditem4.style.height = "64%";
      mc3gridtext4.style.opacity = "1.0";
      mc3gridimg4.style.opacity = "0.9";
      mc3griditem2.style.height = "12%";
      mc3gridtext2.style.opacity = "0.0";
      mc3gridimg2.style.opacity = "0.4";
      mc3griditem3.style.height = "12%";
      mc3gridtext3.style.opacity = "0.0";
      mc3gridimg3.style.opacity = "0.4";
      mc3griditem1.style.height = "12%";
      mc3gridtext1.style.opacity = "0.0";
      mc3gridimg1.style.opacity = "0.4";
      break;
    default:
      break;
  }
}

function SlideScrollStop(event) {
  event.stopPropagation();
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

function detectMobile() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

function SlideURL() {
  if (detectMobile()) {
    mainBody.style.opacity = "1.0";
    LoaAnim("mobile");
  } else {
    if (InRange(parseInt(URL_GetHash()), 0, 3)) {
    switch(String(URL_GetHash())){
      case "0":
        mainBody.style.opacity = "1.0";
        url_slide_set = URL_GetHash();
        MenuBarButtonNav(parseInt(url_slide_set) * (-100));
        break;
      default:
        mainBody.style.opacity = "1.0";
        LoaAnim("normal");
        url_slide_set = URL_GetHash();
        MenuBarButtonNav(parseInt(url_slide_set) * (-100));
        break;
      }
    } else {
      mainBody.style.opacity = "1.0";
      return;
      }
    }
  }

function MobileCheck() {
}


function LoaAnim(whichAnim) {
  switch (whichAnim) {
    case "normal":
      loaContainer.style['pointer-events'] = "all";
      loaContainer.style.left = "0vw";
      setTimeout(function() {LoaAnim("close")}, 550);
      break;
    case "close":
      loaContainer.style['pointer-events'] = "none";
      loaContainer.style.opacity = "0.0";
      loaImage.style.opacity = "0.0";
      loaText1.style['pointer-events'] ="none";
      loaText2.style['pointer-events'] ="none";
      loaText1.style.opacity ="0.0";
      loaText2.style.opacity ="0.0";
      setTimeout(function() {loaContainer.style.left = "0vw"}, 200);
      break;
    case "mobile":
      loaContainer.style['pointer-events'] = "all";
      loaText1.style['pointer-events'] ="all";
      loaText2.style['pointer-events'] ="all";
      loaContainer.style.left = "0vw";
      loaContainer.style.opacity = "1.0";
      loaImage.style.opacity = "1.0";
      loaText1.style.opacity ="1.0";
      loaText2.style.opacity ="1.0";
      break;
    default:
      console.error("Function LoaAnim() recieved bad parameter!");
      console.error(whichAnim)
  }
}
