let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < 10; i++) {
    const number = +prompt(`Введіть число №${i + 1}:`);

    if (number > 0) {
        positive++;
    } else if (number < 0) {
        negative++;
    } else {
        zero++;
    }

    if (number % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}
console.log(`Додатні числа: ${positive}`)
console.log(`Від’ємні числа: ${negative}`);
console.log(`Нулі: ${zero}`);
console.log(`Парні числа: ${even}`);
console.log(`Непарні числа: ${odd}`);