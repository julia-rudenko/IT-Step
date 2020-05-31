function time () {
	console.log(new Date());
}
function writetime () {
	setInterval(time, 1000);
}
writetime();