let number = prompt('Укажите, пожалуйста, трехзначное число', '123'),
a = String(number%10),
b = String(Math.floor((number%100)/10)),
c = String(Math.floor(number/100));

alert (a + b + c)