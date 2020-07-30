class News {
	text = '';
	date;
	tags = [];
}
class Feed {
	arr = [];
	getCount() {
		return this.arr.length;
	}
	writeAll() {
		for (let i=0; i<this.arr.length; i++) {
			console.log(this.arr[i].text);		
		}
	}
	addNews(news) {
		this.arr.push(news);
	}
	delNews(index) {
		this.arr.splice(index, 1);
	}
	compareNews(news1, news2) {
		if (news1.date.getTime() < news2.date.getTime()) {
			return 1;
		}
		else if (news1.date.getTime() > news2.date.getTime()) {
			return -1;
		}
		else {
			return 0;
		}
	}
	sortNews() {
		this.arr.sort(this.compareNews);
	}
	findTag(tag) {
		let res = [];
		for (let i = 0; i<this.arr.length; i++) {
			if (this.arr[i].tags.includes(tag)) {
				res.push(this.arr[i]);
			}
		}
		return res;
	}
}
let news1 = new News();
let news2 = new News();
let news3 = new News();
news1.text = 'Первая в Европе. В Черногории официально подтвердили конец эпидемии коронавируса';
news2.text = 'Вспышка коронавируса. В ФК "Карпаты" заболела почти половина членов клуба';
news3.text = 'Коронавирус. Киев и семь областей не готовы к ослаблению карантина - Минздрав';
news1.date = new Date(2020, 6, 25);
news2.date = new Date(2020, 5, 15);
news3.date = new Date(2020, 6, 13);
news1.tags = ['Европа', 'коронавирус'];
news2.tags = ['коронавирус', 'Вспышка'];
news3.tags = ['коронавирус', 'Киев'];
let feed = new Feed();
feed.addNews(news1);
feed.addNews(news2);
feed.addNews(news3);
// feed.getCount();
// feed.writeAll();

// feed.delNews(0);
// feed.writeAll();

// feed.sortNews();
// feed.writeAll();

// feed.findTag('Киев');