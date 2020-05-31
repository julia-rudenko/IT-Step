function line () {
	let sum = '';
	for (let i = 0; i<arguments.length; i++) {
		sum+=arguments[i];
	}
	return sum;
}
line ('hello', '12345', 'hi123', '456')