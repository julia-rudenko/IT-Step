function sec_to_time (seconds) {
	let hours = Math.floor(seconds/3600);
	let minutes = Math.floor((seconds%3600)/60);
	seconds = seconds%3600%60;
	return(hours+':'+minutes+':'+seconds);
}