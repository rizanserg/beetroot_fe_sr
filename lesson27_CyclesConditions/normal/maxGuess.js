function guess () {
    let userInput;
    let start = 0, end = 100, middle;

    while (true) {
        middle = Math.floor((start + end) / 2);
        userInput = prompt(`Is your number ${middle}, Enter yes, more, less`);
        if (userInput === `yes`) {
            console.log(`Guessed`);
            break;
        }
        if (userInput === `less`) {
            end = middle;
        }
        if (userInput === `more`) {
            start = middle;
        }
    }
}
guess();