const constructArr = function () {
    const arr = Array.from(arguments);
    arr.push('the billiards room?');
    return arr.join(' ');
};
console.log(constructArr('was', 'it', 'in'));