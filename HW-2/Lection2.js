//       Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" -
// являється  масивом.
//     Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.' +
// ' Вивести в консоль пароль кожного користувача


let Array = [

    {name: 'Liza'},
    {name: 'Nafanya'},
    {name: 'Anya'},
    {name: 'Tanya'},
    {name: 'Lusa'},
    {name: 'ananaska'},
    {name: 'apelsinka'},
    {name: 'ryzyk'},
    {name: 'Lola'},
    {name: 'Staff'},


    {title: "From blood and ash", pageCount: "500", genre:"fiction"},
    {title: "One of us is lying", pageCount: "230", genre: "fiction"},
    {title: "The death on the Nile", pageCount: "300", genre:"detective"},

    {title: "From blood and ash", pageCount: "500", genre:"fiction", authors:[{name:'Vanya', age: 100}]},
    {title: "One of us is lying", pageCount: "230", genre: "fiction", authors:[{name:'Tonya', age: 30}]},
    {title: "The death on the Nile", pageCount: "300", genre:"detective", authors:[{name:'Valera', age: 32}]}

];

// -----------------------------------------------------------------------

console.log(Array[0].name)
console.log(Array[1].name)
console.log(Array[2].name)
console.log(Array[3].name)
console.log(Array[4].name)
console.log(Array[5].name)
console.log(Array[6].name)
console.log(Array[7].name)
console.log(Array[8].name)
console.log(Array[9].name)



// ------------------------------------------------------------------------


console.log(Array[10].title)
console.log(Array[10].pageCount)
console.log(Array[10].genre)


console.log(Array[11].title)
console.log(Array[11].pageCount)
console.log(Array[11].genre)

console.log(Array[12].title)
console.log(Array[12].pageCount)
console.log(Array[12].genre)

// -------------------------------------------------------------------------

console.log(Array[13].authors[0])
console.log(Array[14].authors[0])
console.log(Array[15].authors[0])


// -------------------------------------------------------------------------

let user = [
    {name: 'Anya', username:'anya_krolixa', password:'123456789' },
    {name: 'Tanya', username:'tanyxa_123', password:'102537' },
    {name: 'Zenya', username:'zENYA12', password:'58964' },
    {name: 'Alina', username:'Marina_krolixa', password:'214523' },
    {name: 'Olya', username:'alina12', password:'7657342' },
    {name: 'Vika', username:'vika_klybnika', password:'785697956' },
    {name: 'Nastya', username:'Nastya_sya', password:'019243' },
    {name: 'Amina', username:'smth_amina', password:'5423758' },
    {name: 'Karina', username:'Karina_zaya', password:'3254o2' },
    {name: 'Pavlo', username:'Pavlo_tapok', password:'964568gdf' }
];

// -------------------------------------------------------------------------

console.log(user[0].password)
console.log(user[1].password)
console.log(user[2].password)
console.log(user[3].password)
console.log(user[4].password)
console.log(user[5].password)
console.log(user[6].password)
console.log(user[7].password)
console.log(user[8].password)
console.log(user[9].password)




// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це
// число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.


let x= 100;

if (x !== 0){
    console.log('вірно')
}
else{
    console.log('невірно')
}

// ---------------------------------------------------------------------------

let time= 15;

if(time>=0 && time<=15){
    console.log('Перша чверть')
}
else if (time>=15 && time<=30){
    console.log('Друга чверть')
}
else if(time>=30 && time<=45){
    console.log('Третя чверть')
}
else
    console.log('Четверта чверть')

// ---------------------------------------------------------------------------

let day= 15

if(day>=0 && day<=10){
    console.log('Перша декада')
}
else if(day>=10 && day<=20){
    console.log('Друга декада')
}
else
    console.log('Третя декада')

//---------------------------------------------------------------------------

let dayOFweek= 1 //parseInt(prompt('Введіть число:'))

switch (dayOFweek){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
}

//---------------------------------------------------------------------------


let number1= 1
let number2= 2

if(number1 > number2){
    console.log('Перше число більше')
}
else if(number2 > number1){
    console.log('Друге число більше')
}
else
    console.log('Числа рівні')


//--------------------------------------------------------------------------