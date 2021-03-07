/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let countOfFilms = personalMovieDB.count;

if (countOfFilms > 30) {
    alert("Вы киноман");
} else if (countOfFilms > 10) {
    alert("Вы классический зритель");
} else {
    alert("Просмотрено довольно мало фильмов");
}

// function chekOnErrors(answer) {
//     if (answer == false || answer == '' || answer.length > 50) {
//         return 0;
//     } else {
//         return 1;
//     }
// }

// - первый алгоритм по циклу
// for (let i = 0; i < 2; i++) {
//     let a = prompt('Один из последних просмотренных фильмов?');
//     let b = +prompt('На сколько оцените его?');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error');
//         i--;
//     }
// }

// - второй алгоритм по циклу
// let i = 0;
// while (i < 2) {
//     i++;
//     let a = prompt('Один из последних просмотренных фильмов?');
//     let b = +prompt('На сколько оцените его?');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error');
//         i--;
//     }
// }

// - третий алгоритм по циклу
let i = 0;
do {
    i++;
    let a = prompt('Один из последних просмотренных фильмов?');
    let b = +prompt('На сколько оцените его?');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }
} while (i < 2);

console.log(personalMovieDB);