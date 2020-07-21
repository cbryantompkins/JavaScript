`call() is a method directly invoked onto a function. We first pass into it a single value to set as the value of this;`
 `we pass in any of the receiving function's arguments one-by-one, separated by commas.``

'Consider the following function, multiply(), which simply returns the product of its two arguments:'

function multiply(n1, n2) {
  return n1 * n2;
}

multiply.call(window, 3, 4);

// 12

'How did this happen? We first invoke the call() method directly onto the multiply() function.'
'Note that the multiply preceding .call(window, 3, 4) is not followed by any parentheses.'
'call() will be handling the invocation and the multiply() functions arguments itself'
'For the first argument of the call() method, we pass in the value to be set as this, which is window.'
' We then finish up by passing in the multiply() functions arguments individually, separated by commas'
'Once multiply.call(window, 3, 4); executes, the function will be invoked with the given value of this, and the result that we see is 12'
