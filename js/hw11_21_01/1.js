let obj = {
	a = 1,
	b = 2,
	c = hello,
};
console.log(obj['b']);
console.log(obj.b);

obj ['new b'] = 'Любое значение';
obj.a = obj ['new b'];
delete obj['new b'];