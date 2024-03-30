//- взяти https://dummyjson.com/docs/carts та вивести інформацію про
//всі корзини. Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(value => {
        let {carts} = value;
        console.log(carts)
        for (const cart of carts) {
            console.log(cart)
        }
    });




//- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(value => {
        let {recipes} = value;
        console.log(recipes)
        document.write(`<ul>`)
        for (const recipe of recipes) {
            document.write(`<li> ${recipe.ingredients} </li>`)
        }
        document.write(`</ul>`)

    });





// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get('id');
fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(user => {
        let userDetails = document.getElementById('user-details');
        let userFields = Object.keys(user);
        userFields.forEach(field => {
            let fieldElement = document.createElement('p');
            fieldElement.textContent = `${field}: ${user[field]}`;
            userDetails.appendChild(fieldElement);
        });
    })