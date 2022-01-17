function SendMessage() {
  let email = document.forms["message-form"]["email-input"].value;
  let name = document.forms["message-form"]["name-input"].value;
  let message = document.forms["message-form"]["message-input"].value;
  console.log(email + name + message);
};
