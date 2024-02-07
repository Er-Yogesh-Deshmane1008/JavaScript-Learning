"use strict";
let score = "33abc"

console.log(typeof score)
console.log(typeof(score));

let valueInNumber = Number(score) // Explecite type conversion
console.log(typeof valueInNumber) 
console.log(valueInNumber);

/*
"33" => 33
"33abc" => NaN
"null" => Null
true =>1; false =>0;

*/

/*================operations=============*/

let val=3;
let negval=-val;
let mulval=val*3
let addval=mulval+negval;
console.log(negval);
console.log(mulval);
console.log(addval);
console.log(2**3);
console.log(2%10);
console.log(2/10);
console.log("2"+1);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");
console.log((3 + 4)  * 5 % 3);
