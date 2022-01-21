var scriptName = "Ado-URL.js"

var funcLine_URL_GetSearchParam = "4";
function URL_GetSearchParam(key) { //  Parameter given **must** be a string!
  if (!key) {
    console_Identify(funcLine_URL_GetSearchParam, "URL_GetSearchParam(key)");
    console_Error("Parameter 'key' is not set correctly!");
    console_Message("Remember, all parameters for this library MUST be passed as strings and cannot be empty!");
    console_Message("You can use String([EXPRESSION]) to easily convert something to a string.");
  } else {
    var address = window.location.search;
    var paramSearch = new URLSearchParams(address);
    return paramSearch.get(key);
  }
}

function URL_GetHash() {
  var url_ob = new URL(document.URL);
  hash = url_ob.hash;
  hashString = hash.substring(1);
  return hashString;
}

var funcLine_URL_Change = "25";
function URL_Change(attribute, operation, key, value) { // Parameters given **must** be strings!

  //  Possible values for parameters:
  //
  //    attribute: "hash", "param"
  //    operation: "set", "delete"
  //    key: [ARBITRARY STRING]
  //    value: [ARBITRARY STRING]
  //
  //    If parameter 'attribute' is set to 'hash', then
  //    then set parameter 'key' to 0.
  //    The hash setter doesn't use it :P
  //

  if (attribute == "hash") {
    switch (operation) {
      case "set":
        if (!value) {
          console_Identify(funcLine_URL_Change, "URL_Change(attribute, operation, key, value)");
          console_Error("Parameter 'value' is not set correctly!");
          console_Message("Remember, all parameters for this library MUST be passed as strings and cannot be empty!");
          console_Message("You can use String([EXPRESSION]) to easily convert something to a string.");
        } else {
          var url_ob = new URL(document.URL);
          url_ob.hash = value;
          var new_url = url_ob.href;
          URL_Set_NoReload(new_url);
        }
        break;
      case "delete":
        var url_ob = new URL(document.URL);
        url_ob.hash = "";
        var new_url = url_ob.href;
        URL_Set_NoReload(new_url);
        break;
      default:
        console_Identify(funcLine_URL_Change, "URL_Change(attribute, operation, key, value)");
        console_Error("Parameter 'operation' is not set correctly!");
        console_Message("Remember, all parameters for this library MUST be passed as strings and cannot be empty!");
        console_Message("You can use String([EXPRESSION]) to easily convert something to a string.");
        break;
    }
  } else if (attribute == "param") {
    switch (operation) {
      case "set":
        if ((!key)&&(!value)) {
          console_Identify(funcLine_URL_Change, "URL_Change(attribute, operation, key, value)");
          console_Error("Parameters 'key' and 'value' are not set correctly!");
          console_Message("Remember, all parameters for this library MUST be passed as strings and cannot be empty!");
          console_Message("You can use String([EXPRESSION]) to easily convert something to a string.");
        } else if (!key) {
          console_Identify(funcLine_URL_Change, "URL_Change(attribute, operation, key, value)");
          console_Error("Parameter 'key' is not set correctly!");
          console_Message("Remember, all parameters for this library MUST be passed as strings and cannot be empty!");
          console_Message("You can use String([EXPRESSION]) to easily convert something to a string.");
        } else if (!value) {
          console_Identify(funcLine_URL_Change, "URL_Change(attribute, operation, key, value)");
          console_Error("Parameter 'value' is not set correctly!");
          console_Message("Remember, all parameters for this library MUST be passed as strings and cannot be empty!");
          console_Message("You can use String([EXPRESSION]) to easily convert something to a string.");
        } else {
          var url_ob = new URL(document.URL);
          let params_ob = new URLSearchParams(url_ob.search);
          params_ob.set(key, value);
          url_ob.search = params_ob;
          var new_url = url_ob;
          URL_Set_NoReload(new_url);
        }
        break;
      case "delete":
        if (!key) {
          console_Identify(funcLine_URL_Change, "URL_Change(attribute, operation, key, value)");
          console_Error("Parameter 'key' is not set correctly!");
          console_Message("Remember, all parameters for this library MUST be passed as strings and cannot be empty!");
          console_Message("You can use String([EXPRESSION]) to easily convert something to a string.");
        } else {
          var url_ob = new URL(document.URL);
          let params_ob = new URLSearchParams(url_ob.search);
          params_ob.delete(key);
          url_ob.search = params_ob;
          var new_url = url_ob;
          URL_Set_NoReload(new_url);
        }
        break;
      default:
        console_Identify(funcLine_URL_Change, "URL_Change(attribute, operation, key, value)");
        console_Error("Parameter 'operation' is not set correctly!");
        console_Message("Remember, all parameters for this library MUST be passed as strings and cannot be empty!");
        console_Message("You can use String([EXPRESSION]) to easily convert something to a string.");
        break;
    }

  } else {
    console_Identify(funcLine_URL_Change, "URL_Change(attribute, operation, key, value)");
    console_Error("Parameter 'attribute' not set correctly! Valid options are 'hash' and 'param'");
    console_Message("Remember, all parameters for this library MUST be passed as strings and cannot be empty!");
    console_Message("You can use String([EXPRESSION]) to easily convert something to a string.");
  }
}

function URL_Copy() {
  navigator.clipboard.writeText(window.location.href);
}

var funcLine_URL_Set_NoReload = "133";
function URL_Set_NoReload(x) {
  if (!x) {
    console_CritError("AN INTERNAL FUNCTION HAS ERRORED: If you see this, please report a bug!");
    console_Identify(funcLine_URL_Set_NoReload, "URL_Set_NoReload(x)");
    console_Error("Parameter 'x' not set correctly!");
  } else {
    history.replaceState('data to be passed', 'Project Imperium', x);
  }
}

// ERROR HANDLING

function console_Identify(line, func) {
  console.log("%c" + scriptName + "%cline " + line + ":%c" + func, consoleStyle_scriptIdentify, consoleStyle_lineIdentify, consoleStyle_funcIdentify);
}

function console_Error(message) {
  console.error("%c" + scriptName + "%c ERROR: " + "%c " + message, consoleStyle_scriptIdentify, consoleStyle_errorAlert, consoleStyle_errorText);
}

function console_CritError(message) {
  console.error("%c" + scriptName + "%cCRITICAL:" + "%c " + message, consoleStyle_scriptIdentify, consoleStyle_critErrorAlert, consoleStyle_critErrorText);
}

function console_Warn(message) {
  console.warn("%c" + scriptName + "%cWarning:" + "%c " + message , consoleStyle_scriptIdentify, consoleStyle_warnAlert, consoleStyle_warnText);
}

function console_Message(message) {
  console.log("%c" + scriptName + "%cMessage:" + "%c " + message , consoleStyle_scriptIdentify, consoleStyle_messageAlert, consoleStyle_messageText);
}

let consoleStyle_scriptIdentify = [
  "color:white",
  "padding:1%",
  "background-color:#660029"
].join(";");

let consoleStyle_generic = [
  "color:white"
].join(";");

let consoleStyle_lineIdentify = [
  "color:white",
  "padding:1%",
  "background-color:#004d80"
].join(";");

let consoleStyle_funcIdentify = [
  "color:white",
  "padding:1%",
  "background-color:#00538a"
].join(";");

let consoleStyle_errorAlert = [
  "color:white",
  "padding:1%",
  "background-color:#990000"
].join(";");

let consoleStyle_errorText = [
  "color:red",
  "background-color:#000000"
].join(";");

let consoleStyle_critErrorAlert = [
  "color:red",
  "padding:1%",
  "background-color:#000000",
  "border-style:solid",
  "border-width:3%"
].join(";");

let consoleStyle_critErrorText = [
  "color:white",
  "background-color:#990000"
].join(";");

let consoleStyle_warnAlert = [
  "color:white",
  "padding:1%",
  "background-color:#9e7900"
].join(";");

let consoleStyle_warnText = [
  "color:yellow",
].join(";");

let consoleStyle_messageAlert = [
  "color:white",
  "padding:1%",
  "background-color:#b34100"
].join(";");

let consoleStyle_messageText = [
  "color:orange",
].join(";");
