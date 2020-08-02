//constructor funciton that creates a susupect object
function CreateSuspectObjects(name) {
  return {
    name: name,
    //extracts thier last name as a coplor
    color: name.split(' ')[1],
//calls the speak methjod to have them say thier name
    speak() {
      console.log("my name is ", name);
    }
  };
};
//array (list) to transform into objects
var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
//emmpty array to push them into
var suspectsList = [];
//iterates over each suspect and runs the CreateSuspectObjects constructor functiona
for (var i = 0; i < suspects.length; i++) {
  suspectsList.push(CreateSuspectObjects(suspects[i]));
}
