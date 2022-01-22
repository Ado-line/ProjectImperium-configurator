function console_Identify(scriptName, line, func) {
  console.log("%c" + scriptName + "%cline " + line + ":%c" + func, consoleStyle_scriptIdentify, consoleStyle_lineIdentify, consoleStyle_funcIdentify);
}

function console_Error(scriptName, message) {
  console.error("%c" + scriptName + "%c ERROR: " + "%c " + message, consoleStyle_scriptIdentify, consoleStyle_errorAlert, consoleStyle_errorText);
}

function console_CritError(scriptName, message) {
  console.error("%c" + scriptName + "%cCRITICAL:" + "%c " + message, consoleStyle_scriptIdentify, consoleStyle_critErrorAlert, consoleStyle_critErrorText);
}

function console_Warn(scriptName, message) {
  console.warn("%c" + scriptName + "%cWarning:" + "%c " + message , consoleStyle_scriptIdentify, consoleStyle_warnAlert, consoleStyle_warnText);
}

function console_Message(scriptName, message) {
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
