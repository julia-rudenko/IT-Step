let a = prompt('Укажите, пожалуйста, перове число', '10'),
b = prompt('Укажите, пожалуйста, второе число', '20');

while (a!=b) {
	if (a>b) {
		a=a-b
	}
	else {
		b=b-a
	}
}
alert(a)