function exchange (n) {
	let up = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
	down = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
	numbers = '1234567890',
	res = '';
	for (i = 0; i<n.length; i++) {
		if (up.indexOf(n[i])>=0) {
			res += n[i].toLowerCase();
		}
		else if (down.indexOf(n[i])>=0) {
			res += n[i].toUpperCase();
		}
		else if (numbers.indexOf(n[i])>=0) {
			res += '_';
		}
		else {
			res += n[i];
		}
	}
	return res;
}
exchange ('здравСТВУЙТЕ !1!!11')
