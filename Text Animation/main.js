const containerEl = document.querySelector('.container');

const careers = ["YouTuber", "WebDeveloper", "FreeLancer","Instructor"];

let careerIndex = 0;

let characterIndex = 0;


let updateText = ( )=>{
    let firstCareerLetter = careers[careerIndex].slice(0,1);
    if(firstCareerLetter==="A"||firstCareerLetter==="E"||firstCareerLetter==="O"||firstCareerLetter==="I"||firstCareerLetter==="U"){
        containerEl.innerHTML = `<h1>I am an ${careers[careerIndex].slice(0,characterIndex)}</h1>`; 
    }else{
         containerEl.innerHTML = `<h1>I am a ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
    }
     characterIndex++;
     if(characterIndex===careers[careerIndex].length+1){
        characterIndex = 0;
        careerIndex++
     }

     if(careerIndex===careers.length){
        careerIndex=0;
     }
}


setInterval(updateText,400);