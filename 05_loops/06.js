//Filter()
const coding = ["Java", "Python", "HTML", "CSS"]

const values = coding.forEach(item =>{
    // console.log(item);
    return item
})
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6]

// const newnums = myNums.filter((num) => {        // We can write like this 
//   return   num > 4                             //const newnums = myNums.filter((num) => num>4
// })

const newnums = []

myNums.forEach((num) => {
    if (num>4) {
        console.log(num);
        newnums.push(num)
    }
    
})

console.log(newnums);