const form = document.querySelector('form');
// this usecase give you empty 
// const height = parseInt (document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.priventDefault()

   const height = parseInt (document.querySelector('#height').value)
   const weight = parseInt (document.querySelector('#weight').value)
   const results = document.querySelector('#results')


   if(height==='' || height < 0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`;
   }else if(weight==='' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please give a valid height ${weight}`;
   }else{
    const bmi = (weight / ((height*weight)/10000)).toFixed(2)
    //show result
   results.innerHTML = `<span>${bmi}</span>`;
   }
});