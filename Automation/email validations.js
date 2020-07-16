if(messages.length === 0) {
  throw new Error("Failed to find message in inbox " + emailAddress);
}

function getText(html) {
   var parser = new DOMParser();
   var doc = parser.parseFromString(html, "text/html");
  console.log(doc);
   var bodyText =  doc.getElementsByTagName("body")[0].innerText;
  console.log(bodyText);
  if (bodyText === null) {
    throw new Error("Message contains no text.")
  }
}
console.log(messages[0].html);
getText(messages[0].html)
