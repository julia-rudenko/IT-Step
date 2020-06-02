class CssClass {
	name;
	styles = [];
	addStyle(style) {
		this.styles.push(style);
	}
	delStyle(style) {
		let index = this.styles.indexOf(style);
		if (index > -1) {
			this.styles.splice(index, 1);
		}
	}
	getCss() {
		let a = '.' + this.name + ' {';
		for (let i = 0; i<this.styles.length; i++) {
			a += this.styles[i] + '; ';
		}
		a += '}';
		return a;
	}
}
let class1 = new CssClass();
class1.name = 'class1';
class1.addStyle('background-color: powderblue');
class1.addStyle('color: blue');
class1.getCss();