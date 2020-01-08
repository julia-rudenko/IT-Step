let number = prompt('Укажите, пожалуйста, трехзначное число', '123');

if ((number%10 == (Math.floor((number%100)/10))) || 
	(number%10 == (Math.floor(number/100))) || 
((Math.floor(number/100)) == (Math.floor((number%100)/10)))) {
	alert('Есть одинаковые цифры')
}
else {
	alert('Нет одинаковых цифр')
}


