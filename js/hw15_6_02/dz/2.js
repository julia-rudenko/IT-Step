function action (n) {
	let numbers = '1234567890',
		mathactions = '+-*/',
		num1 = '',
		num2 = '',
		mathaction = '',
		endOfNum = false;
	for (let i = 0; i<n.length; i++) {
		if (numbers.indexOf(n[i]) != -1) {
			if (endOfNum) {
				num2 += n[i];
			}
			else {
				num1 += n[i];
			}

			if ((i+1<n.length)&&(mathactions.indexOf(n[i+1]) != -1)){
				mathaction = n[i+1];
				endOfNum = true;
			}
		}
	}
	num1 = Number(num1);
	num2 = Number(num2);
	let res = 0;
	switch (mathaction) {
		case '+':
			res = num1 + num2;
			break;
		case '-':
			res = num1 - num2;
			break;
		case '*':
			res = num1 * num2;
			break;
		case '/':
			res = num1 / num2;
			break;
	}
	return res;
}
action ('21/0')