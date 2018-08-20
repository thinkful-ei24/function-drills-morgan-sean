function printName(name, age) {
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
}

printName("Sean", 21);

const getYearOfBirth = function(age) {
  if(age < 0) {
    throw new Error("Age cannot be negative");
  }
  return (new Date()).getFullYear() - age;
};

const createGreeting = function(name, age) {
  if (name === undefined || age === undefined) {
    throw new Error('Arguments not valid');
  }
  if (typeof age != "number") {
    throw new TypeError("Age must be a number");
  }
  const birthYear = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old.\nI was born in ${birthYear}`;
};

try {
  const response = createGreeting("Morgan", 22);
  console.log(response);
} catch(err) {
  console.log(err);
}
