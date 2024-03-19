// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str = [
    'hello world',
    'lorem ipsum',
    'javascript is cool'
]
for (let string of str) {
    console.log(string.length);
}

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str2 = [
    'hello world',
    'lorem ipsum',
    'javascript is cool'
]
for (let string of str2) {
    console.log(string.toUpperCase());
}



// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str3 = [
    'HELLO WORLD',
    'LOREM IPSUM',
    'JAVASCRIPT IS COOL'
]
for (let string of str3) {
    console.log(string.toLowerCase());
}

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str4 = ' dirty string   '
    console.log(
        str4
            .substring(
                str4.indexOf(' ')+1,
                str4.lastIndexOf(' ')
            )
    );


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


    function stringToArray(str){
        return str5.split(' ')
    }
let str5 = 'Ревуть воли як ясла повні';
    let mass = stringToArray(str)
console.log(mass);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbersArray = [10,8,-7,55,987,-1011,0,1050,0]

let string = numbersArray.map(num => num.toString())

console.log(string);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

    let nums = [11,21,3];
function sort(nums, pruznachennya) {
    if (pruznachennya === 'ascending') {
        return nums.slice().sort((a, b) => a - b);
    } else if (pruznachennya === 'descending') {
        return nums.slice().sort((a, b) => b - a);
    }
        console.log(sort(nums, 'ascending'));
        console.log(sort(nums, 'descending'))}





// - є масив
//
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);



let filteredCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);

console.log(filteredCourses);


let peretvorenya = filteredCourses.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));

console.log(peretvorenya)




//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//

    let coloda = [
        { cardSuit: 'spade', value: '6', color: 'black' },
        { cardSuit: 'spade', value: '7', color: 'black' },
        { cardSuit: 'spade', value: '8', color: 'black' },
        { cardSuit: 'spade', value: '9', color: 'black' },
        { cardSuit: 'spade', value: '10', color: 'black' },
        { cardSuit: 'spade', value: 'jack', color: 'black' },
        { cardSuit: 'spade', value: 'queen', color: 'black' },
        { cardSuit: 'spade', value: 'king', color: 'black' },
        { cardSuit: 'spade', value: 'ace', color: 'black' },

        { cardSuit: 'diamond', value: '6', color: 'red' },
        { cardSuit: 'diamond', value: '7', color: 'red' },
        { cardSuit: 'diamond', value: '8', color: 'red' },
        { cardSuit: 'diamond', value: '9', color: 'red' },
        { cardSuit: 'diamond', value: '10', color: 'red' },
        { cardSuit: 'diamond', value: 'jack', color: 'red' },
        { cardSuit: 'diamond', value: 'queen', color: 'red' },
        { cardSuit: 'diamond', value: 'king', color: 'red' },
        { cardSuit: 'diamond', value: 'ace', color: 'red' },

        { cardSuit: 'heart', value: '6', color: 'red' },
        { cardSuit: 'heart', value: '7', color: 'red' },
        { cardSuit: 'heart', value: '8', color: 'red' },
        { cardSuit: 'heart', value: '9', color: 'red' },
        { cardSuit: 'heart', value: '10', color: 'red' },
        { cardSuit: 'heart', value: 'jack', color: 'red' },
        { cardSuit: 'heart', value: 'queen', color: 'red' },
        { cardSuit: 'heart', value: 'king', color: 'red' },
        { cardSuit: 'heart', value: 'ace', color: 'red' },

        { cardSuit: 'clubs', value: '6', color: 'black' },
        { cardSuit: 'clubs', value: '7', color: 'black' },
        { cardSuit: 'clubs', value: '8', color: 'black' },
        { cardSuit: 'clubs', value: '9', color: 'black' },
        { cardSuit: 'clubs', value: '10', color: 'black' },
        { cardSuit: 'clubs', value: 'jack', color: 'black' },
        { cardSuit: 'clubs', value: 'queen', color: 'black' },
        { cardSuit: 'clubs', value: 'king', color: 'black' },
        { cardSuit: 'clubs', value: 'ace', color: 'black' },

    ]

// піковий туз:

console.log(coloda.filter((value) => value.value === "ace"))

// шістки:

console.log(coloda.filter((value) => value.value === "6"))

// - всі червоні карти:

console.log(coloda.filter((color) => color.value === 'red'))

// - всі буби

console.log(coloda.filter((cardSuit)=> cardSuit.value === 'diamond'))

//- всі трефи від 9 та більше

console.log(coloda.filter((cardSuit)=> cardSuit.value === 'spade' &&
coloda.filter((value)=> value.value >= '9')))


//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let cardsForTaskTwo = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },

    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },

    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },

    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },

]

let reduce = cardsForTaskTwo.reduce((
    accumulator, cardInArr) => {
        if (cardInArr.cardSuit === 'spade'){
            accumulator[0].push(cardInArr)
        }
        else if (cardInArr.cardSuit === 'diamonds'){
            accumulator[1].push(cardInArr)
        }
        else if (cardInArr.cardSuit === 'hearts'){
            accumulator[2].push(cardInArr)
        }
        else if (cardInArr.cardSuit === 'clubs'){
            accumulator[3].push(cardInArr)
        }

        return accumulator;
    },
    [[],[],[],[]]
)

console.log(reduce[0]);
console.log(reduce[1]);
console.log(reduce[2]);
console.log(reduce[3]);


//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass

let sass = coursesArray.filter(course => {
    return course.includes('sass')});

console.log(sass);


// --написати пошук всіх об'єктів, в який в modules є docker
let docker = coursesArray.filter(course => {
    return course.modules.includes('docker');});

console.log(docker);



