//  we have to target the button .
const btn = document.getElementById("button") ;

// What do you want to do with the button
//Write a fuction for it .
const randomColor = () => {

    
    let hex = '0123456789ABCDEF';
    let hasNum= '#' ;
    
    for(let i = 0;i<6;i++){
        hasNum = hasNum + hex[Math.floor(Math.random()*16)];

    }
    return hasNum ;
} 

console.log(randomColor());
//Then add event listener 

btn.addEventListener("click",changeRandomColor);

function changeRandomColor(){
    document.body.style.backgroundColor = randomColor();
    // btn.style.backgroundColor = randomColor();    
}

