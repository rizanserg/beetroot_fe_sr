function numbers(numb1, numb2, numb3) {
    const number = +(`${numb1}${numb2}${numb3}`);
    return number;
}
const res = numbers(1, 2, 4);
console.log(res);