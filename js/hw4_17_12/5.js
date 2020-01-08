let day = Number(prompt('Укажите, пожалуйста, день (1-31) ', '12')),
month = Number(prompt('Укажите, пожалуйста, месяц (1-12) ', '1')),
year = Number(prompt('Укажите, пожалуйста, год ', '2000'));

if ((year>=0)&&(month==12)&&(day==31)) {
	year=year+1;
	month=1;
	day=1;
}
else {

	let lastDay = 0;
	if ((month==1)||(month==3)||(month==5)||(month==7)||(month==8)||(month==10)||(month==12)) {
		lastDay = 31;
	} else if (month==2) {
		if ((year%400 == 0) || ((year%4 == 0) && (year%100 != 0))) {
			lastDay = 29;
		} else {
			lastDay = 28;
		}
	} else {
		lastDay = 30;
	}

	if (day<lastDay) {
		day=day+1;
	} else {
		day=1;
		month=month+1;
	}
}

alert(day+' '+month+' '+year);