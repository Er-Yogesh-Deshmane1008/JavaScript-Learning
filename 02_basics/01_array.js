 // arrays

 const myArr = [0,1,2,3,4,5]
//  console.log(myArr[0]);
//  console.log(myArr[1]);

//  Array Methods
/*
myArr.push(6);         //push method
console.log(myArr.push(7)); //It print position of push elament.
console.log(myArr);

myArr.pop()          //pop method
console.log(myArr);
*/

/*
myArr.unshift(2);    //unshift method
myArr.shift()       //shift
console.log(myArr);
console.log(myArr.includes(8));
console.log(myArr.indexOf(8));
console.log(myArr.indexOf(5));
*/
/*
const newArr = myArr.join(); //join(). It conver Array(object) to String.
console.log(myArr);
console.log(newArr);
console.log(typeof myArr);
console.log(typeof newArr);
*/

//slice, splice

console.log("A", myArr);

const myn1 = myArr. slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr. splice(1,3)
console.log(myn2);
console.log("C", myArr);