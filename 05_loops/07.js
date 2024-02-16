//Map()
let mynumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*
let newNumbers = mynumbs.map((num) => num + 10 )
console.log(newNumbers);

//using for each loop
mynumbs.forEach((num) => {
    console.log(num+20);
})
*/

let newNums = mynumbs
                .map((num) => num * 10)
                .map( num => num + 1 )
                .filter(num => num > 50)

                console.log(newNums);