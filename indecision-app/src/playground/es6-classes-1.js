// Setup constructor to take anme and age (default age to 0)
// getDescription - return a string with a persons age (Name is Age year(s) old.)

class Person {
	constructor(name = 'Anon', age = 0) {
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		return `Hi. I am ${this.name}, and you are a bitch.`
	}
	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	} 
	getDescription() {
		let description = super.getDescription();
		
		if(this.hasMajor) {
			description += ` Their major is ${this.major}`;
		}

		return description;
	}
}

class Traveler extends Person {
	constructor(name, age, major, home) {
		super(name, age, major);
		this.home = home;
	}

	hasHome() {
		return !!this.home;
	}

	getGreeting() {		
		let greeting = super.getGreeting();
		if (this.hasHome) {
			greeting += ` I hail from ${this.home} because I'm a quare!!`;
		}

		return greeting;
	}
}

// Traveler -> Person
// Add support for homeLoaction
// Override getGreeting()
// 1. Hi. I am Andrew Mead. I'm visiting from HomeLocation.
// 2. Hi. I am Andrew Mead.

const me = new Student('Seth', 30, 'Madison', 'Coontown');
console.log(me.getDescription());

const anon = new Traveler();
console.log(anon.getGreeting());