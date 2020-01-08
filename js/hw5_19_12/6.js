let d;
do {

let a = Number(prompt ('Введите, пожалуйста, первое число', '10')),
b = Number(prompt ('Введите, пожалуйста, второе число', '5')),
c = prompt ('Введите, пожалуйста, знак', '-');

switch (c) {
	case '-': alert(a-b);
	break;
	case '+': alert(a+b);
	break;
	case '*': alert(a*b);
	break;
	case '/': alert(a/b);
	break;
}
	d = prompt('Хотите ли вы решить еще один пример?(Да/Нет)', 'Нет');
} while (d='Да')