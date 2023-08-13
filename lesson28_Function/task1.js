// Function Declaration
function testFunction(a, b) {
    return a + b;
}
console.log(testFunction(2, 3));

// Function Expression
const test = function (a, b) {
   return a + b;
}
console.log(test(2, 4));

// Arrow Function
const arrowF = (a, b) => {
    return a + b;
}
console.log(arrowF(2, 5));

// Shortened Arrow Function
const shortArrowFunction = (a, b) => a + b;
console.log(shortArrowFunction(2, 6));