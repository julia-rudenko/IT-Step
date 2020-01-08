let number = prompt('Укажите, пожалуйста, год', '1990');

if ((number%400 == 0) || ((number%4 == 0) && (number%100 != 0))) {
	alert('Год високосный')
}
else {
	alert('Год не високосный')
}