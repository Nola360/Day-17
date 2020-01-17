

// ES6 CLASSES
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  // Method
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName} you're a big piece of dog shit!`
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1916);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}




const tony = new Person('Tony', 'Taressi', 'April 1, 1916');

tony.getsMarried('Sheffield')
console.log(Person.addNumbers(1, 4));
console.log(tony.calculateAge());

