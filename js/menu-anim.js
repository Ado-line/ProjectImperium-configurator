
var menuBar = document.getElementById('menu-bar');
var navButtonTextHome = document.getElementById('nav-button-text-home');
var mainContent1 = document.getElementById('main-content-1');
var homeButton = document.getElementById('home-button');

menuBar.addEventListener("mouseenter", MouseCheckEnter);
menuBar.addEventListener("mouseleave", MouseCheckLeave);

function MouseCheckEnter() {
  // console.log("Beeeeeg");
  homeButton.style.width = '15vw';
  menuBar.style.width = '15%';
  menuBar.style['box-shadow'] = '10px 0px 10px rgba(0,0,0,0.5)';
  mainContent1.style['padding-left'] = '16%';
  navButtonTextHome.style['clip-path'] = 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)';
  setTimeout(function(){homeButton.style.width = '15vw';}, 500);
}

function MouseCheckLeave() {
  // console.log("Smoooool");
  setTimeout(function(){homeButton.style.width = '6vw';}, 500);
  menuBar.style.width = '6%';
  menuBar.style['box-shadow'] = '0px 0px 0px rgba(0,0,0,0)';
  mainContent1.style['padding-left'] = '7%';
  navButtonTextHome.style['clip-path'] = 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)';
}

function initAttention() {
  MouseCheckEnter();
  setTimeout(MouseCheckLeave, 1750);
}
