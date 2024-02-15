const coding = ["Java", "Python", "HTML", "CSS"]

coding.forEach(element => {
    // console.log(element);
});
console.log("=========================");
/*
*OR
*/
coding.forEach(function(items){
    // console.log(items);
})
console.log("==========================");
/*
*OR
*/
function printMe(item){
    // console.log(item);
}
coding.forEach(printMe);
console.log("===========================");

coding.forEach((item,index,arr) =>{
    // console.log(item, index, arr);
})

const myCoding =[
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    }
]

myCoding.forEach(element =>{
    console.log(element);
    console.log(element.languageName);
})