function x (a, b) {
	let count = 0;
	let index = [];
	for (let i = 0; i<a.length; i++) {
		if (a[i] === b) {
			count += 1;
			index.push(i);
		}
	}
	console.log(count);
	console.log(index)
}

x('hello my dear friend', 'e')