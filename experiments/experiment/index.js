const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const anotherPerson = {
  firstName: "Jane",
  lastName: "Smith"
};

console.log(person.fullName()); // Output: "John Doe"

// Using call to invoke the function with a specific context
const fullNameWithCall = person.fullName.call(anotherPerson);
console.log(fullNameWithCall); // Output: "Jane Smith"

// Using apply to invoke the function with an array of arguments
const fullNameWithApply = person.fullName.apply(anotherPerson);
console.log(fullNameWithApply); // Output: "Jane Smith"

// Using bind to create a new function with a fixed context
const boundFullName = person.fullName.bind(anotherPerson);
console.log(boundFullName()); // Output: "Jane Smith"
