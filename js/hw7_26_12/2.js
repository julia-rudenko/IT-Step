function time (hours,minutes,seconds) {
	if (typeof seconds === "undefined") {
		if (typeof minutes === "undefined") {
			alert(hours+':00:00');
		}
		else {
			alert(hours+':'+minutes+':00');
		}
	}
	else {
		alert(hours+':'+minutes+':'+seconds);
	}
}