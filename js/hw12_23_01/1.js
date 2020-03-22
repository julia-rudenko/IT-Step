let arr = [];
arr.push('Apple', 'Pineapple');
console.log (arr[1]);
for (let i = 0; i<arr.length; i++) {
	console.log (i, arr[i], 'arr')
}
arr.splice(-1,1);