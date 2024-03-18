//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б



function foo(a, b){
    return a * b;
}

let S = foo(6,90);
console.log(S)



//- створити функцію яка обчислює та повертає площу кола з радіусом r

function ring(r){
    return 3.14 * r * r
}
let r =ring(10)
console.log(r)

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r

function figure(R, H){
    return 2 * 3.14 * H + 2 * 3.14 * R * R
}
let s = figure(10, 12)
console.log(s)

//- створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

function forArray(mass){
    for (const element of mass) {
        console.log(element)
        for (const key in element) {
            console.log(key, element[key])
        }
    }
}
forArray(users)




//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

function txt(par){
    document.write(`<p> ${par} </p>`);
}
txt('Different text');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list(element){
    document.write(`<ul>`)

    document.write(`<li>${element}</li>`)

    document.write(`</ul>`)
}

list('first')
list('second')
list('third')




//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл)

function lastList(text, kilkist){
    document.write(`<ul>`)
    for (let i = 0; i < kilkist; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

lastList('Random text', 3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function accepter(array){
    document.write(`<ul>`)
    for (const arrayElement of array) {
        document.write(`<li>${array}</li>`)
    }
    document.write(`</ul>`)
}

let array = ['hello', 12, 32, true, false]
accepter(array)




// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function acceptArray(mas) {
    for (let i = 0; i < mas.length; i++) {
        let m = mas[i];

        document.write(`<div>`);
        document.write(`<p>Id: ${mas.id}</p>`);
        document.write(`<p>Name: ${mas.name}</p>`);
        document.write(`<p>Age: ${mas.age}</p>`);
        document.write(`</div>`);
    }

    return mas
}

let mas = [
    { id: 1, name: 'anya', age: 30 },
    { id: 2, name: 'kolya', age: 25 },
    { id: 3, name: 'olya', age: 40 }
];

acceptArray(mas);

// - створити функцію яка повертає найменше число з масиву

function minNumber(mass){
    let min = mass[0];
    for (let i = 0; i < mass.length; i++) {
        if(mass[i] < min) {
            min = mass[i]
        }
    }
return min

}

let numbers = [0, 1 ,2, 43, 2, 12, 32]
console.log(minNumber(numbers))



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr){
let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma + arr[i]
    }
    return suma
}

let chysla = [1, 2 ,4 ,5, 12 ,54, 12]
console.log(sum(chysla))



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


function swap(arr, index1, index2) {

    let first = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = first;

    return arr;
}

let arrays = [1,2, 10, 22, 20, 30, 44];
console.log(swap(arrays, 0, 1));




// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exchange;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            exchange = currencyValues[i].value;
        }
    }


    let exchangedAmount = sumUAH / exchange;
    return exchangedAmount;
}

let sumUAH = 10000;
let currencyValues = [
    { currency: 'USD', value: 20 },
    { currency: 'EUR', value: 42 }
];
let exchangeCurrency = 'USD';

console.log(exchange(sumUAH, currencyValues, exchangeCurrency));