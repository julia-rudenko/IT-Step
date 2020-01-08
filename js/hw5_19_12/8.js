let ans = prompt('Хотите увидеть следующий день?', 'Да'),
num = 'Понедельник';


while (ans=='Да') {
alert(num);
switch (num) {
	case 'Понедельник': 
		num='Вторник';
	break;
	case 'Вторник': 
		num='Среда';
	break;
	case 'Среда': 
		num='Четверг';
	break;
	case 'Четверг': 
		num='Пятница';
	break;
	case 'Пятница': 
		num='Суббота';
	break;
	case 'Суббота': 
		num='Воскресенье';
	break;
	case 'Воскресенье': 
		num='Понедельник';
	break;
	}
ans = prompt('Хотите увидеть следующий день?', 'Да')
}
