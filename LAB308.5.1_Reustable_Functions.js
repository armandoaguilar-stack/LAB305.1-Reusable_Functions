console.log(`Part 1: Thinking Functionally \n`);

//Take an array of #s and return the sum.
function sumArray(arr) {
 
  return arr.reduce(
    //fucntion that is beign carried out to sum all the elements in the array
    (sum, currentNumber) => {
      return sum += currentNumber;
    },
    0 //inital value is 0 
  );
}
array1 = [5,10,15,20,25];
console.log(`Take an array of numbers and return the sum.`)
console.log(array1);
console.log(`The sum of the numbers is ` + sumArray(array1));

