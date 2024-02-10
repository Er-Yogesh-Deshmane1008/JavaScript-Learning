const schoolFriends =["Rohit","Praful","Mahesh"]
const clgFriends = ["Praveen", "Sager","Ananthnaga"]


// schoolFriends.push(clgFriends)   //Push().It push the clgFriends array into the schoolFriends array.
// console.log(schoolFriends);
// console.log(schoolFriends[3][2]);

// const allFriends = schoolFriends.concat(clgFriends); 
// console.log(allFriends);//concat().It concat the schoolFriends array with the clgFriends array

// const allFriends1 =[...schoolFriends,...clgFriends]
// console.log(allFriends1);// sprade operater

/*
const newArray =[1,2,3,[4,5,6],7,[8,9,0,[1,2]]]
const anotherNewArray = newArray.flat(Infinity)
console.log(anotherNewArray);
*/

console.log(Array.isArray("YOGESH"))
console.log(Array.from("YOGESH"))
console.log(Array.from({name:"YOGESH"})) //intresting

let score = 100;
let score1 = 200;
let score2 = 300;
console.log(Array.of(score,score1,score2));