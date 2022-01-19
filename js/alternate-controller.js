var controllerBody = document.getElementById('controller-body').getElementsByTagName('img')[0];
var controllerFaceplate = document.getElementById('controller-faceplate').getElementsByTagName('img')[0];
var controllerModules = document.getElementById('controller-modules').getElementsByTagName('img')[0];
var jsbevel1 = document.getElementById('jsbevel-slot-1');
var jsbevel2 = document.getElementById('jsbevel-slot-2');
var jsbevel3 = document.getElementById('jsbevel-slot-3');
var jsbevel4 = document.getElementById('jsbevel-slot-4');
var slot1 = document.getElementById('controller-slot-1').getElementsByTagName('img')[0];
var slot2 = document.getElementById('controller-slot-2').getElementsByTagName('img')[0];
var slot3 = document.getElementById('controller-slot-3').getElementsByTagName('img')[0];
var slot4 = document.getElementById('controller-slot-4').getElementsByTagName('img')[0];
var slot1div = document.getElementById('controller-slot-1');
var slot2div = document.getElementById('controller-slot-2');
var slot3div = document.getElementById('controller-slot-3');
var slot4div = document.getElementById('controller-slot-4');
var slot1click = document.getElementById('slot-1-click');
var slot2click = document.getElementById('slot-2-click');
var slot3click = document.getElementById('slot-3-click');
var slot4click = document.getElementById('slot-4-click');

var imgPath = "img/Script/"

// slotTracker: 1 = Joystick, 2 = D-Pad, 3 = Face Buttons

let slotTracker1 = 1
let slotTracker2 = 2
let slotTracker3 = 1
let slotTracker4 = 3

slot1click.addEventListener("click", function() {SlotIncrement(1);});
slot2click.addEventListener("click", function() {SlotIncrement(2);});
slot3click.addEventListener("click", function() {SlotIncrement(3);});
slot4click.addEventListener("click", function() {SlotIncrement(4);});

function SlotIncrement(whichSlot) {
  if (whichSlot == 1) {
    switch(slotTracker1) {
      case 1:
        slot1.src = "img/Script/DP1.png";
        jsbevel1.style.opacity = "0.0";
        slotTracker1 = 2;
        break;
      case 2:
        slot1.src = "img/Script/FB1.png";
        slotTracker1 = 3;
        break;
      case 3:
        slot1.src = "img/Script/JS1.png";
        jsbevel1.style.opacity = "1.0";
        slotTracker1 = 1;
        break;
    }
  } else if (whichSlot == 2) {
    switch(slotTracker2) {
      case 1:
        slot2.src = "img/Script/DP2.png";
        jsbevel2.style.opacity = "0.0";
        slotTracker2 = 2;
        break;
      case 2:
        slot2.src = "img/Script/FB2.png";
        slotTracker2 = 3;
        break;
      case 3:
        slot2.src = "img/Script/JS2.png";
        jsbevel2.style.opacity = "1.0";
        slotTracker2 = 1;
        break;
    }
  } else if (whichSlot == 3) {
    switch(slotTracker3) {
      case 1:
        slot3.src = "img/Script/DP3.png";
        jsbevel3.style.opacity = "0.0";
        slotTracker3 = 2;
        break;
      case 2:
        slot3.src = "img/Script/FB3.png";
        slotTracker3 = 3;
        break;
      case 3:
        slot3.src = "img/Script/JS3.png";
        jsbevel3.style.opacity = "1.0";
        slotTracker3 = 1;
        break;
    }
  } else if (whichSlot == 4) {
    switch(slotTracker4) {
      case 1:
        slot4.src = "img/Script/DP4.png";
        jsbevel4.style.opacity = "0.0";
        slotTracker4 = 2;
        break;
      case 2:
        slot4.src = "img/Script/FB4.png";
        slotTracker4 = 3;
        break;
      case 3:
        slot4.src = "img/Script/JS4.png";
        jsbevel4.style.opacity = "1.0";
        slotTracker4 = 1;
        break;
    }
  } else {
    console.log("Function SlotIncrement() has bad parameter!")
  }
}

slot1click.addEventListener("mouseenter", function() {SlotHighlight(1, "focus")});
slot1click.addEventListener("mouseleave", function() {SlotHighlight(1, "unfocus")});
slot2click.addEventListener("mouseenter", function() {SlotHighlight(2, "focus")});
slot2click.addEventListener("mouseleave", function() {SlotHighlight(2, "unfocus")});
slot3click.addEventListener("mouseenter", function() {SlotHighlight(3, "focus")});
slot3click.addEventListener("mouseleave", function() {SlotHighlight(3, "unfocus")});
slot4click.addEventListener("mouseenter", function() {SlotHighlight(4, "focus")});
slot4click.addEventListener("mouseleave", function() {SlotHighlight(4, "unfocus")});


function SlotHighlight(whichSlot, whichAnim) {
  switch (whichSlot) {
    case 1:
      switch (whichAnim) {
        case "focus":
          slot2div.style.opacity = "0.6";
          slot3div.style.opacity = "0.6";
          slot4div.style.opacity = "0.6";
          break;
        case "unfocus":
          slot1div.style.opacity = "1.0";
          slot2div.style.opacity = "1.0";
          slot3div.style.opacity = "1.0";
          slot4div.style.opacity = "1.0";
          break;
      }
    break;
    case 2:
      switch (whichAnim) {
        case "focus":
          slot1div.style.opacity = "0.6";
          slot3div.style.opacity = "0.6";
          slot4div.style.opacity = "0.6";
          break;
        case "unfocus":
          slot1div.style.opacity = "1.0";
          slot2div.style.opacity = "1.0";
          slot3div.style.opacity = "1.0";
          slot4div.style.opacity = "1.0";
          break;
    }
    break;
    case 3:
      switch (whichAnim) {
        case "focus":
          slot1div.style.opacity = "0.6";
          slot2div.style.opacity = "0.6";
          slot4div.style.opacity = "0.6";
          break;
        case "unfocus":
          slot1div.style.opacity = "1.0";
          slot2div.style.opacity = "1.0";
          slot3div.style.opacity = "1.0";
          slot4div.style.opacity = "1.0";
          break;
    }
    break;
    case 4:
      switch (whichAnim) {
        case "focus":
          slot1div.style.opacity = "0.6";
          slot2div.style.opacity = "0.6";
          slot3div.style.opacity = "0.6";
          break;
        case "unfocus":
          slot1div.style.opacity = "1.0";
          slot2div.style.opacity = "1.0";
          slot3div.style.opacity = "1.0";
          slot4div.style.opacity = "1.0";
          break;
    }
    break;
    }
  }

let bC = 1;
let fC = 1;
let mC = 1;

function CBanim(c) {
  controllerBody.src = imgPath + "CB" + c + ".png";
  bC = c;
  EasterEgg();
}

function PCanim(c) {
  controllerFaceplate.src = imgPath + "PC" + c + ".png";
  fC = c;
  EasterEgg();
}

function MCanim(c) {
  controllerModules.src = imgPath + "MC" + c + ".png";
  mC = c;
  EasterEgg();
}

var easterEggText = document.getElementById('tagline-maincontent2');

function EasterEgg() {
  var multiCheck = String(bC) + String(fC) + String(mC);
  //console.log(multiCheck);
  switch (multiCheck) {
    case "249":
      easterEggText.style.opacity = "0.0";
      setTimeout(function() {easterEggText.innerHTML = "#Waluigi-Time";}, 100);
      setTimeout(function() {easterEggText.style.opacity = "1.0";}, 100);
      break;
    case "273":
      easterEggText.style.opacity = "0.0";
      setTimeout(function() {easterEggText.innerHTML = "Hello, Chief";}, 100);
      setTimeout(function() {easterEggText.style.opacity = "1.0";}, 100);
      break;
    case "726":
      easterEggText.style.opacity = "0.0";
      setTimeout(function() {easterEggText.innerHTML = "Doom";}, 100);
      setTimeout(function() {easterEggText.style.opacity = "1.0";}, 100);
      break;
      case "449":
        easterEggText.style.opacity = "0.0";
        setTimeout(function() {easterEggText.innerHTML = "A Dragon!";}, 100);
        setTimeout(function() {easterEggText.style.opacity = "1.0";}, 100);
        break;
      case "361":
        easterEggText.style.opacity = "0.0";
        setTimeout(function() {easterEggText.innerHTML = "Whoa!";}, 100);
        setTimeout(function() {easterEggText.style.opacity = "1.0";}, 100);
        break;
      case "569":
        easterEggText.style.opacity = "0.0";
        setTimeout(function() {easterEggText.innerHTML = "It's-a-Me!";}, 100);
        setTimeout(function() {easterEggText.style.opacity = "1.0";}, 100);
        break;
      case "579":
        easterEggText.style.opacity = "0.0";
        setTimeout(function() {easterEggText.innerHTML = "Let's-a-Go!";}, 100);
        setTimeout(function() {easterEggText.style.opacity = "1.0";}, 100);
        break;
    default:
      easterEggText.innerHTML = "Go Ahead";
      break;
  }
}
