class Children {
	name;
	surname;
	age;
	setName(name) {
		this.name = name;
	}
	consName() {
		console.log(this.name);
	}
	setSurname(surname) {
		this.surname = surname;
	}
	consSurname() {
		console.log(this.surname);
	}
	setAge(age) {
		this.age = age;
	}
	consAge() {
		console.log(this.age);
	}
}
let mikhail = new Children();
mikhail.setName('Mikhail');
mikhail.setSurname('Zubenko');
mikhail.setAge('1');
let vitaliy = new Children();
vitaliy.setName('Vitaliy');
vitaliy.setSurname('Nalivkin');
vitaliy.setAge('2');

mikhail.consSurname();
mikhail.consName();
mikhail.consAge();
vitaliy.consName();
vitaliy.consSurname();
vitaliy.consAge();