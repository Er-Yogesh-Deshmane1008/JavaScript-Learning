"use strict"; //new version JS

// alert("Hello")  // We are using nodejs, not browser

let name = "JavaScript"   //String
console.log(typeof name);
let age = 1995-2024;     //Number
console.log(typeof age);
let IsGood = true       //Boolean
console.log(typeof IsGood );
let Brendan_Eich;      //Undefined
console.log(typeof Brendan_Eich);
let ECMA = null;      //Null
console.log(typeof null); //object

const id = Symbol('1234');
const anotherId = Symbol('1234')
let id1 = Symbol('1234');
let anotherId1 = Symbol('1234')
console.log(id === anotherId);
console.log(id1 === anotherId1);

const heros =["Hanuman", "shiva", "krishna"]; //Arrays
console.log(heros);

let my_obj = {
    name: "Yogesh",
    Lastname: "Deshmane"
}
console.log(my_obj);
console.log(typeof my_obj)

const myFunction=function(){
    console.log("my function");
    console.log(typeof myFunction);
}
myFunction();



/*
*JavaScript is dynamically typed language

*In JS 8 Types of Data types:
1)String,        //"" call my value;
2)Null,         //null
3)Number,      //number => ((2**53)-1)
4)Boolean,    //true,false
5)Object.       //
6)Bigint,
7)undefined,
8)symbol        //uniqe data type

*Reference (Non primitive data types)
Object, Array, Functions

*Typeof
String  //string
null    //object
Number  //number
Boolean //boolean
undefined   //undefined
object      //object

*/