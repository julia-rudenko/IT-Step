function a (b) {
	for (let i = 0; i<(b.length/2); i++) {
		if (b[i] != b[b.length-i-1]) {
			return false;
		}
	}
	return true;
}
a ('око')