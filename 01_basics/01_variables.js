const accountId = 144553;
let accountEmail = "qandeel@google.com";
var accountPassword = "12345";
accountCity = "Toronto";

//Not Allowed
//accountId = 2;
//console.log(accountId); //TypeError: Assignment to constant variable.

accountEmail = "etsy@google.com";

accountPassword ="67899"

accountCity = "mississauga";

/*
Prefer not to use var
-> because of issue in block scope and functional scope 
*/
console.table([accountId, accountEmail, accountPassword,accountCity]);