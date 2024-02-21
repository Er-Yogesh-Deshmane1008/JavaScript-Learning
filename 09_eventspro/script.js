

//generate random color

const randomcolor = function(){
    const hex = "0123456789ABCDEF"
    let color ='#'
    for(let i=0 ; i<6 ; i++){
        color  += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let stopBgColor;
const startChangingColor = function(){
    if(!stopBgColor){
        document.body.style.backgroundColor = randomcolor();
    }
    
    const changeBgColor =function(){
        document.body.style.backgroundColor = randomcolor();
    }
    stopBgColor= setInterval(changeBgColor,1000)

   
}

const stopChangingColor = function(){
     clearInterval(stopBgColor);
     stopBgColor = null;
     console.log("stop");
}





document.querySelector('#start').addEventListener
('click',startChangingColor);


document.querySelector('#stop').addEventListener
('click',stopChangingColor);













   
//    const clear = document.querySelector("#start").addEventListener('click', function(){
//     const clearall = setInterval(randomcolor,1000);
//      document.querySelector("#stop").addEventListener('click',function(){
//         clearInterval(clearall)
//         console.log(stop);
//      })
// })