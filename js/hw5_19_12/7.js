let num = prompt('Укажите, пожалуйста, число', '123'),
count = Number(prompt('Укажите, пожалуйста, на сколько цифр его сдвинуть', '1'));
let first_part = num.slice(0, count),
let second_part = num.slice(count);

alert(second_part + first_part)