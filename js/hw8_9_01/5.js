function factor (a) {
	for (let k = 2; k<a; k++) {
		if (a%k==0) {
			return(k+'*'+factor(a/k));
		}
	}
	return(a)
}