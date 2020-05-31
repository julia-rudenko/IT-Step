function a (b, c) {
	if (b.length > c) {
		return b.substring(0, c-3) + '...';
	}
	else return b;
}
a ('hello my dear friend', 7)