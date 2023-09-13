/*
    Write a function called stringifyNumbers which 
    takes in an object and finds all of the values 
    which are numbers and converts them to strings. 
    Recursion would be a great way to solve this!
*/

const stringifyNumbers = (obj) => {
  const result = {};

  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && !Array.isArray(obj[key])) {
      result[key] = stringifyNumbers(value);
    } else if (typeof value === "number") {
      result[key] = value.toString();
    } else {
      result[key] = value;
    }
  }

  return result;
};

function stringifyNumbers1(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      // Вот тут важный момент, чтобы не просто прокидывать новое свойство
      // в копию объекта надо в копию объекта передать текущий ключ
      newObj[key] = stringifyNumbers1(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let test = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
      calc: {
        nice: 4,
      },
    },
  },
};

const result = stringifyNumbers(test);
console.log(typeof result.data.info.calc.nice);
