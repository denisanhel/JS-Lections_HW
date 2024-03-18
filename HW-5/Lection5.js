//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let ploshcha = (a, b) => a * b;
let S = ploshcha(6, 90);
console.log(S);

//- створити функцію яка обчислює та повертає площу кола з радіусом r
const kolo = r => 3.14 * r * r;
let r = kolo(10);
console.log(r);

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinder = (R, H) => 2 * 3.14 * H + 2 * 3.14 * R * R;
let s = cylinder(10, 12);
console.log(s);

//- створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];

let array = arr => {
    for (let element of arr) {
        console.log(element);
        for (let key in element) {
            console.log(key, element[key]);
        }
    }
};
array(users);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraph = par => {
    document.write(`<p> ${par} </p>`);
};
paragraph('some text');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let List = element => {
    document.write(`<ul>`);
    document.write(`<li>${element}</li>`);
    document.write(`</ul>`);
};
List('first');
List('second');
List('third');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл)
let list = (text, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
};
list('Random text', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr = array => {
    document.write(`<ul>`);
    for (const element of array) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul>`);
};
let array = ['hello', 12, 32, true, false];
arr(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let createDivs= array => {
    for (const obj of array) {
        document.write(`<div>`);
        document.write(`<p>Id: ${obj.id}</p>`);
        document.write(`<p>Name: ${obj.name}</p>`);
        document.write(`<p>Age: ${obj.age}</p>`);
        document.write(`</div>`);
    }
    return array;
};
let objectsArray = [
    { id: 1, name: 'anya', age: 30 },
    { id: 2, name: 'kolya', age: 25 },
    { id: 3, name: 'olya', age: 40 }
];
createDivs(objectsArray);

//- створити функцію яка повертає найменьше число з масиву
const minchuslo = mass => {
    let min = mass[0];
    for (const num of mass) {
        if (num < min) {
            min = num;
        }
    }
    return min;
};
let numbers = [0, 1, 2, 43, 2, 12, 32];
console.log(minchuslo(numbers));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let exchangeRate = 1;
    for (const currency of currencyValues) {
        if (currency.currency === exchange) {
            exchangeRate = currency.value;
        }
    }
    return sumUAH / exchangeRate;
};
let sumUAHValue = 10000;
let currencyValuesArray = [
    { currency: 'USD', value: 38 },
    { currency: 'EUR', value: 42 }
]