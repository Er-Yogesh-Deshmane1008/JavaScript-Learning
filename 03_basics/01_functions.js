function sayNameOfCourse() {
  console.log("J");
  console.log("A");
  console.log("V");
  console.log("A");
  console.log("S");
  console.log("C");
  console.log("R");
  console.log("I");
  console.log("p");
  console.log("T");
}
// sayNameOfCourse()
// console.log(sayNameOfCourse());

function addTwoNumbers (a,b){
   
    return a+b;
}
// console.log(addTwoNumbers(10,20));

function loginUserMessage(username = "sam"){
        return `${username} just logged in `
}
// console.log(loginUserMessage()); //Undifined just logged in
// console.log(loginUserMessage("Yogesh"));

//Rest operater in functions
function cartItems (...items){
    return items
}
//console.log(cartItems(200,300,400,50,400));

//Handeling object in functions

const user = {
    username : "sam",
    price:199
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//1 handleobject(user)

//2 handleobject({username:"sam",price:199})

//Handeling Array in function

const arr = [10,20,30,40,50]
function handlingArray(anyArray){
    console.log(`Given Array is ${anyArray}`);

}
handlingArray(arr)
handlingArray([10,20,50,50,70,60])