let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara=  document.querySelector("#user-score");
const compscorepara=  document.querySelector("#comp-score");

const gencompchoice= ()=>{
   const options =["rock","paper","scissor"];  
  const randidx= Math.floor( Math.random()*3) ;  
  return options[randidx];

}
const drawgame= ()=>{
    console.log("Game is draw");
    msg.innerText="GAME DRAW TRY AGAIN";
    msg.style.backgroundColor="gray";
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`YOU WIN!  Your ${userchoice} beats ${compchoice}` ;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
       
        msg.innerText=`YOU LOSE  ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame =(userchoice)=>{
    console.log("userchoice=", userchoice);

    const compchoice= gencompchoice();
    console.log("compchoice=",compchoice);

    if(userchoice===compchoice){
          drawgame();
    } else{
        let userwin=true;
        if(userchoice==="rock"){
           userwin = compchoice==="paper" ? false : true ;
        } else if (userchoice==="paper"){
            userwin = compchoice==="scissors" ? false : true;
        }else{
            userwin =  compchoice==="rock"? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{ 
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});