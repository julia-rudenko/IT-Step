let data = new Date();
function month () {
	let months = [
		'Январь',
  	'Февраль',
  	'Март',
  	'Апрель',
  	'Май',
  	'Июнь',
  	'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
	];
	let n = data.getMonth();
	console.log(months[n]);
}
month()