"use strict";

const name = "Java";
const nameconti = "Script";

console.log(name+nameconti);
console.log(`Hello welcom to ${name+nameconti}`); //String interpolation

const gameName = new String('GTA5');
console.log(`What is gamename ?  game name is ${gameName}.`);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('T'));
console.log(gameName.substring(0,3));
