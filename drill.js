function printName(name, age) {
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
}

// printName("Sean", 21);

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

const beyond = function(num) {
  if(num === Infinity) {
    console.log("And beyond");
  } else {
    // finite numbers
    if(num > 0) {
      // +
      console.log("To infinity");
    } else if(num < 0) {
      // -
      console.log("To negative infinity");
    } else {
      // 0
      console.log("Staying home");
    }
  }
  return;
};

// try {
//   console.log( beyond(Infinity));
// } catch(err) {
//   console.log(err);
// }

const jediName = function(first, last) {
  return last.slice(0, 3) + first.slice(0, 2);
};

// console.log(jediName('Beyonce', 'Knowles'));
// console.log(jediName('Jet', 'Li'));
// console.log(jediName('Le', 'Li'));
// console.log(jediName('ndksaklndsnkalda', 'A'));



const decodeWord = function(codeWord) {
  switch(codeWord[0]) {
    case 'a':
      return codeWord[1];
    case 'b':
      return codeWord[2];
    case 'c':
      return codeWord[3];
    case 'd':
      return codeWord[4];
    default:
      return ' ';
  }
};

const decode = function(sentence) {
  // split to an array of words
  let words = sentence.split(' ');
  // decodeWord on each word
  return words.reduce((message, word) => {
    return message + decodeWord(word);
  }, '');
};

const constructMonthMap = function() {
  const months = [];
  let dict = {};
  for(const [i, month] of months.entries()) {
    dict[month] = i;
  }
  return dict;
};

// console.log(decodeWord('mouse'));
// console.log(decodeWord('cycle'));

// console.log(decode('craft block argon meter bells brown croon droop'));

const daysInMonth = function(monthStr, leapYear=false) {
  let days = 0;
  switch(monthStr) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      days = 31;
      break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      days = 30;
    case 'February':
      if(leapYear) {
        days = 29;
      } else {
        days = 28;
      }
      break;
  }
  return `${monthStr} has ${days} days`;
};

// console.log(daysInMonth("December"));


const rockPaperScissors = function(handSign) {
  if (handSign !== 1 && handSign !== 2 && handSign !== 3) {
    throw new Error('Invalid argument. Please enter a number between 1 and 3.');
  }

  const computerMove = Math.floor(Math.random() * 3) + 1;
  console.log(`The computer played: ${computerMove}`);
  if (handSign === computerMove) return 'Tie!';
  switch (handSign) {
  // Case 1: beats 3, loses to 2
    case 1:
      if (computerMove === 3) return 'You win!';
      else return 'You lose!';
  // Case 2: beats 1, loses to 3
    case 2:
      if (computerMove === 1) return 'You win!';
      else return 'You lose!';  
    // Case 3: beats 2, loses to 1
    case 3:
      if (computerMove === 2) return 'You win!';
      else return 'You lose!';
  }
};

try {
  console.log(rockPaperScissors(1)); // Rock
  console.log(rockPaperScissors(2)); // Paper
  console.log(rockPaperScissors(3)); // Scissors
  // console.log(rockPaperScissors(5));
}
catch(e) {
  console.log(e);
}