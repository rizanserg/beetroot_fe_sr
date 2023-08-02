const userNumber = +prompt("Enter three number");
const dozens = userNumber % 100;
const firstDigit = (userNumber - dozens) / 100;
const thirdDigit = userNumber % 10;
const secondDigit = (dozens - thirdDigit) / 10;
alert(`Backwards: ${thirdDigit}${secondDigit}${firstDigit}`)