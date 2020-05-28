function move_el (arr, from, to) {
	let begin = arr.slice(0, from);
	let middle = arr.slice(from+1, to+1);
	let end = arr.slice(to+1);
	let res = begin.concat(middle, arr[from], end);
	return res;
}
arr = [0, 1, 2, 3, 4, 5]
console.log(move_el(arr, 1, 3));