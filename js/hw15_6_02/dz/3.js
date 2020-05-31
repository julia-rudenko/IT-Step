function url1 (s) {
	arr = s.split('://');
	let prot = arr [0];
	let slash = arr[1].indexOf('/');
	let dom = arr[1].substring(0,slash);
	let path = arr[1].substring(slash);
	return 'протокол: '+prot+', домен: '+dom+', путь: '+path;
}
url1 ('https://itstep.org/ua/about')