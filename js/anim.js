
var menuBar = document.getElementById('menu-bar');
var navButtonTextHome = document.getElementById('nav-button-text-home');
var mainContent1 = document.getElementById('main-content-1');
var mainContent2 = document.getElementById('main-content-2');
var mainContent3 = document.getElementById('main-content-3');
var homeButton = document.getElementById('home-button');
var mainBody = document.body;

// Event Listeners for Menu Animation
menuBar.addEventListener("mouseenter", MouseCheckEnter);
menuBar.addEventListener("mouseleave", MouseCheckLeave);

function MouseCheckEnter() {
  // console.log("Beeeeeg");
  homeButton.style.width = '15vw';
  menuBar.style.width = '15%';
  menuBar.style['box-shadow'] = '10px 0px 10px rgba(0,0,0,0.5)';
  mainContent1.style['padding-left'] = '16%';
  mainContent2.style['padding-left'] = '16%';
  mainContent3.style['padding-left'] = '16%';
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
  navButtonTextHome.style['clip-path'] = 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)';
}

function initAttention() {
  MouseCheckEnter();
  setTimeout(MouseCheckLeave, 1750);
}


// Event Listeners for Slide Show Animation
// Located in HTML on the "<body>" tag itself, doesn't work with an event Listener for some reason.

let slideInit = parseInt(0);
var slideOffSet = parseInt(-100);
var slideAmount = 3 //How many slides are there?

function ScrollCheck(event) {
  //console.log(slideOffSet + " <---- Slide Amount");
  var scrollDi = event.deltaY;
  //console.log(scrollDi);
  if (scrollDi > 0) {
    slideInit = slideInit + slideOffSet;
    if (slideInit === -100*slideAmount) {
      slideInit = (slideAmount-1)*-100;
          //console.log(slideInit + " <---- No More Slides, Value Unchanged")
    } else {
    console.log("Going Down");
    mainContent1.style.top = slideInit + "vh";
    mainContent2.style.top = 100 + slideInit + "vh";
    mainContent3.style.top = 200 + slideInit + "vh";
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
    //console.log(slideInit + " <---- New Offset Value")
  }
  } else {
    console.log("Function 'ScrollCheck' has bad trigger!");
  }
}
