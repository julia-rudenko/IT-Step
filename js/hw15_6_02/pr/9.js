function a (b) {
	let words = b.split(' ');
	let mean = 0;
	for (let i = 0; i<words.length; i++) {
		mean += words[i].length;
	}
	return mean/(words.length);
}
a ('world word boo')