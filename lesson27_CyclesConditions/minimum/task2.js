    const num = +prompt('Введіть число від 0 до 9:');
    let result;
switch (num) {
    case 1:
      result = "!";
        break;
    case 2:
      result = "@";
        break;
    case 3:
      result = "#";
        break;
    case 4:
      result ="$";
        break;
    case 5:
      result ="%";
        break;
    case 6:
      result = "^";
        break;
    case 7:
      result = "&";
        break;
    case 8:
      result ="*";
        break;
    case 9:
      result ="(";
        break;
    case 0:
        result =")";
        break;
    default:
      result = 'Невідомий символ операції';
  }
console.log(result);


//     const num = +prompt('Введіть число від 0 до 9:');
//     let result;
// if (num === 1) {
//     result = "!";
// } else if (num === 2) {
//     result = "@";
// } else if (num === 3) {
//     result = "#";
// } else if (num === 4) {
//     result = "$";
// } else if (num === 5) {
//     result = "%";
// } else if (num === 6) {
//     result = "^";
// } else if (num === 7) {
//     result = "&";
// } else if (num === 8) {
//     result = "*";
// } else if (num === 9) {
//     result = "(";
// } else if (num === 0) {
//     result = ")";
// } else {
//     result = 'Невідомий символ операції';
// }
// console.log(result);
