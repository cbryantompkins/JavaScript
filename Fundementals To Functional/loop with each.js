function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {log("my name is ${name}");}
  };
};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectsList = [];
//each takes two arguements - 1. a list and then 2. a callback function
//iterates over each item in the list and calls the constructor function above on them and then pushes them to array
_.each(suspects, function(name) {
let suspectObj = CreateSuspectObjects(name);
suspectsList.push(suspectObj);
});

//refactored
_.each(suspects, function(name) {
suspectsList.push(CreateSuspectObjects(name));
});

///////////


//////////////
_.each() / forEach DEFINED
//uses the the array as an arguement
_.each(
    ['observatory','ballroom', 'library'],
    function(value, index, list){ ... }
);
//forEach is a method called on the arrahy
['observatory','ballroom','library']
.forEach(function(value, index, list){...});

Iterates over a list of elements, passing the values to a function.

Each invocation of iterator, the function, is called with three arguments:
(element, index, list). If list is a JavaScript object, iterator's arguments will be (value, key, list).
