// set initial count
let count = 0;

// select value and buttons
let value = document.querySelector("#value");
let buttonContainer = document.querySelector(".button-container");

buttonContainer.addEventListener("click",(event)=>{
    //         Alt way of writing
    // let buttonClicked = event.target.classList
    // if(buttonClicked.contains("decrease")){
    //     console.log("Decrease btn")
    // }

    let buttonClicked = (event.target.classList.value).split(" ")[1]
    if(buttonClicked ==="decrease"){
        count--
    }else if(buttonClicked ==="reset"){
        count = 0
    }else{
        count++
    }

    // if(count < 0){
    //     value.style.color ="red"
    // }else if(count > 0){
    //     value.style.color ="green"
    // }else{
    //     value.style.color = "#222"
    // }
    count < 0 ? value.style.color ="red" : 
    count > 0 ? value.style.color ="green" : 
    count === 0 ? value.style.color ="#222" : "#222"
    value.textContent= count;

    
})