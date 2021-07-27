 const numbers = [1,2,3,4,5,6,7,8,9];
//  const number1 = numbers.slice(1,8);
const number1 = numbers.splice(1,4,34,56,78,90);
 
 console.log(number1);
 console.log(numbers);
 const tog = numbers.join(",");
 console.log(tog);
