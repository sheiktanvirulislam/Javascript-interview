const numbers = [1,2,3,4,5,6];
const square = num => num*num;
const num2 = numbers.map(square);
console.log(num2);
const result = numbers.filter(x => x%2 == 0);
console.log(result);