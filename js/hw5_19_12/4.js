let a = prompt('Укажите, пожалуйста, число', '10');
let res = 1;

while (Math.floor(a/10)!=0) {
	a=Math.floor(a/10);
	res+=1
}
alert(res)