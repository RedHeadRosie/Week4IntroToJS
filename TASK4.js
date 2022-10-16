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
  age: 21,
  address: addressA.houseNumber + " " + addressA.street + " " + addressA.city + " " + addressA.zipCode + " " + addressA.country,
  favoriteThings: favThings
};

const dog = {
  name: "Kirby",
  age: 2,
  type: "dog"
};


let value = Math.floor(Math.random() * 10);
console.log("the random number is " + value); //picks a random number to decide the type

if(value < 5){
  type = "dog";
} else { type = "human"}; //if the random number is less than 5, type is dog, otherwise it'll be a human
console.log("the type chosen this time is " + type);

function humanToDogCalculator(){
  //let humanAge = 21; 
  console.log("The human's original age is: " + person.age);
  console.log("The human's age in dog years is: " + person.age / 7);
  };

function dogToHumanCalculator(){
  //let dogAge = 3; 
  console.log("The dog's original age is: " + dog.age);
  console.log("The dog's age in human years is: " + dog.age * 7);
  };

function dogHumanCalc(){
  if (type = "dog"){
    dogToHumanCalculator(); //calls function for finding the dogs age in human years
  }
  else {
    humanToDogCalculator(); //calls function for finding the humans age in dog years
  }
};
dogHumanCalc();



//humanToDogCalculator();
//dogToHumanCalculator();
//console.log("Their original age is: ");
//console.log("Age of dog in human years is " + dogToHumanCalculator());
//console.log("Age of person in dog years is " + humanToDogCalculator());