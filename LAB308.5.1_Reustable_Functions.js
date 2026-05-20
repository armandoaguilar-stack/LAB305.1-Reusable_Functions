console.log(`Part 1: Thinking Functionally \n`);

//Take an array of #s and return the sum.
function sumArray(arr) {
 
  return arr.reduce(
    //fucntion that is beign carried out to sum all the elements in the array
    (sum, currentNumber) => {
      return sum += currentNumber; // total in array and current # is added to sum and returned
    },
    0 //inital value is 0 
  );
}
array1 = [5,10,15,20,25]; //array of numbers to be summed sample
console.log(`Take an array of numbers and return the sum.`) 
console.log(array1);
console.log(`The sum of the numbers is ` + sumArray(array1)); //call sum f(x) and print results 

// Take an array of numbers and return the average
function avgArray(arr){
  return (sumArray(arr)/arr.length) //reuse the sumArray f(x)  and / by # of elements
};

console.log(`\nTake an array of numbers and return the average:`);
console.log(array1);
console.log(`The avg of that array is ` + avgArray(array1)); // call avg f(x) and print results

//Take an array of strings and return the longest string available 
function longestString(arr){
   let longestStr = "";//varibale to keep track of longest elements available   


   //iterating through all array values in data set to compare length of each element to longestStr and replace if longer
    for (let element of arr){
      if(element.length>longestStr)  //if current array value is longer, repalce longestStr with current element
        longestStr = element;
    }
    return longestStr;
}

console.log(`\nTake an array of strings and return the longest string`);
Array2 = ["Patagonias","Argentina", "Paraguay", "Chile", "Brazil"]; //array of strings to be compared for longest string
console.log(`The longest string in:`);
console.log(Array2)
console.log(`is ${longestString(Array2)}`)

// Array of strings, and #, return strings that are longer than the given #. 
function stringsLongerThan(arr, length){
  //return a filted array       //condtion to be included in the filtered array 
  return arr.filter( (element)=> element.length>length );
}

console.log(`\nTake an array of strings, #, and return strings longer than the given number`)
console.log(`Strings longer than 7 characters, our new array is: `)
console.log(stringsLongerThan(Array2, 7)); // printing results of functions 