function a (b) {
	let words = b.split(' ');
	let longest = '';
	for (let i = 0; i<words.length; i++) {
		if (longest.length<words[i].length) {
			longest = words[i];
		}
	}
	return longest;
}
a ('world word boo')