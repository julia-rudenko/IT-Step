function correction (n) {
	let d = '';
	let found_d = false;
	for (i = 0; i<n.length; i++) {
		if (n[i] === '-') {
			found_d = true;
		}
		else {
			if (found_d) {
				d += n[i].toUpperCase();
			}
			else {
				d += n[i];
			}
			found_d = false;
		}
	}
	return d;
}

correction ('hi-humanity')