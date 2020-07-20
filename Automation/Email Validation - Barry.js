// Add JS Parameter: expectedSubject
// Add JS Parameter: expectedMessage
//

// Check that we have emails to validate
//
if(messages === null || messages.length === 0) {
  throw new Error("Failed to find message in inbox " + emailAddress);
}

// The latest message in our inbox is last in the email message list
//
let id = messages.length-1;

// Print out parameters for debugging purposes
//
console.log("emailAddress:    " + emailAddress);
console.log("expectedSubject: " + expectedSubject);
console.log("expectedMessage: " + expectedMessage);

// Print out the last email's information for debugging purposes
//
console.log("Subject = " + messages[id].subject);
console.log("Message = " + messages[id].html);
console.log("Date    = " + messages[id].date);

// If an email expiration date has been set
//  then only condsider emails that arrived in last emailExipirationSeconds seconds
//
if (emailExipirationSeconds > 0)
{
  console.log("Validate email expiration");

  var emailDate = Date.parse(messages[id].date);
  let time_diff = (Date.now() - emailDate) / 1000;

  if (time_diff > emailExipirationSeconds)
  {
    console.log("EXPIRED");
    throw new Error("Emails have expired");
  }
}

// VALIDATE SUBJECT
//
var emailSubject = messages[id].subject;
if (emailSubject !== expectedSubject) {
  throw new Error("Email subject not match " + emailSubject);
}

// VALIDATE EMAIL BODY contains the expected text expectedMessage
//
var emailText = messages[id].html.replace(/  |\r\n|\n|\r/gm, "");
if (!emailText.includes(expectedMessage)) {
  throw new Error("Email text not include expected text " + emailText);
}
