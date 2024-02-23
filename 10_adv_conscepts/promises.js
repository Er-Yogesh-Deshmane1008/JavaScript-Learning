/*const promiseOne = new Promise(function(resolve, reject){
    // Do an Async task
    setTimeout(function() {
        console.log('Async task 1 is complet');
        resolve()
    },1000);
});

promiseOne.then(function(){
    console.log("promise consumed 1");
})

new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("Async task 2 is completed");
            resolve();
        },1000)
}).then(function(){
    console.log("promise consumed 2");
})



const promiseThree = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve({userName : "Brendan Eich", email:"brandan@gmail.com"});
        },1000)
}).then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    
    setTimeout(function(){
        let error = true
        if(!error){
            resolve( {username:"Yogesh", password:"123456789"})
        } else{
            reject('ERROR: Something went wrong');
        }
    },1000)
})

 promiseFour.then((user) =>{ 
    console.log(user)
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(error =>{
    console.log(error);
}).finally(() => console.log("Finally! The promise is either resolved or rejected "))
*/
/*
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve( {username:"Javascript", password:"1234"})
        } else{
            reject('ERROR: Js went wrong');
        }
    },1000)
})

async function consumePromiseFive (){
   try {
    const response = await promiseFive
     console.log(response);
   } catch (error) {
    console.error(error)
   }
}

consumePromiseFive()
*/
// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data=await response.json();
//    console.log(data);
//    } catch (error) {
//     console.log(error);
//    }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((data) => console.log(data)).catch()