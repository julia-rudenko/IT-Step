let data = new Date(2000, 10, 23);
console.log(data);
function plus (n) {
	let day = data.getDate();
	data.setDate(day+n);
	return formatDate(data);
}
function minus (n) {
	let day = data.getDate();
	data.setDate(day-n);
	return formatDate(data);
}
function formatDate (data) { 
	let dd = data.getDate();
	if (dd < 10) dd = '0' + dd;
	let mm = data.getMonth();
	if (mm < 10) mm = '0' + mm;
	var yyyy = data.getFullYear();
	return dd + '.' + mm + '.' + yyyy;
}
function dayOfTheWeek () {
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
	console.log(days[n]);
}

plus (10)