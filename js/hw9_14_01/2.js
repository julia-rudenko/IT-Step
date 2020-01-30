function multiplTable (someNumber) {
	let table = '';
	for (let i = 2; i<=9; i++) {
		table += someNumber*i+', ';
	}
	alert(table)
}
for (let i = 2; i<=9; i++) {
	multiplTable(i);
}