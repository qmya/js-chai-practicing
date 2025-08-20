//they started using Usestrict so the old code does not get disturb with the new standards
"use strict"; //treat all JS code as a newer version

//we are using nodejs, not browser.
//alert(3+3); //in inspect if we write this it will give us 6 in alert because that is JS engine but in Node it will give us error. there is another way / syntax for this.


//Js dateType
let name = "Mya" //string datatype
let age = 20 //number datatype
let isLoggedIn = false //boolean

//****Premetive dataTypes*****
//number => have a range 2 to power 53 if its bigger than that then we use bigInt (normal used in stock market)
//string=> can be used in single or double quotes. preferred is double quotes.
//boolean=> true/false
//null= its a standalone value. null is an empty value not an empty string. let state = null;
//undefinded= when u dont define the value. u inialize a varialable but dont give value to it.
//symbol = for uniqueness we use symbols like in react 
//*****************/

//
console.log(typeof "name"); //result in terminal is string
console.log(typeof age);
console.log(typeof null); //its type is object
console.log(typeof undefined);// undefined is its type