function number (n) {
	if ((n>9)&&(n<20)) {
		switch (n) {
			case 10:
				return 'Десять'
				break;
			case 11:
				return 'Одиннадцать'
				break;
			case 12:
				return 'Двенадцать'
				break;
			case 13:
				return 'Тринадцать'
				break;
			case 14:
				return 'Четырнадцать'
				break;
			case 15:
				return 'Пятнадцать'
				break;
			case 16:
				return 'Шестнадцать'
				break;
			case 17:
				return 'Семнадцать'
				break;
			case 18:
				return 'Восемнадцать'
				break;
			case 19:
				return 'Девятнадцать'
				break;
		}
	}
	else {
		let d = '',
			u = '';
		switch (Math.floor(n/10)) {
			case 2:
				d = 'Двадцать'
				break;
			case 3:
				d = 'Тридцать'
				break;
			case 4:
				d = 'Сорок'
				break;
			case 5:
				d = 'Пятьдесят'
				break;
			case 6:
				d = 'Шестьдесят'
				break;
			case 7:
				d = 'Семьдесят'
				break;
			case 8:
				d = 'Восемьдесят'
				break;
			case 9:
				d = 'Девяносто'
				break;
		}
		switch (n%10) {
			case 0:
				u = ''
				break;
			case 1:
				u = 'один'
				break;
			case 2:
				u = 'два'
				break;
			case 3:
				u = 'три'
				break;
			case 4:
				u = 'четыре'
				break;
			case 5:
				u = 'пять'
				break;
			case 6:
				u = 'шесть'
				break;
			case 7:
				u = 'семь'
				break;
			case 8:
				u = 'восемь'
				break;
			case 9:
				u = 'девять'
				break;
		}
		return d + ' ' + u;
	}
}
number (34)