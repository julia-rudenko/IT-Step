function time () {
	console.log(new Date());
}
function writetime () {
	let timerId = setInterval(time, 1000);
	return timerId;
}
function clearint (timerId) {
	setTimeout(clearInterval, 4000, timerId);
}

let timerId = writetime();
clearint(timerId);