function repeat (arr) {
	let res = 0;
	while (arr.length > 0) {
		let element = arr[0];
		if (arr.lastIndexOf(element) != 0) {
			res += 1;
		}
		function check (x) {
			return x != element;
		}
		arr = arr.filter(check)
	}
	return res;
}

arr = [1, 2, 3, 1, 'hi', 'a', 'hi']