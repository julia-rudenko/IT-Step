let obj = {
	hours: 2,
	min: 3,
	sec: 5
};

function output (obj) {
	alert (obj.hours +':'+obj.min+':'+obj.sec);
}

function plusSec (obj, n) {
	obj.sec = obj.sec+n;
	rightTime (obj);
}

function plusMin (obj, n) {
	obj.min = obj.min+n;
	rightTime (obj);
}

function plusHour (obj, n) {
	obj.hours = obj.hours+n;
	rightTime (obj);
}



function rightTime (obj) {
	obj.min = Math.floor(obj.sec/60)+obj.min;
	obj.sec = obj.sec%60;
	obj.hours = Math.floor(obj.min/60)+obj.hours;
	obj.hours = obj.hours%24;
}