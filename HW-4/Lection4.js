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