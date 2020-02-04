let objectForYou = {
	name: 'Object1',
	price: 15,
	count: 2,
	isShow: true
}

function multiply (obj) {
	for (key in obj) {
		if (typeof obj[key] == "number") {
			obj[key] = obj[key] * 4;
		}
	}
}

multiply(objectForYou)