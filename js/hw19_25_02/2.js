class ExtendedDate extends Date {
	writeDate() {
		let month = super.getMonth();
		let day = super.getDate();
		console.log(day + ', ' + month);
	}
	isFuture() {
		let dateTime = super.getTime();
		let nowTime = Date.now();
		if (dateTime >= nowTime) {
			return true;
		}
		else {
			return false;
		}
	}
	leapYear() {
		let year = super.getFullYear();
		if (((year%4===0)&&(year%100!=0))||(year%400===0)) {
			return true;
		}
		else {
			return false;
		}
	}
	nextDay() {
		let msNow = super.getTime();
		let countOfDays = super.getDate();
		let nextDay = new ExtendedDate(msNow);
		nextDay.setDate(countOfDays+1);
		return nextDay;
	}
}
let date = new ExtendedDate();
date.writeDate();
date.isFuture();
date.leapYear();
date.nextDay();