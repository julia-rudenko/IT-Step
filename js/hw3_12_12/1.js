let age = prompt('Укажите, пожалуйста, ваш возраст', '16');

if ((age>=0) && (age<=12)) {
	alert('Ребенок')
}
else if ((age>12) && (age<=18)) {
	alert('Подросток')
}
else if ((age>18) && (age<=60)) {
	alert('Взрослый')
}
else {
	alert('Пожилой')
}