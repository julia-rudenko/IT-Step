let general_arr = [
	[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]
];
let count = general_arr[0].length;
// Считаем, что в каждом массиве одинаковое кол-во элементов
for (let j = 0; j < count; j++) {
	let sum = 0;
	for (let i = 0; i < general_arr.length; i++) {
		sum+=general_arr[i][j];
	};
	console.log(sum);
}