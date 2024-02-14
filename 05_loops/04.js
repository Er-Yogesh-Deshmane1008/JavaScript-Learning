
const myObject = {
    Js:'JavaScript',
    Cpp:'C++',
    rb:'ruby',
    py:'Python'
}

for (const key in myObject) {
    // console.log(`${key} : ${myObject[key]}`);
    // console.log(value);
    // console.log(key,":",value);
}

const arr = ["Js","Py","CSS","HTML","J2EE"]
/*  
*In for of loop we get values but in for in loop we get key
*In for in we can't use map 
*/
for (const key in arr) {
//    console.log(`${key} = ${arr[key]}`);
}

/*
* map not working in for in loop
const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('fr',"France")

for (const key in map) {
    console.log(key);
}
*/