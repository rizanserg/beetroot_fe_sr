const penny = +prompt('Введіть сумму:');
const price = +prompt('Введіть ціну шоколадки:');
let chocCount = Math.floor(penny / price);
let remaining = penny % price;
alert(`Можна купити: ${chocCount} по ціні ${price}, здачі залишиться: ${remaining}.`);