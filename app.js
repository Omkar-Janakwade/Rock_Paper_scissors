let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const showwinner=(userwin,userChoice,compChoice)=>{
    if(userwin==true){
        userscore++;
        userScorePara.innerHTML=userscore
      
        msg.innerHTML=`you Win your ${userChoice} beats ${compChoice}`;

        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compScorePara.innerHTML=compscore
       msg.innerHTML=`you lose ${compChoice} beats your ${userChoice}`;
       msg.style.backgroundColor="red";
    }
    }


const gencompchoice=()=>{
const options=["rock","paper","scissors"];
const rendIdx=Math.floor(Math.random()*3);
return options[rendIdx];
}
const drawgame = () => {
    msg.innerHTML="game Was Draw Play Again!"
    msg.style.backgroundColor="#081b31";
}
const playgame=(userChoice)=>{

const compChoice=gencompchoice();


if(userChoice===compChoice){
    drawgame();
}else{
    let userwin=true;
    if(userChoice==="rock"){
       // scissors paper
    userwin=userChoice==="paper"? flase:true;
    }
   else if (userChoice==="paper") {
     // scissors rock
    userwin=compChoice==="scissors"?false:true;

   } else {
    // paper rock

    userwin=compChoice==="rock"?false:true;
   }
   showwinner(userwin,userChoice,compChoice);
}
}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});

