// Стоврити форму з трьома полями для name,
// surname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ.
// Іншими словами : заповниои форму,
// натиснули кнопку, під формою з'явився блок з вашим об'єктом

document.getElementById("submitButton").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;

    let user = {
        name: name,
        surname: surname,
        age: age
    };

    let output = document.getElementById("output");
    output.innerHTML = "<h2>Your Object:</h2>";
});




// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let counter = parseInt(localStorage.getItem('pageLoadCounter')) || 0;
counter++;
localStorage.setItem('pageLoadCounter', counter.toString());
document.getElementById('counterBlock').textContent = counter;







// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація
// про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно
// відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію


//...







//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const objects = [];
for (let i = 0; i < 100; i++) {
    objects.push({ id: i, data: `Object ${i}` });
}
let output2 = document.getElementById('output2');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let startIndex = 0;
let itemsPerPage = 10;
function displayObjects(startIndex) {
    output2.innerHTML = '';
    const endIndex = Math.min(startIndex + itemsPerPage, objects.length);
    for (let i = startIndex; i < endIndex; i++) {
        const object = objects[i];
        const div = document.createElement('div');
        div.textContent = `${object.id}: ${object.data}`;
        output2.appendChild(div);
    }
}
displayObjects(startIndex);
nextBtn.addEventListener('click', () => {
    if (startIndex + itemsPerPage < objects.length) {
        startIndex += itemsPerPage;
        displayObjects(startIndex);
    }
});
prevBtn.addEventListener('click', () => {
    if (startIndex - itemsPerPage >= 0) {
        startIndex -= itemsPerPage;
        displayObjects(startIndex);
    }
});

//половину цього завдання взяв з гугла...




// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let textElement = document.getElementById('text');
let removeButton = document.getElementById('removeButton');

removeButton.addEventListener('click', () => {
    if (textElement) {
        textElement.remove();
    }
});





//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let ageInput = document.getElementById('ageInput');
let verifyButton = document.getElementById('verifyButton');

verifyButton.addEventListener('click', () => {
    let age = parseInt(ageInput.value);

    if (isNaN(age)) {
        alert('Будь ласка, введіть коректний вік');
    } else {
        if (age < 18) {
            alert('Ви молодші за 18 років.');
        } else {
            alert('Ваш ві 18');
        }
    }
});







// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let table = document.getElementById('table');
let Container = document.getElementById('Container');

table.addEventListener('click', () => {
    let rowCount = parseInt(document.getElementById('rowCount').value);
    let cellCount = parseInt(document.getElementById('cellCount').value);
    let cellContent = document.getElementById('cellContent').value;
    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < cellCount; j++) {
        }
    }
});






// (Додатковачастина для завдання)

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається