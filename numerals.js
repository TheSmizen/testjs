const NUMERAL_NUMBERS = {
  //Fun if hacky: add your prefixes(IV, IX, XL, XC, CD, CM) as special cases here and your functions can be written very elegantly.
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};
const numerals = (forNumber) => {
  let returnVar = "";
  numeralsArrayRev = Object.keys(NUMERAL_NUMBERS).reverse(); //  Start with the highest value numeral, and go down
  for (let numeralIter in numeralsArrayRev) {
    let numeral = numeralsArrayRev[numeralIter];
    let number = NUMERAL_NUMBERS[numeral];
    let timesToRepeat = Math.floor(forNumber / number);
    returnVar = returnVar + numeral.repeat(timesToRepeat); //  Add on the right
    forNumber = forNumber - number * timesToRepeat; //  You've added the characters for this numeral, now get rid of what you've added
  }
  return returnVar;
};
const numbers = (forNumeral) => {
  let inputNumeral = forNumeral; //Keep a record of this
  let returnVar = 0;
  numeralsArrayRev = Object.keys(NUMERAL_NUMBERS).reverse(); //  Start with the highest value numeral, and go down
  for (let numeralIter in numeralsArrayRev) {
    let numeral = numeralsArrayRev[numeralIter];
    let number = NUMERAL_NUMBERS[numeral];
    let nextChars = forNumeral.slice(0, numeral.length); // if numeral is multi-character e.g. "CD", pull the first N chars from forNumeral to compare where N is the numeral length.
    while (nextChars === numeral) {
      returnVar += number;
      forNumeral = forNumeral.slice(numeral.length, forNumeral.length);
      nextChars = forNumeral.slice(0, numeral.length);
    }
  }
  if (forNumeral.length > 0) {
    throw new Error("Oops! You gave an invalid string.");
  }
  if (numerals(returnVar) != inputNumeral) {
    //MCMDCDXCLXLXIXVIVI would be valid without this check
    throw new Error("Oops! That numeral was nearly valid. Cheeky.");
  }
  return returnVar;
};
//Exports:
module.exports = { numerals, numbers };
