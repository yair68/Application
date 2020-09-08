"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотреных вами фильмов?', '');
    const b = prompt('на сколько оцените его?' );

    if (a === null || b === null) {
        i--;
        continue;
    }

    if (a.length > 50 || b.langth > 50) {
        i--;
        continue;
    } 

    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");

} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

