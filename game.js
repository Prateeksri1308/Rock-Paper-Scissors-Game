let userScore = 0;
let compScore = 0;

const userCount = document.querySelector("#user-score")
const compCount = document.querySelector("#comp-score")
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const customPlay = document.querySelectorAll(".custom-play");
const toggleTheme = document.querySelector(".toggle-theme");
const lightText = document.querySelector(".light-text");
const darkText = document.querySelector(".dark-text");
const circle = document.querySelector(".circle");
const body = document.querySelector("body");
const choiceCircle = document.querySelectorAll(".choice");
const resetBtn = document.querySelector(".reset-button");
const winnerPage = document.querySelector(".winner-page");
const fullContainer = document.querySelector(".full-container");
const twentyTwenty = document.querySelector(".twenty-twenty");
const newGame = document.querySelector(".new-game");
const winnerImage = document.querySelector(".winner img");
const winnerMsg = document.querySelector(".winner-msg");
const leaderBoard = document.querySelector(".leaderboard img");



let isTournamentActive = false;

const newgamebtn =() =>{
newGame.addEventListener("click" , ()=>{
    userScore = 0;
    compScore = 0;
    msg.innerText ="Play Your Move"
    msg.style.backgroundColor = "#081b31"
    compCount.innerText = compScore;
    userCount.innerText = userScore;
    winnerPage.classList.add("none");
    fullContainer.classList.remove("win-show");
    customPlay.forEach((customGame) =>{
        customGame.classList.remove("hide");
        twentyTwenty.classList.add("hide");
        // body.style.backgroundColor ="";
        // bodyLight();
        isTournamentActive = false;

    })
} )
}
// newgamebtn();


let count = 1;
const bodyLight = () =>{
    toggleTheme.addEventListener("click", ()=>{
        count++;
        
        if (count % 2 !== 1) {
            circle.classList.add("slide-right");
            body.style.backgroundColor = "#000";
            body.style.color = "#fff"
            darkText.classList.add("hide-moon");
            lightText.classList.remove("hide-moon");
            hoverCircle()

        }else{
            circle.classList.remove("slide-right");
            body.style.backgroundColor = "#fff";
            body.style.color = "#000"
            lightText.classList.add("hide-moon");
            darkText.classList.remove("hide-moon");
} 
})
}

 
const hoverCircle = () => {
  choiceCircle.forEach((circle) => {
    circle.addEventListener("mouseenter", () => {
      if (count % 2 !== 1) {  // Dark mode only
        circle.classList.add("hovered");
      }
    });

    circle.addEventListener("mouseleave", () => {
      circle.classList.remove("hovered");
    });
  });
};


/*  circle.addEventListener("mouseenter", () => {
    circle.classList.add("hovered");
    circle.addEventListener("mouseleave", () => {
    circle.classList.remove("hovered");
  });
  }); */


bodyLight();
// hoverCircle()

/* const tournament = (customGame) =>{
customPlay.
} */

const resetGame = () =>{
   /*  userScore = 0;
    compScore = 0;
    msg.innerText ="1V1 GamePlay Started! Play Your First Move"
    msg.style.backgroundColor = "pink"
    compCount.innerText = compScore;
    userCount.innerText = userScore; */
    resetBtn.addEventListener("click", ()=>{
    userScore = 0;
    compScore = 0;
    msg.innerText ="Play Your Move"
    msg.style.backgroundColor = "#081b31"
    compCount.innerText = compScore;
    userCount.innerText = userScore;
    customPlay.forEach((customGame) =>{
        customGame.classList.remove("hide");
        twentyTwenty.classList.add("hide");
        isTournamentActive = false;
    // body.style.backgroundColor ="";
    // bodyLight();
        

    })
 })
}
resetGame();
const war = () => {
    customPlay.forEach((customGame) =>{
        customGame.addEventListener("click", (customPlay) =>{
        userScore = 0;
        compScore = 0;
       
        msg.innerText ="Play Your Move"
        msg.style.backgroundColor = "#081b31"
        compCount.innerText = compScore;
        userCount.innerText = userScore;

        customGame.classList.add("hide")
        console.log("1v1Game");
        twentyTwenty.classList.remove("hide");

        isTournamentActive = true;

    // body.style.backgroundColor = "#dda15e"
    // bodyLight();
    
    })

})

}
war();
const contest = ()=>{
    if(userScore >= 20 && compScore <= 20){
            console.log("win");
            winnerPage.classList.remove("none");
            fullContainer.classList.add("win-show");
            isTournamentActive = false ;
            // body.style.backgroundColor ="#ade8f4";

        }/* else if(userScore === 5 && compScore === 5){
            console.log("draw")
        } */else if(compScore >=20 && userScore <= 20){
            console.log("loose")
            winnerPage.classList.remove("none");
            fullContainer.classList.add("win-show");
            winnerMsg.innerText = "ohh! You lose Try Again";

            const img = document.createElement("img");
              img.src = "tumbdown.webp";
            winnerImage.src = img.src;
            isTournamentActive = false ;

            // body.style.backgroundColor ="#ade8f4"

            // document.getElementById("img-win").appendChild(img);
            // winnerImage.src = img.src;
        }
        newgamebtn();
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    // console.log("Game was Draw");
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#081b31"

}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userCount.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        // console.log("user win", );
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        compCount.innerText = compScore;
        // console.log("comp win");
        msg.innerText = `You Loose! ${compChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red"
    }
    // contest()
    if (isTournamentActive) {
    contest();
    }
}
 


const playGame = (userChoice) =>{
    // console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    // console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false :true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
/* const tournament = (userChoice) =>{
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false :true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

} */


choices.forEach((choice) => {
    choice.addEventListener("click",()=> {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked = ",  userChoice);
        playGame(userChoice);
        
    })
})

const stats = () => {
    leaderBoard.addEventListener("click", ()=>{
        fullContainer.classList.add("hide");
        body.classList.add("bg-img");

    })
}
stats();

