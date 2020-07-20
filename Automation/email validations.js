if (messages && messages[0]) {
  var expectedSubject = /^Staging-Bulk output task for (.*) submitted at (.*) has started/
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
