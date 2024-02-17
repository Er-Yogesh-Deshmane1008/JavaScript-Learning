# projects related to DOM

## Project link
[click here](https://stackblitz.com/edit/vitejs-vite-luhr3b?file=index.css)

# Solution code

## Project 1

```Javascript
console.log("JavaScript")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');


buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id ==='orange'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='black'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='purple'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='pink'){
            body.style.backgroundColor = e.target.id;
        }
    });
});

```