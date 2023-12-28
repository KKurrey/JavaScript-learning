const accountID = 323232
let accountEmail = "Kranti@google.com"
var accountPassword = "12345"
let accountState

accountCity = "Pune"

// accountID = 12234    // assignment to constant is not allowed multiple times

console.log(accountID);

/*
Prefer not to use var
because of issue in block scope and functional scope
 */

accountEmail = "kk@google.com"
accountPassword =  "23232"
accountCity = "Gurugram"

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])