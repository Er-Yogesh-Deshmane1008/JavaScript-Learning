let a = 10;     //Block scope
const b = 20; // Block scope
var c = 30;  //Globel Scope

if(true){
    let a = 100
    const b =200
    var c= 300
}

// console.log(a,b,c);

/*
if(true){
    let a = 100
    const b =200
    var c= 300
    // console.log(a,b,c);
}
*/


/*
function one(){
    const userName ="JavaScript"
    console.log("One out");
    function two(){
      console.log(userName);  
      console.log("Two out");
    }
    two()
}
one()
*/

/* ************intresting**************** */
// console.log(addone(5));     // It can access
function addone(num){
    return num + 1;
}
console.log(addone(5));

// console.log(funAdd(5));   // It cannot able to access
const funAdd = function addTwo(num){
    return num + 2;
}
console.log(funAdd(5));