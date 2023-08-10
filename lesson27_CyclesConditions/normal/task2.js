const amount = +prompt('Введіть суму покупки:');
let discount = 0;
if (amount >= 200 && amount < 300) {
    discount = 0.03;
} else if (amount >= 300 && amount < 500) {
    discount = 0.05;
} else if (amount >= 500) {
    discount = 0.07;
} else {
    console.log('Введено некоректне значення. Спробуйте ще раз.');
}
const discountAmount = amount - (amount * discount);
console.log(`Сума покупки: ${amount} грн`);
console.log(`Знижка: ${discount * 100}%`);
console.log(`Сума до оплати зі знижкою: ${discountAmount} грн`);