// for of loop

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const string = "Hello JavaScript"
// for (const str of string) {
//     console.log(str);
// }


/* Maps 
*(Unique and order of insertion is mentation)
*/  


const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('fr',"France")

// console.log(map);

for (const [key, value] of map) {       
    console.log(key, ":-", value);    
    // console.log(key);
    // console.log(value);
}

/*
const myObject ={     //Object are not iterable using for of loop
    gmae : 'GTA',
    game1: 'NSF',
    game2:'IGI' ,
}

for (const [key, value] of myObject) {
    console.log(key);
    console.log(value);
    console.log(key, ':-' , value);
}
*/