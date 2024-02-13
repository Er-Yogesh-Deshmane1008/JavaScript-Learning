// Immediately Invoked Function Expressions (IIFE)

(function JS (){
    console.log(`DB CONNECTED`);
})();

(function Code(){
    //named IIFE
    console.log("Js");
} )();

((name) => {
    console.log(`JavaScript ${name}`);
})('js');