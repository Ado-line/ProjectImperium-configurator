document.getElementById('menu-bar').addEventListener("onmouseenter", MouseCheck("onmouseenter"))
document.getElementById('menu-bar').addEventListener("onmouseleave", MouseCheck("onmouseleave"))
// document.getElementById('menu-bar').onmouseenter = MouseCheck("onmouseenter")
// document.getElementById('menu-bar').onmouseleave = MouseCheck("onmouseleave")

function MouseCheck(MouseAction) {
  if (MouseAction = "onmouseenter") {
    document.getElementById('menu-bar').style.width = '15%';
    document.getElementById('menu-bar').style['box-shadow'] = '10px 0px 10px rgba(0,0,0,0.5)';
  } else if (MouseAction = "onmouseleave") {
    document.getElementById('menu-bar').style.width = '6%';
    document.getElementById('menu-bar').style['box-shadow'] = '0px 0px 0px rgba(0,0,0,0)';
} else {
  console.log("Error: Bad Parameter")
}
}
