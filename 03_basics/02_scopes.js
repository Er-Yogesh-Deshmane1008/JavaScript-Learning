let a = 10;     //Block scope
const b = 20; // Block scope
var c = 30;  //Globel Scope

if(true){
    let a = 100
    const b =200
    var c= 300
}

console.log(a,b,c);

if(true){
    let a = 100
    const b =200
    var c= 300
    console.log(a,b,c);
}

