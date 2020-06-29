// event listeners can be set up with just two parameters, type and listener

                      //   type    listener
document.addEventListener('click', function () {
   console.log('The document was clicked');
});

// however. there is a third arguemnts that sets whether or not
// to invoke the listener earlier, during the capturing phase
document.addEventListener('click', function () {
   console.log('The document was clicked');
}, true);

// also functions can be defined outsisde the addEventListener function
// and/or called with one parameter - which passes the event data to the functions
document.addEventListener('click', function (event) {  // ← the `event` parameter - can be any varialbe
   console.log('The document was clicked');
});

// now the function can take event methods as part of its code

// selects all <a> tags
const links = document.querySelectorAll('a');
// adds event listener to all licnk      *passes 'click'*
links.addEventListener('click', function (event) {
// now it can use an event method like preventDefault (for example)
// which disables the devault action for a given event - here: links will not navigate
    event.preventDefault();
    console.log("Look, ma! We didn't navigate to a new page!");
});





// variable that creates a div when called
const myCustomDiv = document.createElement('div');
// funciton with an event listener parameter - here the event will be a click that returns a string
// and the text content of the target on which the event occured
function respondToTheClick(evt) {
    console.log('A paragraph was clicked: ' + evt.target.textContent);
}
// creates 200 paragraphs and adds text
for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;
// appends the paragraph to the div
    myCustomDiv.appendChild(newElement);
}
// adds the div to the body
document.body.appendChild(myCustomDiv);
// adds an event listener to the div and calles the function
// so in this instance the div has the listener that responds with the textContent of any target (here, p) that is clicked
myCustomDiv.addEventListener('click', respondToTheClick);
// now when any paragraph created inside that div is clicked
// the console logs the message 'A paragraph was clicked: This is paragraph [i]'


// the above is refactored code, resulting in one Event listener insead of
// over 200 in the example below

const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;
// adds an event listener for each paragraph
    newElement.addEventListener('click', respondToTheClick);

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);
