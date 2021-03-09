/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', "");
        }
    },
    toggleVisibleMyDB: function () {
        if (!personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    letCalculateMyStatus: function letCalculateMyStatus() {
        let countOfFilms = personalMovieDB.count;

        if (countOfFilms > 30) {
            alert("Вы киноман");
        } else if (countOfFilms > 10) {
            alert("Вы классический зритель");
        } else {
            alert("Просмотрено довольно мало фильмов");
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 1; i++) {
            let genres = prompt(`Введите ваши любимые жанры фильмов через запятую: `, "").toLowerCase();
            if (genres != '' && genres != null) {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((element, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${element}`);
            i++;
        });
    },
    letCheckAnswersToQuestions: function () {
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
};

// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
// personalMovieDB.letCalculateMyStatus();
// personalMovieDB.writeYourGenres();
// personalMovieDB.listGenres();
// personalMovieDB.letCheckAnswersToQuestions();


// console.log(personalMovieDB);