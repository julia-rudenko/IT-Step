function numbers (a) {
	let sum = 0;
	for (let i = 1; i<a; i++) {
		if (a%i==0) {
			sum+=i;
		}
	}
	if (sum==a) {
		return('Sovershennoe');
	}
	else {
		return('Nesovershennoe');
	}
}