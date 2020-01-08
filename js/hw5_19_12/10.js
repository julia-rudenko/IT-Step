alert('Загадайте, пожалуйста, число от 0 до 100', '23');
let a = 1,
b = 100;
while (true) {
	let N = Math.floor((a+b)/2);
	let ans = prompt ('Число Больше '+N+', Меньше '+N+', или Равно '+N+'?');
	
	if (ans=='Больше') {
		a=N;
	}
	else if (ans=='Меньше') {
		b=N;
	}
	else if (ans=='Равно') {
		alert(N+'. Мы герои');
		break;
	}
	else {
		alert('error')
	}
}