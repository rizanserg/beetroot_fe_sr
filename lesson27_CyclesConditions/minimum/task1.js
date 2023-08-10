const age = +prompt('Their age:');
if (age < 12) {
    console.log('child');
} else if (age < 18) {
    console.log('teenager');
} else if (age < 60) {
    console.log('adult');
} else {
    console.log('pensioner');
}