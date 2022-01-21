var adoURL = import("./Ado-URL_V1.js")
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
var bodyButtons = document.getElementById('body-color-buttons');
var faceplateButtons = document.getElementById('faceplate-color-buttons');
var moduleButtons = document.getElementById('module-color-buttons');
var imgPath = "img/Script/"

// slotTracker: 1 = Joystick, 2 = D-Pad, 3 = Face Buttons

let slotTracker1 = 1;
let slotTracker2 = 2;
let slotTracker3 = 1;
let slotTracker4 = 3;
let bC = 1;
let fC = 1;
let mC = 1;

slot1click.addEventListener("click", function() {SlotIncrement(1);});
slot2click.addEventListener("click", function() {SlotIncrement(2);});
slot3click.addEventListener("click", function() {SlotIncrement(3);});
slot4click.addEventListener("click", function() {SlotIncrement(4);});

function InRange(x, min, max) {
  //console.log(x >= min && x <= max);
  return x >= min && x <= max;
}

function URLChecker() {
  var s1SP = URL_GetSearchParam('s1');
  var s2SP = URL_GetSearchParam('s2');
  var s3SP = URL_GetSearchParam('s3');
  var s4SP = URL_GetSearchParam('s4');
  var bcSP = URL_GetSearchParam('bC');
  var fcSP = URL_GetSearchParam('fC');
  var mcSP = URL_GetSearchParam('mC');
  //
  switch (parseInt(s1SP)) {
    case 1:
      slotTracker1 = 3;
      SlotIncrement(1);
      break;
    case 2:
      slotTracker1 = 1;
      SlotIncrement(1);
      break;
    case 3:
      slotTracker1 = 2;
      SlotIncrement(1);
      break;
    default:
      break;
  }
  switch (parseInt(s2SP)) {
    case 1:
      slotTracker2 = 3;
      SlotIncrement(2);
      break;
    case 2:
      slotTracker2 = 1;
      SlotIncrement(2);
      break;
    case 3:
      slotTracker2 = 2;
      SlotIncrement(2);
      break;
    default:
      break;
  }
  switch (parseInt(s3SP)) {
    case 1:
      slotTracker3 = 3;
      SlotIncrement(3);
      break;
    case 2:
      slotTracker3 = 1;
      SlotIncrement(3);
      break;
    case 3:
      slotTracker3 = 2;
      SlotIncrement(3);
      break;
    default:
      break;
  }
  switch (parseInt(s4SP)) {
    case 1:
      slotTracker4 = 3;
      SlotIncrement(4);
      break;
    case 2:
      slotTracker4 = 1;
      SlotIncrement(4);
      break;
    case 3:
      slotTracker4 = 2;
      SlotIncrement(4);
      break;
    default:
      break;
  }

  let rC_bcSP = InRange(parseInt(bcSP), 1, 9)
  let rC_fcSP = InRange(parseInt(fcSP), 1, 12)
  let rC_mcSP = InRange(parseInt(mcSP), 1, 9)

  switch (rC_bcSP) {
    case true:
      CBanim(parseInt(bcSP), "perm");
      break;
    default:
      break;
  }
  switch (rC_fcSP) {
    case true:
      PCanim(parseInt(fcSP), "perm");
      break;
    default:
      break;
  }
  switch (rC_mcSP) {
    case true:
      MCanim(parseInt(mcSP), "perm");
      break;
    default:
      break;
  }
  EasterEgg();
  //console.log(String(s1SP) + String(s2SP) + String(s3SP) + String(s4SP) + String(bcSP) + String(fcSP) + String(mcSP));
}

function SlotIncrement(whichSlot) {
  if (whichSlot == 1) {
    switch(slotTracker1) {
      case 1:
        slot1.src = "img/Script/DP1.png";
        jsbevel1.style.opacity = "0.0";
        slotTracker1 = 2;
        URL_Change('param', 'set', 's1', String(slotTracker1));
        break;
      case 2:
        slot1.src = "img/Script/FB1.png";
        jsbevel1.style.opacity = "0.0";
        slotTracker1 = 3;
        URL_Change('param', 'set', 's1', String(slotTracker1));
        break;
      case 3:
        slot1.src = "img/Script/JS1.png";
        jsbevel1.style.opacity = "1.0";
        slotTracker1 = 1;
        URL_Change('param', 'set', 's1', String(slotTracker1));
        break;
    }
  } else if (whichSlot == 2) {
    switch(slotTracker2) {
      case 1:
        slot2.src = "img/Script/DP2.png";
        jsbevel2.style.opacity = "0.0";
        slotTracker2 = 2;
        URL_Change('param', 'set', 's2', String(slotTracker2));
        break;
      case 2:
        slot2.src = "img/Script/FB2.png";
        jsbevel2.style.opacity = "0.0";
        slotTracker2 = 3;
        URL_Change('param', 'set', 's2', String(slotTracker2));
        break;
      case 3:
        slot2.src = "img/Script/JS2.png";
        jsbevel2.style.opacity = "1.0";
        slotTracker2 = 1;
        URL_Change('param', 'set', 's2', String(slotTracker2));
        break;
    }
  } else if (whichSlot == 3) {
    switch(slotTracker3) {
      case 1:
        slot3.src = "img/Script/DP3.png";
        jsbevel3.style.opacity = "0.0";
        slotTracker3 = 2;
        URL_Change('param', 'set', 's3', String(slotTracker3));
        break;
      case 2:
        slot3.src = "img/Script/FB3.png";
        jsbevel3.style.opacity = "0.0";
        slotTracker3 = 3;
        URL_Change('param', 'set', 's3', String(slotTracker3));
        break;
      case 3:
        slot3.src = "img/Script/JS3.png";
        jsbevel3.style.opacity = "1.0";
        slotTracker3 = 1;
        URL_Change('param', 'set', 's3', String(slotTracker3));
        break;
    }
  } else if (whichSlot == 4) {
    switch(slotTracker4) {
      case 1:
        slot4.src = "img/Script/DP4.png";
        jsbevel4.style.opacity = "0.0";
        slotTracker4 = 2;
        URL_Change('param', 'set', 's4', String(slotTracker4));
        break;
      case 2:
        slot4.src = "img/Script/FB4.png";
        jsbevel4.style.opacity = "0.0";
        slotTracker4 = 3;
        URL_Change('param', 'set', 's4', String(slotTracker4));
        break;
      case 3:
        slot4.src = "img/Script/JS4.png";
        jsbevel4.style.opacity = "1.0";
        slotTracker4 = 1;
        URL_Change('param', 'set', 's4', String(slotTracker4));
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


bodyButtons.addEventListener('mouseleave', function() {CBanim(0, "reset")});
faceplateButtons.addEventListener('mouseleave', function() {PCanim(0, "reset")});
moduleButtons.addEventListener('mouseleave', function() {MCanim(0, "reset")});

function CBanim(c, whichAnim) { //Parameter whichAnim accepts "perm", "temp", and "reset"
  switch (whichAnim) {
    case "perm":
      controllerBody.src = imgPath + "CB" + c + ".png";
      bC = c;
      EasterEgg();
      URL_Change('param', 'set', 'bC', String(bC));
      break;
    case "temp":
      controllerBody.src = imgPath + "CB" + c + ".png";
      break;
    case "reset":
      controllerBody.src = imgPath + "CB" + bC + ".png";
      break;
  }
}

function PCanim(c, whichAnim) {
  switch (whichAnim) {
    case "perm":
      controllerFaceplate.src = imgPath + "PC" + c + ".png";
      fC = c;
      EasterEgg();
      URL_Change('param', 'set', 'fC', String(fC));
      break;
    case "temp":
      controllerFaceplate.src = imgPath + "PC" + c + ".png";
      break;
    case "reset":
      controllerFaceplate.src = imgPath + "PC" + fC + ".png";
      break;
  }
}

function MCanim(c, whichAnim) {
  switch (whichAnim) {
    case "perm":
      controllerModules.src = imgPath + "MC" + c + ".png";
      mC = c;
      EasterEgg();
      URL_Change('param', 'set', 'mC', String(mC));
      break;
    case "temp":
      controllerModules.src = imgPath + "MC" + c + ".png";
      break;
    case "reset":
      controllerModules.src = imgPath + "MC" + mC + ".png";
      break;
  }
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
      case "536":
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
      case "994":
        easterEggText.style.opacity = "0.0";
        setTimeout(function() {easterEggText.innerHTML = "Wah-Ha-Ha!";}, 100);
        setTimeout(function() {easterEggText.style.opacity = "1.0";}, 100);
        break;
    default:
      easterEggText.innerHTML = "Go Ahead";
      break;
  }
}
