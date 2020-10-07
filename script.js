'use-strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

// start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const answer1 = prompt('Один из последних просмотренных фильмов?', ''),
			answer2 = prompt('На сколько оцените его?', '');

		if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50) {
			personalMovieDB.movies[answer1] = answer2;
			console.log('Da');
		} else {
			console.log('error');
			i--;
		}
	}
}

// rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count > 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

// detectPersonalLevel();

function showMyDB() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	}
}

// showMyDB();

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		personalMovieDB.genres [i] = prompt(('Ваш любимый жанр под номером '+ (i+1) ), '');
	}
}

writeYourGenres();
console.log(personalMovieDB.genres);



