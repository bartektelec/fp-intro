/* Example
 Create a function `multiplyBy` that takes 1 argument - multiplier and returns a FUNCTION
 the returned function should allow to multiply its argument by the multiplier provided in `multiplyBy()` function

 How the multiplyBy function will be used:
 const multiplyByTwo = multiplyBy(2);
 const multiplyByHundred = multiplyBy(100);
 
 multiplyByTwo(10); -> returns 20;
 multiplyByHundred(2); -> returns 200;
*/
const multiplyBy = (multiplier) => (number) => number * multiplier;

module.exports = multiplyBy;
