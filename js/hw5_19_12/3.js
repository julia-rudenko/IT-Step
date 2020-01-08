let a = prompt('Укажите, пожалуйста, число', '10');
		let result = a+' ';

for (let i=1; i<=Math.floor(a/2); i++) {
	if (a%i==0) {
		result+=i+' '
	}
}
alert(result)