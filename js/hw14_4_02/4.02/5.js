function abbreviation (n) {
	n = ' '+n;
	let res = '';
	for (i = 0; i<n.length; i++) {
		if (n[i] === ' ') {
			res += n[i+1].toUpperCase();
		}
	}
	return res;
}

abbreviation ('cascading style sheets')