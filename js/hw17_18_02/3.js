function sec () {
	let now = new Date();
	let sum = now.getSeconds()+now.getMinutes()*60+now.getHours()*60*60;
	console.log(sum);
}
sec()