function printName(name, age) {
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
}

printName("Sean", 21);

const createGreeting = function(name, age) {
  return `Hi, my name is ${name} and I'm ${age} years old`;
};

console.log(createGreeting("Morgan", 22))
