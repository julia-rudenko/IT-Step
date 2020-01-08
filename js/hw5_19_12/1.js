let first = prompt('Укажите, пожалуйста, начальное число ', '1'),
last = prompt('Укажите, пожалуйста, конечное число ', '10');
let sum = 0;

for (let i = first; i <= last; i++) {
	sum+=Number(i)
}
alert(sum)