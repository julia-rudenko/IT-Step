function time_to_sec (hours,minutes,seconds) {
	return((hours*3600)+(minutes*60)+seconds)
}
function sec_to_time (seconds) {
	let hours = Math.floor(seconds/3600);
	let minutes = Math.floor((seconds%3600)/60);
	seconds = seconds%3600%60;
	return(hours+':'+minutes+':'+seconds);
}
function time_difference (sec1,min1,hour1,sec2,min2,hour2) {
	let seconds = time_to_sec(hour1,min1,sec1)-time_to_sec(hour2,min2,sec2);
	return(sec_to_time(seconds))
}
