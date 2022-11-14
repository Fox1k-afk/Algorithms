// нахождение числа фибоначи.

// f(n) = f(n-1) + f(n-2)
function fibonachi(n) {
	if (n <= 0) {
		return 0;
	}
	if (n <= 2) {
		return 1;
	}
	return fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(fibonachi(7));

function iterationFibonachi(n) {
	if (n <= 0) {
		return 0;
	}
	if (n <= 2) {
		return 1;
	}
	let prev = 1;
	let result = 1;
	for (let i = 0; i < n - 2; i++) {
		let tmp = result;
		result += prev;
		prev = tmp;
	}
	return result;
}

console.log(iterationFibonachi(7));

///// нахождение палиндрома (строка читается справа налево и наоборот - одинаково)

// function palindrom(word) {
// 	word = word.toLowerCase();
// 	for (let i = 0; i < word.length / 2; i++) {
// 		if (word[i] !== word[word.length - i - 1]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

function palindrom(word) {
	word.toLowerCase();
	return word === word.split('').reverse().join('');
}
console.log(palindrom('zxcxz'));
console.log(palindrom('zxc'));

//.......... func quest

function one(callback) {
	return callback ? callback(1) : 1;
}
function two(callback) {
	return callback ? callback(2) : 2;
}
function three(callback) {
	return callback ? callback(3) : 3;
}
function four(callback) {
	return callback ? callback(4) : 4;
}
function five(callback) {
	return callback ? callback(5) : 5;
}
function six(callback) {
	return callback ? callback(6) : 6;
}
function seven(callback) {
	return callback ? callback(7) : 7;
}
function eight(callback) {
	return callback ? callback(8) : 8;
}
function nine(callback) {
	return callback ? callback(9) : 9;
}

function plus(a) {
	return (b) => a + b;
}
function minus(a) {
	return (b) => a - b;
}
function divide(a) {
	return (b) => a / b;
}
function mult(a) {
	return (b) => a * b;
}

console.log(one(plus(three())));
console.log(nine(mult(eight())));

//.,.,,.,..,., citys
// Преобразовать словарь (key-value) в массив из названий городов
// вывод городов должен быть в хронолгическом порядке
// Города в которых концерт уже прошел нужно исключить
// результат ['Город', 'Город', 'Город']
const concerts = {
	Dnepr: new Date('2020-04-01'),
	Kiev: new Date('2023-07-02'),
	Kharkiv: new Date('2020-04-21'),
	Zaporoz: new Date('2025-07-15'),
	Drezden: new Date('2020-04-18'),
	Lviv: new Date('2023-07-10'),
};

function concertsToArray(concerts) {
	// сложность O(n*log2n )
	return Object.keys(concerts)
		.filter((city) => concerts[city] > new Date()) // O(n)
		.sort((a, b) => concerts[a] - concerts[b]); // O(N*log2n)
}

console.log(concertsToArray(concerts));

//...,.,.,.,., perimitr

const matrix = ['XOOXO', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO'];

function perimitr(matrix) {
	let p = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 'X') {
				p += j === 0 || matrix[i][j - 1] === 'O';
				p += i === 0 || matrix[i - 1][j] === 'O';
				p += i === matrix.length - 1 || matrix[i + 1][j] === 'O';
				p += j === matrix[i].length - 1 || matrix[i][j + 1] === 'O';
			}
		}
	}
	return p;
}

console.log(perimitr(matrix));
