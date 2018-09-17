showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "Even" : "Odd";
    console.log(i, message);
  }
}

//COMPARE VALUES OF NUMBERS

function compareNumbers(value1, value2) {
  if (typeof value1 || typeof value2 !== "number") return "NaN";
  else return value1 === value2 ? "Jinx!!" : value2 > value1 ? true : false;
}

console.log(compareNumbers("hi", 5));
