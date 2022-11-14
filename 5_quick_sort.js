// быстрая сортировка (сортировка Хоара)
let count = 0;

const arr = [
	0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
];

function quickSort(array) {
	//условие выхода
	if (array.length <= 1) {
		return array;
	}
	let pivotIndex = Math.floor(array.length / 2); // находим центральный Опорный элемент
	let pivot = array[pivotIndex]; // получаем опорный элемент
	let less = []; // сохраняем числа меньше чем Опорный эл
	let greater = []; // сохраняем числа больше чем Опорный эл
	//
	// пробегаемся по массиву и сравниваем каждый элемент с опорным
	for (let i = 0; i < array.length; i++) {
		//
		count += 1;
		if (i === pivotIndex) continue; // сравниваем индекс текущей итерации с индексом Опорного элемента.
		//И если они равны, эту итерацию мы пропускаем с помощью continue поскольку pivot мы сравнивать не будем
		//
		// если текущий элмент итерации меньше опорного,
		if (array[i] < pivot) {
			less.push(array[i]); //то добавляем в массив less
		} else {
			greater.push(array[i]); // если больше, то в массив greater
		}
	}
	// поскольку это сортировка, мы должны вернуть массив.
	return [...quickSort(less), pivot, ...quickSort(greater)];
	// и в этот массив мы разворачиваем  результат выполнения рекурсивно функции quickSort
}

console.log(quickSort(arr));
console.log(count);
