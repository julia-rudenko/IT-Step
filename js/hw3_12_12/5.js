let number = prompt('Укажите, пожалуйста, пятизначное число', '19991');

if ( ((Math.floor(number/10000)) == (number%10)) && 
	( (Math.floor((number%10000)/1000)) == (Math.floor((number%100)/10)) ))
	{
	alert('Полиндром')
	}
else {
	alert('Не полиндром')
}