let timerId = setInterval (counter, 1000);

function counter () {
	a += 10;
	console.log(a+'%');
	if (a >= 100) {
		clearInterval(timerId);
	}
}
let a = 0;