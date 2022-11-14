function sumNum(array) {
	let sum = 0;
	array.forEach((num) => (sum += num));
	return sum;
}

console.log(sumNum([1, 2, 3, 4, 5, 6]));

///////////////////////

function simpleCalc(num) {
	const a = 1 + 1;
	const b = 2 + 2;

	return b - a + num;
}

// Сложность этого алгоритма будет O(1) - постоянная или константная
///////////////

function simpleCalc2(arr) {
	const a = 1 + 2;
	const b = 2 + 3;
	let additionalNumber = 0;
	arr.forEach((n) => (additionalNumber += n));

	return b - a + additionalNumber;
}

// Сложность этого алгоритма будет O(n)

////////////////

function simpleCalculate3(array) {
	const a = 1 + 2;
	const b = 3 + 4;
	const additionalNumber = array.length;

	return b - a + additionalNumber;
}
// В этот раз, все еще принимая массив аргументов, мы просто берем его длину как дополнительное число для сложения.
//  А получение длины массива, хранящейся в отдельном свойстве, — мгновенная (та же константная) операция.
//   Поэтому какой бы большой массив мы сюда ни передали, мы всегда будем мгновенно получать его длину и одной операцией
//   добавлять к разнице. Итого это константная сложность, O(1).

//,,,,,,,,,,,,,,, Структуры данных
// Arrays
arr = [1, 2, 3];
// добавление элемента в конец массива.
arr.push(4); // [1, 2, 3, 4]
// Сложность такой операции будет O(1).

// Что у нас с удалением с конца массива?
arr.pop(); // [1, 2, 3]
// Здесь мы имеем также O(1).

// добавления и удаления с начала массива?
arr.shift(); // [2, 3]
arr.unshift(4); // [4, 2, 3]
// Вставка и удаление элемента с начала списка имеют сложность О(n).
//  Все потому, что, манипулируя элементами в начале списка, мы должны обновить индексы всех последующих элементов.
//
// Напоследок обязательно стоит упомянуть другие методы работы с массивами, которые имеют О(n)-сложность (как в примере с indexOf).
//  Это будут практически все методы по работе с массивами — все, где мы что-то фильтруем, ищем, перебираем,
//   переворачиваем и даже превращаем в строку (toString) — все это имеет O(n)-сложность.

///
// Немного о стеках. Представьте стопку документов на подпись: тот, что лежит сверху, и берем первым для подписи.
//  Если мы что-то добавляем, то кладем поверх всех, и он становится первым для следующей подписи.
//   Это еще называется LIFO — last in, first out (последним вошел — первым вышел).
//
//Objects
const obj = {
	id: 1,
	name: 'Adam',
};

// мы можем запросить все ключи или все значения объекта. Для этого существуют специальные методы, возвращающие нам массив значений.
Object.keys(obj); // ['id', 'name']
Object.values(obj); // [1, 'Adam']
// Как вы можете догадаться, сложность этих методов — О(n): надо пройти по всем значениям, создавая из них массив.

// B ES2015 в JS добавили объект Map — Oн предоставляет методы манипуляций с объектом, имитируя Map. Например:
// Проверить, есть ли запись (has), вместо сравнения с undefined.
// Получить по ключу (get) и записать (set).
// Применить forEach сразу к map, итерируя на месте по связкам (ключ, значение).
// Прочие удобности.

// Задача - посчитать количество уникальных символов в строке.

function countSymbols(string) {
	// вспомогательная структура - карта уникальных символов
	const map = new Map();

	// запускаем обход по строке
	for (let i = 0; i < string.length; i++) {
		const char = string[i]; // берем каждый итерируемый символ
		let newValue = 1; // и сколько раз мы его встретили, по-умолчанию один

		// а если символ уже встречался, т.е. записан в карту, увеличиваем
		if (map.has(char)) newValue += map.get(char);

		// обновляем сколько раз текущий символ встретился
		map.set(char, newValue);
	}
	return map;
}

console.log(countSymbols('Balalaika'));

// В общем, идея маппинга: это создание вспомогательной структуры для определенных операций за О(1).

////////.........

const shows = [
	{
		id: 1,
		name: 'Rick and Morty',
		categories: ['Comedy', 'Animated', 'Science'],
		data: 1001010101001011,
	},
	// {/.../},
	// {/.../},
	// {/.../},
	// {/.../},
];

const bannedShows = [
	{
		id: 1,
		categories: ['Comedy', 'Animated', 'Science'],
	},
	// {/.../},
	// {/.../},
	// {/.../},
];

// Bad
function ineffectiveBanning(shows) {
	// начинается обход всех шоу
	shows.forEach((show) => {
		// берется ID каждого
		const { id: showID } = show;

		// запускается обход забаненных шоу
		bannedShows.forEach((bannedShow) => {
			// теперь берем ID каждого забаненного
			const { id: bannedShowID } = bannedShow;

			// сравниваем ID и если совпадение - помечаем шоу как забаненное
			if (showID === bannedShowID) {
				show.isBanned = true;
			}
		});
	});
}

// Oптимизируется это очень легко, нам нужна лишь карта забаненных ID, с помощью которой мы бы могли мгновенно проверять, забанено шоу или нет.
// Реализовать это можно как с помощью обычных объектов, так и с помощью Map или даже Set (Set — это просто набор, то есть оперируем как с Map,
// только никаких значений записям не присваиваем, просто добавляем уникальные ключи, чтобы они были в наборе, и выполняем мгновенные проверки на их наличие):

function effectiveBanning(shows) {
	const bannedShowsIDs = new Set();

	// наполнили Set забаненными ID
	bannedShows.forEach(({ id }) => bannedShowsIDs.add(id));

	shows.forEach(({ id }) => {
		// если ID текущего шоу присутствует в сете забаненных - помечаем его
		if (bannedShowsIDs.has(id)) show.isBanned = true;
	});
}
// мы вынесли вложенный цикл итерирования по забаненным шоу наружу и проходим по нему всего один раз для заполнения нашего Set,
// который будет набором всех забаненных ID с возможностью мгновенно проверять, есть ли там определенная запись.
//

//,,,,,,,,,,,,,, Память в реальном мире

function enhanceApiResponse(apiResponse) {
	const channels = apiResponse.channels
		.filter(filterEmptyTimelines)
		.map(addIdentificator)
		.map(modifyImages)
		.map(removeParams)
		.map(setSession);

	// more code
}
// Что делают методы filter и map? Возвращают новый массив, под который необходимо выделить память, возможно, много
// А существует этот массив лишь для того, чтобы по нему запустить новый цикл и провернуть другую операцию с теми же элементами, что и в предыдущем цикле.

//Исправить это можно очень просто, заменив все на один обход. Например, с помощью reduce:
function enhanceApiResponse(apiResponse) {
	const channels = apiResponse.channels.reduce((acc, channel) => {
		if (!hasEmptyTimelines(channel.timelines)) {
			acc.push(setChannelURL(reduceImagesObject(addIDToChannel(channel))));
		}

		return acc;
	}, []);

	// more code
}

// Мы имеем один reduce.  Суть в том, что мы не выделяем кучу памяти под новые массивы, которые даже толком не используем.

// ,..,.,.,.,..,.,.,,. Сортировки

// сортировку пузырьком (Bubble Sort) .    O(n^2)-сложность.
// Идея этой сортировки в том, чтобы, проходя по массиву, находить самый большой элемент и «протаскивать» его до конца массива.

// Cуть протаскивания примитивна: это прохождение по массиву, определение текущего и последующего элементов и их сравнение.
//  Если левый больше правого, меняем их местами и берем следующий.

function bubble(arr) {
	const length = arr.length;
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length - i - 1; j++) {
			const current = arr[j]; // текущий элемент
			const next = arr[j + 1]; // следующий элемент

			// если текущий больше следующего, меняем их местами
			if (cuurent > next) {
				arr[j] = next;
				arr[j + 1] = cuurent;
			}
		}
	}
	return arr;
}

//Бесполезна ли эта сортировка, имеющая аж квадратичную сложность, когда есть более быстрые универсальные сортировки?
//Отнюдь. Как мы могли наблюдать, у сортировки пузырьком (как и у подобных ей, типа сортировки вставками) есть одно довольно важное преимущество — расход памяти
//Здесь нам требуется лишь одна вспомогательная переменная для смены мест двух элементов, то есть константная сложность по памяти.

// Сортировка слиянием

// Идея сортировки слиянием состоит в том, чтобы разбивать массив пополам на пару новых массивов (и каждую половинку снова пополам, и те тоже пополам),
// пока у нас не получатся массивы, состоящие лишь из одного элемента. Затем мы начинаем сливать их обратно в единый массив попарно, как и разбивали.
// Таким образом, мы можем очень быстро наполнять массив, на месте же его и сортируя, просто принимая решение, какой из элементов на каждом этапе вставлять
//  (то есть вставляем все время меньший элемент и получаем отсортированный по возрастанию массив).

// Благодаря постоянной разбивке пополам и попарному слиянию сложность этой сортировки — O(n * log n),
//  то есть длина массива (надо как минимум раз полностью пройти по массиву), умноженная на логарифм от длины (сложность постоянного деления пополам).

function mergeSort(unsortedArray) {
	// условие выхода из рекурсии
	// если переданный массив имеет менее двух элементов - нечего сортировать
	if (unsortedArray.length < 2) {
		return unsortedArray;
	}

	// находим центр при помощи побитовой операции сдвига на один бит вправо
	// аналог деления на два и округления вниз, только эффективнее и элегантнее
	const middle = unsortedArray.length >> 1;
	const left = unsortedArray.slice(0, middle); // левая часть
	const right = unsortedArray.slice(middle); // правая часть

	return merge(mergeSort(left), mergeSort(right));
}
// В чем будет заключаться наша логика слияния? У нас приходят два массива: левый и правый. Оба либо уже отсортированы (см. логику выше),
//  либо просто состоят из одного элемента. Теперь нам нужно начать обход по обоим (достаточно одного обхода с двумя указателями:
// 	первый указывает на итерируемый элемент левого массива, второй — на итерируемый элемент правого массива) и брать меньший из двух элементов,
// 	 закидывая его в новый массив, который мы вернем как отсортированный.

function merge(left, right) {
	const resultArray = []; // отсортированный массив, который мы наполним и вернем
	let leftIndex = 0; // указатель для обхода левого массива
	let rightIndex = 0; // указатель для обхода правого массива

	// обходим, пока не закончили хотя бы один из массивов
	// (значит во втором все оставшиеся элементы точно больше)
	while (leftIndex < left.length && rightIndex < right.length) {
		// если левый элемент меньше правого
		if (left[leftIndex] < right[rightIndex]) {
			resultArray.push(left[leftIndex]); // добавляем его в массив
			leftIndex++; // инкрементируем указатель, чтобы ссылаться на следующий эл-нт
		} else {
			// иначе правый эл-нт больше, делаем тоже самое, только с правым
			resultArray.push(right[rightIndex]);
			rightIndex++;
		}
	}

	// возвращаем массив, что мы наполняли и добавляем в него все, что не допрошли
	return resultArray
		.concat(left.slice(leftIndex))
		.concat(right.slice(rightIndex));
}

// более быстрая сортировка требует значительно больше памяти (выделяется большое количество памяти под все эти новые массивы,
// которое не идет ни в какое сравнение с константным расходом сортировки пузырьком).
