const ftoc = function(number) {
let answ;
  const celsius = ((number - 32)*(5/9));
   answ = Math.round(celsius * 10) / 10;
  // i have no idea why this works but it does
  return answ;
};

const ctof = function(number) {
  let answ;
  const farenheit = ((number*(9/5)) + 32);
  answ = Math.round(farenheit * 10) / 10;
  return answ;
};

module.exports = {
  ftoc,
  ctof
};

// idk just have the equals of far and the other temp whatever then 
// multiply whatever times whatever to equal new temp
// equal that new temp to a new var
