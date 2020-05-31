function timer (text, sec) {
	sec = sec*1000;
	setInterval(console.log, sec, text);
}
timer ('hello', 2)