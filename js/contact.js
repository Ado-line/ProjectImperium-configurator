let aca_import = import("./Ado-CustomAlert_V1.js")

function SendMessage() {
  let email = document.forms["message-form"]["email-input"].value;
  let name = document.forms["message-form"]["name-input"].value;
  let message = document.forms["message-form"]["message-input"].value;
  console.log(email + name + message);
  document.forms["message-form"]["email-input"].value = "";
  document.forms["message-form"]["name-input"].value = "";
  document.forms["message-form"]["message-input"].value = "";
  aca_Anim("#339966", "Message Sent!", 2000) 
};
