ES6 allows multiple variables to be assigned like this

const [first, second] = [true, false]
let [first, second] = [true, false]
var [first, second] = [true, false]
//result is first = true, second = false

the variables on the left are assigned the values on the right in matching order

var [a, b, c, d, e] = [1, 2, 3, 4]
a = 1
b = 2
c = 3
d = 4
e = undefined

ES6 also allows this for objects in a similar manner

const {first, second} = {first: 0, second: 1}
let {first, second} = {first: 0, second: 1}
var {first, second} = {first: 0, second: 1}

//key: first, value: 0
//    second, value: 1
