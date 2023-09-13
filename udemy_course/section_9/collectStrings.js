/*
    Write a function called collectStrings 
    which accepts an object and returns an 
    array of all the values in the object 
    that have a typeof string
*/

const collectStrings = (obj) => {
  const result = [];

  function helper(innerObj) {
    for (const [key, value] of Object.entries(innerObj)) {
      if (typeof value === "object") {
        helper(value);
      } else if (typeof value === "string") {
        result.push(value);
      }
    }
  }

  helper(obj);

  return result;
};

function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
    for (var key in o) {
      if (typeof o[key] === "string") {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === "object") {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}

const test = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(test));
