//Singleton class?
/*A Singleton class is a class that allows 
only one instance of itself to be created
 and provides a global point of access 
 to that instance. This is achieved by 
 making the constructor private, so that
  no other instances of the class can be 
  created, and providing a static method
   that returns the single instance of 
   the class.*/

   /*Implementing a Singleton Class in Java
1)Declare a private static variable to hold the 
single instance of the class.
2)Make the constructor of the class private, 
so that no other instances can be created.
3)Provide a public static method to return 
the single instance of the class, creating
 it if necessary.*/

//   Object literals

const mySym = Symbol("key1")

const jsUser ={
    name:"JavaScript",
    "Full name": "JavaScript by Brendan Eich",
    [mySym]:"myKey1",
    DOB:"1995",
    inventer:"Brendan Eich"

}
// console.log(jsUser.name);
// console.log(jsUser["inventer"]);
// console.log(jsUser["Full name"]);
// console.log(jsUser[mySym]);


jsUser.name="JavaScript"
// Object.freeze(jsUser)
// jsUser.name="Js"
// console.log(jsUser["name"]);
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS Users");
}

jsUser.greeting1 = function(){
    console.log(`Hello JS Users ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting1());