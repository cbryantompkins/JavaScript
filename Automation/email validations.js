
// Add JS parameter:  expectedSubject
if (messages && messages[0]) {

  var actualSubject = messages[0].subject
  var compareResult = expectedSubject.test(actualSubject);
  return compareResult

}


function getText(html) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, "text/html");
    var bodyText =  doc.querySelector("body").innerText;

	console.log(bodyText);

 	var expectedBody = /Hello,The formulary bulk output: (.*) has started\.Note :(.*)/
    var textCompare = expectedBody.test(bodyText);
  return textCompare;
};


getText(messages[0].html);



//Radar email subject regex
/^MMIT Radar Daily Alert - \d\/\d*\/\d\d\d\d/


//FN bulk output started SUBJECT
/^Staging-Bulk output task for (.*) submitted at (.*) has started/

//FN bulk output completed Subject
/^Staging-Bulk output task for (.*) submitted at (.*) has completed/





//Radar email furst link
if(messages === null || messages.length === 0) {
  throw new Error("Failed to find message in inbox " + emailAddress);
}

// The latest message in our inbox is last in the email message list
//
let id = messages.length-1;

// // Print out parameters for debugging purposes
// //
// console.log("emailAddress:    " + emailAddress);
// console.log("expectedSubject: " + expectedSubject);
// console.log("expectedMessage: " + expectedMessage);

// // Print out the last email's information for debugging purposes
// //
// console.log("Subject = " + messages[id].subject);
// console.log("Message = " + messages[id].html);
// console.log("Date    = " + messages[id].date);


var parser = new DOMParser();
var doc = parser.parseFromString(messages[id].html, "text/html");
var linksElements = doc.querySelectorAll("a");

firstLinkHref = linksElements[0].getAttribute('href');
console.log(firstLinkHref);
exportsTest.firstLink = firstLinkHref;
