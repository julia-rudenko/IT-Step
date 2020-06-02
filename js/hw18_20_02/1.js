class Circle {
	radius;
	getRadius() {
		return this.radius;
	}
	setRadius(radius) {
		this.radius = radius;
	}
	getDiameter() {
		return this.radius*2;
	}
	area() {
		return Math.PI*this.radius*this.radius;
	}
	perimeter() {
		return 2*Math.PI*this.radius;
	}
}
let vasia = new Circle();
vasia.setRadius(2);
vasia.getRadius();
vasia.getDiameter();
vasia.area();
vasia.perimeter();