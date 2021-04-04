//checks for messages in mailbox. If none, throws error

if(messages === null || messages.length === 0) {
  throw new Error("Failed to find message in inbox " + emailAddress);
}

// The latest message in our inbox is last in the email message list
// so length minus 1 means if there are 5 messages, it will go to index 4
let id = messages.length-1;

// Print out parameters for debugging purposes

// console.log("emailAddress:    " + emailAddress);
// console.log("expectedSubject: " + expectedSubject);
// console.log("expectedMessage: " + expectedMessage);

// Print out the last email's information for debugging purposes

console.log("Subject = " + messages[id].subject);
console.log("Message = " + messages[id].html);
console.log("Date    = " + messages[id].date);

//parses email into a DOM structure. Javascript then functions as normal
var parser = new DOMParser();
var doc = parser.parseFromString(messages[id].html, "text/html");
var linksElements = doc.querySelectorAll("a");

//in Testim 'exportsTest' allows you to export a value to the rest of the test

var headerImg = doc.querySelectorAll('img')[1].src;
exportsTest.headerImgSrc = headerImg;

console.log(headerImg);

var firstLinkHref = linksElements[0].getAttribute('href');
exportsTest.firstLink = firstLinkHref;


var viewDocInRadarHref = linksElements[5].getAttribute('href');
exportsTest.docInRadar = viewDocInRadarHref;
