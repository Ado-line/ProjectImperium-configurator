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

function GetParam(key) {
  var address = window.location.search;
  var paramSearch = new URLSearchParams(address);
  return paramSearch.get(key);
}

//let s1SP = GetParam('s1');
//let s2SP = GetParam('s2');
//let s3SP = GetParam('s3');
//let s4SP = GetParam('s4');
//let bcSP = GetParam('bC');
//let fcSP = GetParam('fC');
//let mcSP = GetParam('mC');

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
  var s1SP = GetParam('s1');
  var s2SP = GetParam('s2');
  var s3SP = GetParam('s3');
  var s4SP = GetParam('s4');
  var bcSP = GetParam('bC');
  var fcSP = GetParam('fC');
  var mcSP = GetParam('mC');
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
      CBanim(parseInt(bcSP));
      break;
    default:
      break;
  }
  switch (rC_fcSP) {
    case true:
      PCanim(parseInt(fcSP));
      break;
    default:
      break;
  }
  switch (rC_mcSP) {
    case true:
      MCanim(parseInt(mcSP));
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
        break;
      case 2:
        slot1.src = "img/Script/FB1.png";
        jsbevel1.style.opacity = "0.0";
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
        jsbevel2.style.opacity = "0.0";
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
        jsbevel3.style.opacity = "0.0";
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
        jsbevel4.style.opacity = "0.0";
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
  URLChanger()
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


function CBanim(c) {
  controllerBody.src = imgPath + "CB" + c + ".png";
  bC = c;
  EasterEgg();
  URLChanger()
}

function PCanim(c) {
  controllerFaceplate.src = imgPath + "PC" + c + ".png";
  fC = c;
  EasterEgg();
  URLChanger()
}

function MCanim(c) {
  controllerModules.src = imgPath + "MC" + c + ".png";
  mC = c;
  EasterEgg();
  URLChanger()
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

function URLChanger() {
  //const currentUrl = window.location.href;
  //const url = new URLSearchParams(window.location.search);
  //url.set("script", String(slotTracker1) + String(slotTracker2) + String(slotTracker3) + String(slotTracker4) + String(bC) + String(mC) + String(fC));
  var scriptQueery = "?s1=" + String(slotTracker1) + "&s2=" + String(slotTracker2) + "&s3=" + String(slotTracker3) + "&s4=" + String(slotTracker4) + "&bC=" + String(bC) + "&fC=" + String(fC) + "&mC=" + String(mC);
  history.replaceState('data to be passed', 'Project Imperium', scriptQueery);
  //window.location.search = url;
}

function URLCopy() {
  navigator.clipboard.writeText(window.location.href);
}
