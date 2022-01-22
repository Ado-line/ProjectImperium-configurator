var adoEM = import("./Ado-ErrorMessage_V1.js")

var aurl_script = "Ado-URL_V1.js"

var funcLine_URL_GetSearchParam = "4";
function URL_GetSearchParam(key) { //  Parameter given **must** be a string!
  if (!key) {
    console_Identify(aurl_script, funcLine_URL_GetSearchParam, "URL_GetSearchParam(key)");
    console_Error(aurl_script, "Parameter 'key' is not set correctly!");
    console_Message(aurl_script, "Remember, all parameters for this library MUST be passed as strings and cannot be empty!");
    console_Message(aurl_script, "You can use String([EXPRESSION]) to easily convert something to a string.");
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
          console_Identify(aurl_script, funcLine_URL_Change, "URL_Change(attribute, operation, key, value)");
          console_Error(aurl_script, "Parameter 'value' is not set correctly!");
          console_Message(aurl_script, "Remember, all parameters for this library MUST be passed as strings and cannot be empty!");
          console_Message(aurl_script, "You can use String([EXPRESSION]) to easily convert something to a string.");
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
        console_Identify(aurl_script, funcLine_URL_Change, "URL_Change(attribute, operation, key, value)");
        console_Error(aurl_script, "Parameter 'operation' is not set correctly!");
        console_Message(aurl_script, "Remember, all parameters for this library MUST be passed as strings and cannot be empty!");
        console_Message(aurl_script, "You can use String([EXPRESSION]) to easily convert something to a string.");
        break;
    }
  } else if (attribute == "param") {
    switch (operation) {
      case "set":
        if ((!key)&&(!value)) {
          console_Identify(aurl_script, funcLine_URL_Change, "URL_Change(attribute, operation, key, value)");
          console_Error(aurl_script, "Parameters 'key' and 'value' are not set correctly!");
          console_Message(aurl_script, "Remember, all parameters for this library MUST be passed as strings and cannot be empty!");
          console_Message(aurl_script, "You can use String([EXPRESSION]) to easily convert something to a string.");
        } else if (!key) {
          console_Identify(aurl_script, funcLine_URL_Change, "URL_Change(attribute, operation, key, value)");
          console_Error(aurl_script, "Parameter 'key' is not set correctly!");
          console_Message(aurl_script, "Remember, all parameters for this library MUST be passed as strings and cannot be empty!");
          console_Message(aurl_script, "You can use String([EXPRESSION]) to easily convert something to a string.");
        } else if (!value) {
          console_Identify(aurl_script, funcLine_URL_Change, "URL_Change(attribute, operation, key, value)");
          console_Error(aurl_script, "Parameter 'value' is not set correctly!");
          console_Message(aurl_script, "Remember, all parameters for this library MUST be passed as strings and cannot be empty!");
          console_Message(aurl_script, "You can use String([EXPRESSION]) to easily convert something to a string.");
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
          console_Identify(aurl_script, funcLine_URL_Change, "URL_Change(attribute, operation, key, value)");
          console_Error(aurl_script, "Parameter 'key' is not set correctly!");
          console_Message(aurl_script, "Remember, all parameters for this library MUST be passed as strings and cannot be empty!");
          console_Message(aurl_script, "You can use String([EXPRESSION]) to easily convert something to a string.");
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
        console_Identify(aurl_script, funcLine_URL_Change, "URL_Change(attribute, operation, key, value)");
        console_Error(aurl_script, "Parameter 'operation' is not set correctly!");
        console_Message(aurl_script, "Remember, all parameters for this library MUST be passed as strings and cannot be empty!");
        console_Message(aurl_script, "You can use String([EXPRESSION]) to easily convert something to a string.");
        break;
    }

  } else {
    console_Identify(aurl_script, funcLine_URL_Change, "URL_Change(attribute, operation, key, value)");
    console_Error(aurl_script, "Parameter 'attribute' not set correctly! Valid options are 'hash' and 'param'");
    console_Message(aurl_script, "Remember, all parameters for this library MUST be passed as strings and cannot be empty!");
    console_Message(aurl_script, "You can use String([EXPRESSION]) to easily convert something to a string.");
  }
}

function URL_Copy() {
  navigator.clipboard.writeText(window.location.href);
}

var funcLine_URL_Set_NoReload = "133";
function URL_Set_NoReload(x) {
  if (!x) {
    console_CritError(aurl_script, "AN INTERNAL FUNCTION HAS ERRORED: If you see this, please report a bug!");
    console_Identify(aurl_script, funcLine_URL_Set_NoReload, "URL_Set_NoReload(x)");
    console_Error(aurl_script, "Parameter 'x' not set correctly!");
  } else {
    history.replaceState('data to be passed', 'Project Imperium', x);
  }
}
