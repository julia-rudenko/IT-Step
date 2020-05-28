function stat (str) {
	str = str.toLowerCase();
	let numbers = '1234567890',
		letters = 'abcdefghijklmnopqrstuvwxyz',
		counterOfNumbers = 0,
		counterOfLetters = 0,
		counterOfSymbols = 0;
	for (var i = 0; i < str.length; i++) {
		if (numbers.indexOf(str[i]) !== -1) {
			counterOfNumbers += 1;
		}
		else if (letters.indexOf(str[i]) !== -1) {
			counterOfLetters += 1;
		}
		else {
			counterOfSymbols += 1;
		}
	}
	console.log ('count of numbers: ' + counterOfNumbers);
	console.log ('count of letters: ' + counterOfLetters);
	console.log ('count of symbols: ' + counterOfSymbols);
}