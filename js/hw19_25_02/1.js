class Marker {
	constructor(color) {
		this.percent = 100;
		this.color = color;
	}
	write(text) {
		let res = '';
		for (let i = 0; i<text.length; i++) {
			if (text[i] != ' ') {
				this.percent -= 0.5;
			}
			if (this.percent > 0) {
				res+=text[i];
			}
		}
		console.log('%c' + res, 'color:' + this.color);
	}
}
let marker1 = new Marker('#cecece');
marker1.write('hello guys lshdflZHGDv?ZGEFwl;sdkfc;aslc,f;skgv;lsjbk;sjzdjkcksnhvklshdvgjhvnlskdljvm .zmv kdsjlkhsdlbkhidfghidxfvls;dvml.dmv lsdbjdfhvjck,lx,kdmcfnhghdjklskdjfhghjdklszdkjfhgfjkdls;dlfkjghjfkdls;ldkcfjhgjfkdls;ldkfcgvjhjvfkdls;ldkcfjvgnh yes');
class RefMarker extends Marker {
	refuel() {
		this.percent = 100;
	}
}
let marker2 = new RefMarker('#cecece');
marker2.write('hello guys lshdflZHGDv?ZGEFwl;sdkfc;aslc,f;skgv;lsjbk;sjzdjkcksnhvklshdvgjhvnlskdljvm .zmv kdsjlkhsdlbkhidfghidxfvls;dvml.dmv lsdbjdfhvjck,lx,kdmcfnhghdjklskdjfhghjdklszdkjfhgfjkdls;dlfkjghjfkdls;ldkcfjhgjfkdls;ldkfcgvjhjvfkdls;ldkcfjvgnh yes');