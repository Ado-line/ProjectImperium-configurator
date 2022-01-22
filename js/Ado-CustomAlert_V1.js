// Remember that '<div id="ado-custom-alert-container"><div id="ado-custom-alert"><p id="ado-custom-alert-content"></p></div></div>'
// must be written somehwere in your HTML file!
var adoEM = import("./Ado-ErrorMessage_V1.js")

var aca_script = "Ado-CustomAlert_V1.js";
var aca_Container_Line = "7";
var aca_Container = document.getElementById('ado-custom-alert-container');
var aca_Alert_Line = "9";
var aca_Alert = document.getElementById('ado-custom-alert');
var aca_Content_Line = "11";
var aca_Content = document.getElementById('ado-custom-alert-content');

let aca_cont1 = true;
let aca_cont2 = true;
let aca_cont3 = true;

if (!aca_Container) {
  console_Identify(aca_script, aca_Container_Line,"var aca_Container = document.getElementById('ado-custom-alert-container');");
  console_CritError(aca_script, "No div with id 'ado-custom-alert-container' found! Script will fail!");
  console_Warn(aca_script, "Remember that your HTML must contain:");
  console_Warn(aca_script, '<div id="ado-custom-alert-container"><div id="ado-custom-alert"><p id="ado-custom-alert-content"></p></div></div>');
  aca_cont1 = false;
} else {
  aca_cont1 = true;
}

if (!aca_Alert) {
  console_Identify(aca_script, aca_Alert_Line,"var aca_Alert = document.getElementById('ado-custom-alert');");
  console_CritError(aca_script, "No div with id 'ado-custom-alert' found! Script will fail!");
  console_Warn(aca_script, "Remember that your HTML must contain:");
  console_Warn(aca_script, '<div id="ado-custom-alert-container"><div id="ado-custom-alert"><p id="ado-custom-alert-content"></p></div></div>');
  aca_cont2 = false;
} else {
  aca_cont2 = true;
}

if (!aca_Content) {
  console_Identify(aca_script, aca_Content_Line,"var aca_Content = document.getElementById('ado-custom-alert-content');");
  console_CritError(aca_script, "No div with id 'ado-custom-alert-content' found! Script will fail!");
  console_Warn(aca_script, "Remember that your HTML must contain:");
  console_Warn(aca_script, '<div id="ado-custom-alert-container"><div id="ado-custom-alert"><p id="ado-custom-alert-content"></p></div></div>');
  aca_cont3 = false;
} else {
  aca_cont3 = true;
}

switch (aca_cont1&&aca_cont2&&aca_cont3) {
  case true:
    aca_Container.style["pointer-events"] = "none";
    aca_Container.style.position = "fixed";
    aca_Container.style.top = "100vh";
    aca_Container.style.width = "100vw";
    aca_Container.style.height = "100vh";
    aca_Alert.style.position = "absolute";
    aca_Alert.style.top = "10vh";
    aca_Alert.style.left = "50vw";
    aca_Alert.style.width = "35%";
    aca_Alert.style.height = "7%";
    aca_Alert.style["text-align"] = "center";
    aca_Content.style.position = "absolute";
    aca_Content.style["z-index"] = "999";
    aca_Content.style.width = "100%";
    aca_Content.style.height = "100%";
    aca_Content.style.padding = "2vh";
    aca_Content.style["background-color"] = "grey";
    aca_Content.style["border-radius"] = "3vh"
    aca_Content.style.transform = "translate(-50%, -50%)";
    aca_Content.style['font-weight'] = "800";
    break;
  default:
    console_CritError(aca_script, "Script in failure state!");
    break;
}

function aca_Anim(color, text, out_delay) { // Pass these parameters as strings
  switch (aca_cont1&&aca_cont2&&aca_cont3) {
    case true:
      aca_Alert.style.transition = "top 0.2s";
      aca_Alert.style.top = "-10vh";
      aca_Content.style["background-color"] = String(color);
      aca_Content.innerHTML = String(text);
      setTimeout(function() {aca_Alert.style.top = "10vh";}, out_delay)
      break;
    default:
      console_CritError(aca_script, "Script in failure state!");
      break;
  }
}
