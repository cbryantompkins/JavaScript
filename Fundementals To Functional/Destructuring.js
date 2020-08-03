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
var suspects = [
        {
            name: "Rusty",
            color: "orange"
        }, {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
//simple way to desctructure
var [color, color2] = [suspects[0].color, suspects[1].color]

//destructured way of extracting color variables -  best practice
//the structure is sort of backwards. it finds 'suspects' then color key in order
var [{color: firstColor}, {color: secondColor}] = suspects;
//firstColor = orange ; secondColor = red
