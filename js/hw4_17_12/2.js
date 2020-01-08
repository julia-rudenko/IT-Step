let sum = prompt('Укажите, пожалуйста, сумму покупки', '250');

if ((sum>=200) && (sum<=300)) {
	alert(sum-(sum*0.03))
}
else if ((sum>300) && (sum<=500)) {
	alert(sum-(sum*0.05))
}
else if (sum>500) {
	alert(sum-(sum*0.07))
}
else {
	alert(sum)
}
