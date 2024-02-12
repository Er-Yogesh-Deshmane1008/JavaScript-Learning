
// const tinderUser = new Object()      //Singleton object

const tinderUser = {}                   //non singleton object
tinderUser.id = "123456"
tinderUser.name = "somu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

/*
const regularUser ={
    email:"somu@gmail.com",
    phoneNum : 9972345645,
    fullname:{
        userFullNmae:{
            userName:"Somu",
            lastName:"Nath"
        }
    }
}
console.log(regularUser.fullname.userFullNmae.lastName);
console.log(regularUser.fullname);
*/

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}
const obj4 = {5:'a',6:'b'}

//const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


const arr=[
    {
        name:"JS",
        email:"Js@gmail.com"
    },
    {
        name:"Python",
        email:"Python@gmail.com"
    },
    {
        name:"Java",
        email:"Java@gmail.com"
    },
    {
        name:"HTML",
        email:"HTML@gmail.com"
    }
]
/*
console.log(arr[1].name);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.assign(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));
*/

//De-Structuring

const course ={
    courseName:"Java full stack we developement",
    price:"25000",
    teacher:"Somanna"
}
console.log(course.courseName);
const {courseName:cName} = course
console.log(cName);