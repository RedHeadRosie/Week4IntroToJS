const addressA = {
  street: "Fish Hook Loop",
  houseNumber: "32351",
  city: "Wesley Chapel, FL", 
  zipCode: "33545,",
  country: "USA"
};

const favThings = [
  "cats", 
  "walking",
  "cars"
];

const person = {
  name: "Brett",
  type: "human",
  age: 36,
  address: addressA.houseNumber + " " + addressA.street + " " + addressA.city + " " + addressA.zipCode + " " + addressA.country,
  favoriteThings: favThings
};

console.log("The person's name is " + person.name + ".");
console.log("They are " + person.age + " years old and are a " + person.type + ".");
console.log("Their address is " + person.address + ".");
console.log("Their favourite things are " + person.favoriteThings[0] + ", " + person.favoriteThings[1] + " and " + person.favoriteThings[2] + ".");