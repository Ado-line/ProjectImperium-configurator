// Tests using a secure token generated at smtpjs.com, this token
// should be going through the Elastic Email SMTP server

function SendTestEmail() {
Email.send({
    SecureToken : "fc17c29f-57ff-44cd-adf5-07eabaa21135",
    To : 'projectimperium.official@gmail.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

// This works most of the time, occasionally it errors out in the same way
// as the function above, but I've onlt had that happen once.

// Tests using smtp.gmail.com

function SendInsecureTestEmail() {
  Email.send({
      Host : "smtp.gmail.com",
      Username : "projectimperium.official@gmail.com",
      Password : "[ask Adoline For Password]",
      To : 'projectimperium.official@gmail.com',
      From : "you@isp.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}
