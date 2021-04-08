// ES5 version

var add = function(a, b){
    b = b || 2;
    return a +b;
};

 console.log(add(3));
 console.log(add(3, 5));


 //ES6 version
var add = function(a, b = 2){
    return a + b;
}

console.log(add(4));
console.log(add(4, 6));