const API = 'https://jsonplaceholder.typicode.com/users';
fetch(API)
    .then((response) => response.json())
    .then((users) => console.log(users))
    .catch(console.log)