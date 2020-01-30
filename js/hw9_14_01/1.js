let someNumbers = [
	2,
	4,
	5
];
function sumNumbers (arrFive) {
	let sum = 0;
	for (let i = 0; i<arrFive.length; i++) {
		sum+=arrFive[i];
	}
	return (sum);
}
sumNumbers (someNumbers);