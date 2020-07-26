
'A factory function is a function that returns an object, but isnt itself a class or constructor. '
'As such, we invoke a factory function as a normal function without using the new operator. Using a factory function,'
'we can easily create object instances without the complexity of classes and constructors'



function Radio(mode) {
  let on = false;

  return {
    mode: mode,
    turnOn: function () {
      on = true;
    },
    isOn: function () {
      return on;
    }
  };
}

let fmRadio = Radio('fm');

fmRadio.on;
//undefined

fmRadio.isOn();
// false

fmRadio.turnOn();

fmRadio.isOn();


A functional mixin is a composable factory function that receives a _mixin_as an argument,
copies properties and methods from that mixin, and returns a new object.

function CoffeeMaker(object) {
  let needsRefill = false;

  return Object.assign({}, object, {
    pourAll: function () {
      needsRefill = true;
    },
    isEmpty: function () {
      return needsRefill;
    }
  });
}
