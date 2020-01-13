function simple (n,k) {
	if (k==1) {
		return('Prostoye');
	}
	if (n%k==0) {
		return('Ne prostoye');
	}
	else {
		return(simple(n,k-1));
	}
}

// n - ожидаемое число
// k = n-1