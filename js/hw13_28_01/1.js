function shoppingItem (nameOfProd, count, isBought) {
	let someProd = {
		'nameOfProd' : nameOfProd,
		'count' : count,
		'isBought' : isBought,
	};
	return (someProd);
}


let shoppingPlan = [
	shoppingItem('Bread', 1, 'yeap'),
	shoppingItem('Milk', 1, 'nope'),
	shoppingItem('Hamsters', 3, 'yeap'),
]

function compare(a, b) {
  	if ((a['isBought'] = 'yeap') && (b['isBought'] = 'nope')) return 1;
  	if ((a['isBought'] = 'yeap') && (b['isBought'] = 'yeap')) return 0;
 	if ((a['isBought'] = 'nope') && (b['isBought'] = 'nope')) return 0;
 	if ((a['isBought'] = 'nope') && (b['isBought'] = 'yeap')) return -1;
}
shoppingPlan.sort(compare)


function add (nameOfProd, count, isBought) {
	/* Можно добавлять только желаемые товары - при наличии других желаемых,
	 или купленные товары - при наличии купленных, или же добавлять любые при
	 отсутсвии этого товара в списке вообще */
	for (let i = 0; i<shoppingPlan.length; i++) {
		if (nameOfProd === shoppingPlan[i].nameOfProd) {
			shoppingPlan[i].count += count;
			return;
		}
	}
	shoppingPlan.push(shoppingItem(nameOfProd, count, isBought));
}

function buyProd (nameOfProd) {
	for (let i = 0; i < shoppingPlan.length; i++) {
		if (nameOfProd === shoppingPlan[i].nameOfProd) {
			shoppingPlan[i].isBought = 'yeap';
		}
	}
}