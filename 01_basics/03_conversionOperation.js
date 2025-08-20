let score = "33"

//two ways to check the type
console.log(typeof score);
console.log(typeof(score));

//this will convert score in number
let valueInNumber = Number(score)

console.log(typeof(valueInNumber))

//but what if score is a number with some alpabets

let scoreOne = "444aa"// not a pure number

let convertInNumber = Number(scoreOne)

console.log(typeof(convertInNumber)); // give us number wow! how does this happened. irs should not happened

//lets dig deeper whats inside the convertInNumber

console.log(convertInNumber);//result: NaN (not a number) but type is ***Number***


// check null

let scoreTwo = null
let convertInNumberTwo = Number(scoreTwo);
let scoreThree = undefined
let convertInNumberThree = Number(scoreThree)

let scoreFour = true
let convertInNumberFour =Number(scoreFour)

console.table([convertInNumberTwo,convertInNumberThree,convertInNumberFour])

//results
//(index) │ Values │
//├─────────┼────────┤
//│ 0       │ 0      │
//│ 1       │ NaN    │
//│ 2       │ 1   

//*******Conclusion*******/
//"33" = 33 Number
// "444aa" = NaN type is number
//true = 1, false = 0 type is boolean

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //True
//"" => false
//"1" => true


//convert string to number

let someNumber = 33

let stringIntoNumber = String(someNumber)
console.log(stringIntoNumber) // result 33 w/h is a string
console.log(typeof stringIntoNumber)//string


// ************** OPERATIONS *******************\\

let value = 3
let negValue = -value
console.log(negValue) // -3

// console.log(2+2); addition
// console.log(2-2); subtraction
// console.log(2*2);multiplication
// console.log(2**3); 2 raise to the power 3
// console.log(2/3); division
// console.log(2%3); remainder


//adding the string

let str1 = "hello"
let str2 = " Qandeel"
let str3 = str1 + str2
console.log(str3) //hello Qandeel

//console.log("1" + 2); //12
//console.log(1 + "2"); //12
//console.log("1" + 2 + 2); //122
//console.log(1 + 2 + "2"); //32

//console.log( (3 + 4) * 5 % 3);

let gameCounter = 100
/******** PREFIX & POSTFIX */
//gameCounter++
++gameCounter
console.log(gameCounter); //101 "++ means add 1"
// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion