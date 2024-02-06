"use strict";
const accountId =12345;
let accountEmail = "Yogesh@gmail.com";
var accountPassword = "12345678";
let accountCity = "Bengaluru";
let Gender;

console.log(accountId,accountCity,accountEmail,
    accountPassword);
console.table([accountId,accountCity,accountEmail,
    accountPassword]);
console.log(Gender);    // undefined

/*
1) Block scope?
The Separate space for the let and conts is called block scope.
Ex: var a = 10;     {Globel scope}
    let b = 20;     {block scope}
    conts c = 30;   {block scope}
NOTE: WE CANNOT ACCESS THE BLOCK SCOPE OUTSIDE THE BLOCK
2) shadowing?
Vairable declared within a certain scope has the same name as a vairable declared in an outer scope.   
Ex: let b=10;
    {
        var c = 30;
        const a=10;
        let b = 20;
        console.log(b) //20
    }
    console.log(b) //10
*/ 