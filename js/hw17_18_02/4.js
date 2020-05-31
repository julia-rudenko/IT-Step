function hoursUntilMidnight () {
	let now = new Date();
	let left = 24-now.getHours();
	console.log(left);
}
function timer () {
	let timerId = setInterval(hoursUntilMidnight, 1000*60*60);
	return timerId;
}
timer()