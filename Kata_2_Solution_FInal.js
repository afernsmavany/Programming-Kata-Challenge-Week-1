const conditionalSum = function(values, condition) {
  let finalValues = 0;
   
  if (condition === "even") {
    for (let i = 0; i <= values.length - 1; i++) {
      if (values[i] % 2 === 0) {
        finalValues += values[i];
      }
    }
    return finalValues;
  } else if (condition === "odd") {
    for (let x = 0; x <= values.length - 1; x++) {
      if (values[x] % 2 === 1) {
        finalValues += values[x];
      }
    }
    return finalValues;
  } else
    finalValues = 0;
};



console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));