const add = function(num1, num2) {
  let sum = num1 + num2;
  return sum;
};

const subtract = function(num1, num2) {
	let difference = num1 - num2;
  
  console.log(difference);
  return difference;
};
/**
 * @param sumArray - an array that holds numbers that will be added to one another
 * @returns - we are returning the sum of the numbers we added together from sum array
 * 
 */
const sum = function(sumArray) {
  let total = 0;
  for ( let i = 0; i < sumArray.length; i++){
    total = total + sumArray[i];
  }
  return total;
};

const multiply = function(multiple) {
  let product = 1;
  for (let i = 0; i < multiple.length; i++){
    product *= multiple[i];
  }
  return product;
};

const power = function(num1, num2) {
	let exponential = Math.pow(num1, num2);
  return exponential;
};

const factorial = function(num1) {
	let factor = 1;
  if (num1 == 0){
    factor = 1;
  }
  for (let i = 1; i <= num1; i++){
    factor *= i;
  }
  return factor;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
