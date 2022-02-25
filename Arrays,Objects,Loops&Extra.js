// Additional assignments for Day 4

const displayExercise = (n) => {
    console.log("                                                                                                                                                  ");
    console.log("*************************************************** Exercise-"+n+" *******************************************************************");
    console.log("                                                                                                                                                  ");
}
/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

displayExercise(1);

let arr = [10, 15, 20, 25, 30, 35]

console.log("Original Array is: ",arr)
const reverseArray = (inputArray)=> {
    let reverseResult = new Array;
    for (i = (inputArray.length-1); i>=0; i--){
        reverseResult.push(inputArray[i]);
    }
    return reverseResult;
}

let reversedArray = reverseArray(arr);
console.log("The reversed array is: ",reversedArray);

/************************************************************************************************************************/

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

displayExercise(2);

// let maxInArr = Math.max(...arr);
// console.log(`Maximum numberical value in the given array:, ${arr} is: ${maxInArr}`);

const findMax = (inputArray) =>{
    let maxInArr = inputArray[0];
    for(let i=1;i<inputArray.length;i++){
        if(inputArray[i] > maxInArr){
            maxInArr = inputArray[i];
        }
    }
    console.log(`Maximum numerical value in the given array, [${inputArray}] is: ${maxInArr}`);
    return maxInArr;
   
}
let unsortedArr = [20, 15, 30, 10];
findMax(arr);
findMax([20, 25, 30, 40]);
findMax(unsortedArr)

/************************************************************************************************************************/

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

displayExercise(3);

// let minInArr = Math.min(...arr);
// console.log("Minimum number in Array: "+minInArr);

const findMin = (inputArray) =>{
    let minInArr = inputArray[0];
    for(let i=1;i<inputArray.length;i++){
        if(inputArray[i] < minInArr){
            minInArr = inputArray[i];
        }
    }
    console.log(`Minimimum numerical value in the given array, [${inputArray}] is: ${minInArr}`);
    return minInArr;
   
}
findMin(arr);
findMin([20, 25, 30, 40]);
findMin(unsortedArr)

/************************************************************************************************************************/

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

displayExercise(4);

const evensInArray = (inputArray) => {
let evens = [];
inputArray.forEach(arrayElement => {
    if(typeof arrayElement === "number" && arrayElement%2 === 0){
        evens.push(arrayElement);
    }
})
console.log("Even numerical values in the given array,",inputArray," are: ",evens);
}
evensInArray(arr);
evensInArray(["Anusha",24,12.6,22,256,"Cherukuri"]);

/************************************************************************************************************************/

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

displayExercise(5);

const deleteEvenEntries = (inputArray) => {
    for (let i = 0; i < inputArray.length; i++) {
        if (typeof inputArray[i] === "number" && inputArray[i] % 2 === 1) {
          inputArray.splice(i, 1);
          i--; 
        } 
    }
    console.log("After deleting even entries in the given array, the result array is: ",inputArray.join());
}
let arr2 = [1,2,3,4,5,6];
deleteEvenEntries(arr2);

// let arr2 = [1,2,3,4,5,6];
// let oddEntries = deleteEvenEntries(arr2);
// console.log("After deleting even entries in the given array,",arr2," is: "+oddEntries);
// let del1 = deleteEvenEntries(arr);
// console.log("After deleting even entries in the given array: ", del1);
/************************************************************************************************************************/

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/
displayExercise(6);
let str = "Anusha";
let strArray = ["Anusha", "Cherukuri", "Strive", "School"];


const removeVowel = (inputString) => {
    let noVowelString = inputString.split('');
    for (let x = 0; x < inputString.length; x++) {
      let char = inputString[x].toLowerCase();
      if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        noVowelString[x] = '';
      }
    }
    console.log(`After removing vowels from the given string, ${inputString}: ${noVowelString.join('')}`);
  }

removeVowel("Anusha");

/************************************************************************************************************************/

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/
displayExercise(7);
const increaseCount = (inputArray) => {
    let count = new Array;
    for(i=0; i<inputArray.length; i++) {
        if(typeof(inputArray[i]) == 'number') {
            count[i] = inputArray[i] + 1;
        }
    }
    console.log(`Given Array: [${inputArray}]`);
    console.log(`Result Array after adding '1' to the given array: [${count}]`);
}
numArray = [1,2,3,4];
increaseCount(numArray);

/************************************************************************************************************************/

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/
displayExercise(8);

const stringlength = (inputStringArr) => {
    let resultArray = new Array;
        for(i=0; i<inputStringArr.length-1; i++) {
            if((typeof(inputStringArr[i]) === 'string')){
               resultArray.push(inputStringArr[i].length); 
            }
            console.log(`${inputStringArr[i]}: ${inputStringArr[i].length}`)
    }
    return resultArray;
    }
console.log(stringlength(strArray));
