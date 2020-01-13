function maxNumber (a) {
	a = String(a);
	let n = a.length;
	let biggest = 0;
	for (let i = 0; i<n; i++) {
		if (a.charAt(i)>biggest) {
			biggest=a.charAt(i);
		}
	}
	return(biggest)
}