let sum = prompt('Укажите, пожалуйста, сумму $', '20'),
currency = prompt('Укажите, пожалуйста, желаемую валюту: EUR, UAN или AZN');
const course_eur = 0.9,
course_uan = 6.97,
course_azn = 1.7;

if (currency == 'EUR') {
	alert(sum*course_eur)
}
else if (currency == 'UAN') {
	alert(sum*course_uan)
}
else if (currency == 'AZN') {
	alert(sum*course_azn)
}
else {
	alert('Ошибка')
};