let num1 = +prompt("Введіть перше число:");
let num2 = +prompt("Введіть друге число:");
let number;
let limit = num1 < num2 ? num1 : num2;
for (let i = 1; i <= limit; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        number = i;
    }
}
console.log(number);