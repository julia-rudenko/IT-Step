function divider (a,b) {
	if (a>b) {
		if (a%b==0) {
			return (b);
		}
		else {
			a=a%b;
			return(divider(a,b));
		}
	}

	else {
		if (b%a==0) {
			return (a);
		}
		else {
			b=b%a;
			return(divider(a,b));
		}
	}
}