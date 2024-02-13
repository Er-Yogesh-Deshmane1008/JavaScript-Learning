const user = {
    userName : "JavaScript",
    price : 9999,

    welcomeMessage: function () {
        console.log(`${this.userName}. Welcome to web site`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.userName = "Js"
// user.welcomeMessage();

// console.log(this);


/*function one(){
    // let userName = "JavaScript"
    // console.log(this);

    // userName = "Js"
    // console.log(this.userName);
}
 one()
 */

 /*const two = function(){
    let userName = "JavaScript"
    console.log(this.username);

 }
 two();
 */


/*
 const JS = () =>{
    console.log("Welcome to JavaScript");
    let userName = "JavaScript"
    console.log(this.username);
    console.log(this);
 }
 JS()
 */


/*
 const addTwoNumbers = (x,y) => {
    return x+y;
 }
 console.log(addTwoNumbers(100,200));
 */

//  const addTwoNumbers = (x,y) =>  x+y;

// const addTwoNumbers = (x,y) =>  (x + y);

const addTwoNumbers = (x,y) =>  ({userName:"JavaScript"});

 console.log(addTwoNumbers(1000,2000));