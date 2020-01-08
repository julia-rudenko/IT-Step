let cash = prompt('Укажите, пожалуйста, сумму денег', '20'),
price = prompt('Цена одной шоколадки', '15');

alert ('Вы сможете купить ' + Math.floor(cash/price) + ' шоколадок, у вас останется ' + (cash%price))