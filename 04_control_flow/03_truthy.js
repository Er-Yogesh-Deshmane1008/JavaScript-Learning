
/*
// const userEmail = "JavaScript@gmail.com"
const userEmail = {};

if (userEmail) {
    console.log("present");
}
else{
    console.log("Not present");
}
*/

/*//**falsy Values
false, 0, -0, BigInt 0n, "" , null, undefined, NaN

//** truthy Values
"0", " ", 'false', [], {}, funcation(){}
*/

// if (userEmail.length ===0) {
//     console.log("Array is Empty");
// }

/*
const emptyobj ={}

if (Object.keys(emptyobj).length ===0) {
    console.log("object is empty");
}
*/

/*//** Nullish Coalescing Operator (??): null undefined */ 

let val1;
// val1 = 10 ?? 5               //10
// val1 = null ?? 10           //10
// val1 = undefined ?? 15     //15
// val1 = null ?? undefined  //undefined
// val1 = undefined ?? null  //null
val1 = null ?? 10 ?? 20      //10
console.log(val1);

/* //* Terniary Operation  condition ? true : false
*/

const price =100
price >=80 ? console.log("take it") : console.log("dont take it") ;