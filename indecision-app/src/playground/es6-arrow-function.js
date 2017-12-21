const square = function (x) {
	return x * x;
};

const squareArrow = (x) => {
	return x * x;
};

console.log(square(5));
console.log(squareArrow(5));

const getFirstName = (name) => {
	return name.split(' ')[0];
};

const shortHandName = (name) => name.split(' ')[0];

console.log(getFirstName('Tom Barthen'));
console.log(shortHandName('Brad Barthen'));

// arguments object - no longer bound with arrow functions
const add = (a, b) => {
	return a + b;
};
console.log(add(1,2));

// this keyword - no longer bound
const user = {
	name: 'Seth',
	cities: ['Madison', 'Chicago', 'Boston'],
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city);
		console.log(this.name);
		console.log(this.city);
	}
}

console.log(user.printPlacesLived());


// Challenge Area

const multiplier = {
	numbers: [1, 2, 3, 4, 5],
	multiplyBy: 3,
	multiply() {
		return this.numbers.map((num) => num * this.multiplyBy);
	}
};

console.log(multiplier.multiply());