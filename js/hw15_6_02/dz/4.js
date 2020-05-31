function data (inp, sep) {
	let res = [];
	while (inp.indexOf(sep) != -1) {
		let slash = inp.indexOf(sep);
		let part1 = inp.substring(0,slash);
		let part2 = inp.substring(slash+1);
		inp = part2;
		res.push(part1);
	}
	res.push(inp);
	return res;
}
data ('10/08/2020', '/')