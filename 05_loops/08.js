//  reduce()
 const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ];

 const initialValue = 0;
//  const sum = arr.reduce((accumulator,currentvalue) => accumulator + currentvalue,
//  initialValue
//  );
 
//  *OR
 const sum = arr.reduce((accumulator,currentvalue) => { 
    return accumulator + currentvalue
    },initialValue);


 console.log(sum);