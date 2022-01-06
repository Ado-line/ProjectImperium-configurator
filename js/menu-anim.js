
var menuBar = document.getElementById('menu-bar');
var navButtonTextHome = document.getElementById('nav-button-text-home');

menuBar.addEventListener("mouseenter", MouseCheckEnter);
menuBar.addEventListener("mouseleave", MouseCheckLeave);
// document.getElementById('menu-bar').onmouseenter = MouseCheck("onmouseenter")
// document.getElementById('menu-bar').onmouseleave = MouseCheck("onmouseleave")


//  function MouseCheck(MouseAction) {
//    console.log("MouseCheck")
//    if (MouseAction = "onmouseenter") {
//      document.getElementById('menu-bar').style.width = '15%';
//      document.getElementById('menu-bar').style['box-shadow'] = '10px 0px 10px rgba(0,0,0,0.5)';
//    } else if (MouseAction = "onmouseleave") {
//      document.getElementById('menu-bar').style.width = '6%';
//      document.getElementById('menu-bar').style['box-shadow'] = '0px 0px 0px rgba(0,0,0,0)';
//    } else if (MouseAction !=("onmoseenter" || "onmouseleave")) {
//    console.log("Error: Bad Parameter")
//  }
//  }

//  MouseCheck("onmouseleave");


function MouseCheckEnter() {
  // console.log("Beeeeeg");
  menuBar.style.width = '15%';
  menuBar.style['box-shadow'] = '10px 0px 10px rgba(0,0,0,0.5)';
  navButtonTextHome.style['clip-path'] = 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)';
}

function MouseCheckLeave() {
  // console.log("Smoooool");
  menuBar.style.width = '6%';
  menuBar.style['box-shadow'] = '0px 0px 0px rgba(0,0,0,0)';
  navButtonTextHome.style['clip-path'] = 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)';
}

function initAttention() {
  MouseCheckEnter();
  setTimeout(MouseCheckLeave, 1750);
}
