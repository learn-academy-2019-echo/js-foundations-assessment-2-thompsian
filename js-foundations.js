// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".

var inputNumber = -7
const divByThree = (inputNumber) => {
  if (inputNumber % 3 === 0) {
    return inputNumber + ' is divisible by three'
  }
  else if (inputNumber % 3 !== 0){
    return inputNumber + ' is not divisible by three'
  }
  else {
    return 'Unexpected Input'
  }
}

console.log(divByThree(inputNumber))

// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

var helloMe = { firstName: "Ian", lastName: "Thompson", age: 34 ,sex: "male" }
const outputInfo = (helloMe) => {
  let sentence = helloMe.firstName + ' ' + helloMe.lastName +' is a ' + helloMe.age + ' year old ' + helloMe.sex
  return sentence
}

console.log(outputInfo(helloMe))



// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"

const everyOther = (randomNouns) => {
  let newString = ''
  for (let i=0 ; i<randomNouns.length ; i++){
    if (i % 2 === 0){
      newString += randomNouns[i] +' '
    }
  }
  return newString
}

console.log(everyOther(randomNouns))

// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const firstCap = (item , index , arr) => {
  let firstLetter = item.charAt(0)
  let capitalFirst = firstLetter.toUpperCase()
  let restOfWord = item.slice(1,item.length)
  let combined = capitalFirst.concat(restOfWord)
  return combined
}
randomNouns.forEach(firstCap)


// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]

const stringLength = (randomNouns) => {
  let eachLength = randomNouns.length
  return eachLength
}

randomNouns.forEach(stringLength)


// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

const alphabetSoup = (testString) => {
  return testString.split('').sort().join('')
}
console.log(alphabetSoup(testString3))

// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

const alphabetSoup = (testString1,testString2,testString3) => {
  let allTogether = testString1+testString2+testString3
  let alphabetOne = allTogether.split('').sort().join('')
  return alphabetOne
}
console.log(alphabetSoup(testString1,testString2,testString3))

// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

const combiner = (amounts , animals) => {
  let combinedArray = []
  for (let i = 0 ; i < amounts.length ; i++){
    combinedArray[i] = amounts[i] + ' ' + animals[i]
  }
  return combinedArray.toString()
}

console.log(combiner(amounts,animals))



// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"

const combiner = (amounts , animals) => {
  let combinedArray = []
  for (let i = 0 ; i < amounts.length ; i++){
    if(amounts[i] === 1) {
      let singleAnimal = animals[i].slice(0,animals[i].length - 1)
      animals[i] = singleAnimal
    }
    combinedArray[i] = amounts[i] + ' ' + animals[i]
  }
  return combinedArray.toString()
}

console.log(combiner(amounts,animals))
