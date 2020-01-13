function mathDegree (a,b) {
	if (b==0) {
		return (1);
	}
	else {
		return (a*mathDegree(a,b-1));
	}
}