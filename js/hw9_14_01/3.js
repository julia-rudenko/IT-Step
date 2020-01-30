function pairs (someNumber) {
	let number = '';
	for (let i = 1; i<=someNumber; i++) {
		number += '(';
	}
	for (let i = 1; i<=someNumber; i++) {
		number += ')';
	}
	alert(number)
}
pairs(2)