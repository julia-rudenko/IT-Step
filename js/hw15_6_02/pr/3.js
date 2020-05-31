function a (b) {
	let volwes = 'аеёиоуыэюя';
	let count = 0;
	for (let i = 0; i<b.length; i++) {
		if (volwes.indexOf(b[i]) != -1) {
			count += 1;
		}
	}
	return count;
}
a ('фыва')