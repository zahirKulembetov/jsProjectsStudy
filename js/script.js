/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let g = prompt(`Ваш любимый жанр под номером ${i + 1}: `, "");
        personalMovieDB.genres[i] = g;
    }
}

function letCalculateMyStatus() {
    let countOfFilms = personalMovieDB.count;

    if (countOfFilms > 30) {
        alert("Вы киноман");
    } else if (countOfFilms > 10) {
        alert("Вы классический зритель");
    } else {
        alert("Просмотрено довольно мало фильмов");
    }
}

letCalculateMyStatus();
writeYourGenres();

function letCheckAnswersToQuestions() {
    let i = 0;
    do {
        i++;
        let a = prompt('Один из последних просмотренных фильмов?', "");
        let b = +prompt('На сколько оцените его?', "");
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    } while (i < 2);
}

letCheckAnswersToQuestions();



console.log(personalMovieDB);