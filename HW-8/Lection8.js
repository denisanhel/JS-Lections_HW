//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let newUsers = [];

for (let i = 0; i < 10; i++) {
    let user = new User(
        i + 1,
        "User" + (i + 1),
        "Surname" + (i + 1),
        "user" + (i + 1) + "@gmail.com",
        "+380664423457"
    );
    newUsers.push(user);
}
console.log(newUsers);

// Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)

let filter = newUsers.filter(user => user.id % 2 === 0);

console.log(filter);






// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

newUsers.sort((sort) => sort.id);
console.log(newUsers);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];

for (let i = 0; i < 10; i++) {

    let client = new Client(
        i + 1,
        "Name" + (i + 1),
        "Surname" + (i + 1),
        "email" + (i + 1) + "@gmail.com",
        "+380664423457",
        ["first", "second", "third"]
    );

    clients.push(client);
}

console.log(clients);



// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clients.sort((orderSort) => orderSort.order.length);
console.log(clients);



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, vurobnyk, year, maxSchvudkist, dvugyn) {
    this.model = model;
    this.vurobnyk = vurobnyk;
    this.year = year;
    this.maxSchvudkist = maxSchvudkist;
    this.dvugyn = dvugyn;

    this.drive = function() {
        console.log(`їдемо зі швидкістю ${maxSchvudkist} на годину`);
    };


    this.MaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function(newYear) {
        this.year = newYear;
    };

    this.addDriver = function(driver) {
        this.driver = driver;
    };
}
let Cars = new Car("mersedec", "Germany", 2024, 300, 'dvugyn');
Cars.drive();
Cars.MaxSpeed(1000);
Cars.changeYear(2020);
Cars.addDriver({name: "Denis", age: 17});

console.log(Cars);





// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// Створення класу "Попелюшка"
class Popelyshka {
    constructor(name, age, legSize) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }
}

let popelyshku = [];
for (let i = 1; i <= 10; i++) {
    popelyshku.push(new Popelyshka(`Popelyshka${i}`, 18 + i, 36 + i));
}

class Prince {
    constructor(name, age, tyflya) {
        this.name = name;
        this.age = age;
        this.tyflya = tyflya;
    }
}

let prince = new Prince("Prince", 25, 37);

