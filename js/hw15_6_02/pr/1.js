function math1 (str1, str2) {
	if (str1.length > str2.length) {
		return 1;
	}
	else if (str1.length < str2.length) {
		return -1;
	}
	else {
		return 0;
	}
}
math1 ('hey', 'hi')