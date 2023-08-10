let number1 = +prompt("Введіть початок діапазону:");
let number2 = +prompt("Введіть кінець діапазону:");
let sum = 0;
while (number1 <= number2) {
    // sum = sum + number1;
    sum += number1;
    number1++;
}
console.log(sum);