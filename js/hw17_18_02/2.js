function dayOfTheWeek (str) {
	let a = str.split('.');
	let day = Number(a[0]);
	let month = Number(a[1]);
	let year = Number(a[2]);
	let data = new Date(year, month, day);
	let days = [
			'Воскресенье',
	  		'Понедельник',
	  		'Вторник',
	  		'Среда',
	  		'Четверг',
	  		'Пятница',
	  		'Суббота'
		];
	let n = data.getDay();
	return days[n];
}
dayOfTheWeek('23.10.2000')