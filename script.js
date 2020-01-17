// Person construnctor 

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Penny', 'Kandy');

console.log(person1.greeting());


// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  // Call() allows another function to be called in context
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}



// Inherit Person prototype methods
Customer.prototype = Object.create(Person.prototype);



// Make customer.prototype return customer() instead of person()
Customer.prototype.constructor = Customer;



// Create customer
const customer1 = new Customer('Test', 'Averti', '555-555-5555', 'Standard');

console.log(customer1);

// Customer greeting
Customer.prototype.customerGreeting = function () {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our business!`
}



console.log(customer1.customerGreeting());


