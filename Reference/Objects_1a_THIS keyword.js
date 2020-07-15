/- A Method Can Access the Object it was Called On
/- Recall that an object can contain data and the means to manipulate that data./
/- but just how can an object reference its own properties, much less manipulate some of those properties itself?/
/- /this is all possible with the This keyword!/

/using This, methods can directly access the object that it is called on. Consider the following object, triangle:/


const triangle = {
  type: 'scalene',
  identify: function () {
    console.log(`This is a ${this.type} triangle.`);
  }
};


' is what gives the identify() method direct access to the triangle object's properties:

triangle.identify();
// 'This is a scalene triangle.'

When the identify() method is called, the value of this is set to the object it was called on: triangle.
As a result, the identify() method can access and use triangle's type property,
as seen in the above console.log() expression.

Note that this is a reserved word in JavaScript, and cannot be used as an identifier
(e.g. variable names, function names, etc.).
