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
        longestStr = element; //replace longestStr with current element if it is longer
    }
    return longestStr; //return longest string after iterating through all elements in array
}

console.log(`\nTake an array of strings and return the longest string`);
Array2 = ["Patagonias","Argentina", "Paraguay", "Chile", "Brazil"]; //array of strings to be compared for longest string
console.log(`Longest string:`);
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

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
function stringsLongerThan(arr, length){
  //return a filted array       //condtion to be included in the filtered array
  return arr.filter( (element)=> element.length>length );
}
console.log(`\nTake an array of strings, and a number and return an array of the strings that are longer than the given number`)
console.log(`When we want only strings longer than 7 characters, our new array is: `)
console.log(stringsLongerThan(Array2, 7));



console.log(`\nTake a number, n, and print every number between 1 and n` )
function printNumbers(endNumber, currentNumber=1){ //default second paramter set to 1, bc we want to start counting up from 1

    //base case when we reach end num, just print it
    if(currentNumber===endNumber){
      console.log(endNumber);
      return
    }
    //recursive call, print out current number then call it again with currentnumer +1 to replace the default of 1 to do the counting up
    console.log(currentNumber)
    return printNumbers (endNumber,currentNumber+1);
       
}
printNumbers(20); // Prints all #s between 1 and 20, inclusive. 
console.log() // Takes a #, n, and prints every # btwn 1 and n(20) in order.

console.log(`Part 2: Thinking Methodically`)
let data1 = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

//Convert the Age property into # for easier usage with .sort() function. 
data2 = data1.map( // usage of .map function to go through ea/element in array and modify f(x)s provided.
 
  //arrow f(x) converts each age value into #. Give back/return modified dataObject back into array
  (dataObject)=> { 
    dataObject.age = Number(dataObject.age)
    return dataObject
  }
);

console.log(`Beginning Table: `)
console.table(data1)

//Sort data Array by age 
data1.sort((a,b)=>  b.age-a.age); //Age sorting, descending order. 


console.log(`\nSorted by Age Descending Category: `);
console.table(data1);

//Removing entries age > 50 yrs age.
console.log(`\nNo Ages > 50: `);
data2 = data1.filter((dataObject)=> dataObject.age<50); //Creates a filter, allows only < 50 yrs age
console.table(data2);


//Maps data array, modifies “occupation” to “job”, +1 age increment.
data2 = data2.map( (dataObject)=>{
  dataObject["job"]= dataObject["occupation"]//Property job = value occupation
  delete dataObject['occupation']//removes duplicate property occupation
  dataObject.age = dataObject.age+1 //+1 to age value 
  return dataObject //return modifed age and new job property back into array
}
);
console.log(`\nChanges “occupation” propety to “job” and age increases by 1`);
console.table(data2);

//Reduce method, calculating sum of the ages and finding avg of ages in data array.
let avgAge = data2.reduce((accumulator ,currentObject)=>{return accumulator+currentObject.age},0)/data2.length;
console.log(`\nAvg age array people is ${avgAge.toFixed(2)} years`);