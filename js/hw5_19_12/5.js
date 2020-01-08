const n = 10;
let pos = 0, neg = 0, zero = 0, even = 0, odd = 0;
for (i=0; i<n; i+=1) {
	let a = prompt('Укажите, пожалуйста, число № '+i, '0');
	if (a>0) {
		pos+=1
	}
	else if (a<0) {
		neg+=1
	}
	else {
		zero+=1
	}

	if (a%2==0) {
		even+=1
	}
	else {
		odd+=1
	}
}
alert('Положительных - '+pos+' Отрицательных - '+neg+' Нулей - '+zero+' Четных - '+even+' Нечетных - '+odd)

