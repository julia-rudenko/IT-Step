let len = prompt('Укажите, пожалуйста, длину окружности', '12'),
p = prompt('Укажите, пожалуйста, периметр квадрата', '16');

if ((p/8)>=(len/6.28)) {
	alert('Окружность может вписаться в квадрат')
}
else {
	alert('Окружность не может вписаться в квадрат')
}