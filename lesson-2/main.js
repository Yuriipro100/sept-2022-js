

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
//
let arr = ['hello','owu','com', 'ua', 1, 10, -9999,[90, 60, 90], true, 'function'];
console.log(arr[7]);
console.log(arr[1]);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[8]);
console.log(arr[9]);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let user = {
    title:'Eragon',
    pageCount: 150,
    genre: 'fantasy'
}
let user2 = {
    title: 'Eragon',
    pageCount:160,
    genre:'fantasy'
}
let user3 = {
    title:'Eragon',
    pageCount: 170,
    genre:'fantasy'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let user4 = {
    title:'Eragon',
    pageCount: 150,
    genre: 'fantasy',
    authors: [
        {name: 'Christofer',age: 15},
        {name: 'Paule',age: 18}
    ]
}
let user6 = {
    title:'Eragon',
    pageCount: 160,
    genre: 'fantasy',
    authors: [
        {name: 'Christofer',age: 15},
        {name: 'Paule',age: 18}
    ]
}
let user5 = {
    title:'Eragon',
    pageCount: 170,
    genre: 'fantasy',
    authors: [
        {name: 'Christofer',age: 15},
        {name: 'Paule',age: 18}
    ]
}
console.log(user);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);
console.log(user6);

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в
// консоль пароль кожного користувач
let userArray = [
    {name: 'Yurii', username: 'Yrasik', password: '12345'},
    {name: 'Yurii', username: 'Yrasik', password: '12345'},
    {name: 'Yurii', username: 'Yrasik', password: '12345'},
    {name: 'Yurii', username: 'Yrasik', password: '12345'},
    {name: 'Yurii', username: 'Yrasik', password: '12345'},
    {name: 'Yurii', username: 'Yrasik', password: '12345'},
    {name: 'Yurii', username: 'Yrasik', password: '12345'},
    {name: 'Yurii', username: 'Yrasik', password: '12345'},
    {name: 'Yurii', username: 'Yrasik', password: '12345'},
]
console.log(userArray[0].password);