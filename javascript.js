let HumanScore=0;
let ComputerScore=0;
function getComputerChoice(){//randomly return one of the following string values: “rock”, “paper” or “scissors”.
    const random = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
    const choices = ["rock", "paper", "scissors"];
    const choice = choices[random];
    console.log("computerChoice is "+choice);
    return choice; 
    // let random=Math.floor(Math.random()*100)+1;
    // if(random<=33){
    //     console.log("rock");
    //     return "rock";
    // }
    // else if(random>66){
    //     console.log("paper");
    //     return "paper";
    // }
    // else {
    //     console.log("scissors");
    //     return "scissors"
        
    // }
}
function getHumanChoice(){
    return prompt("Please enter your choice: 'rock', 'paper', or 'scissors'");
}
function playRound(){
    let HumanChoice=getHumanChoice();
    let computerChoice=getComputerChoice();
    let humanChoice=HumanChoice.toLowerCase();
    if(humanChoice===computerChoice){
        console.log("A tie! "+computerChoice+" against "+humanChoice);
    }
    else if(humanChoice==="rock"&&computerChoice==="scissors"||humanChoice==="paper"&&computerChoice=="rock"||humanChoice==="scissors"||computerChoice==="paper"){
            console.log("You win! "+humanChoice+" beats "+computerChoice);
            HumanScore++;
        }
    else{
            console.log("You lose! "+computerChoice+" beats "+humanChoice);
            ComputerScore++;
        }
    }
function playGame(){
    let i=5;
    while(i){
        playRound();
        i--;}
    if(HumanScore>ComputerScore)
        console.log("You finally win,since your score is "+HumanScore+"  while computer's score is "+ComputerScore);
    else if(HumanScore===ComputerScore){
            console.log("It's a tie!,since your score is "+HumanScore+"  while computer's score is "+ComputerScore);}

    else console.log("You finally lose,since your score is "+HumanScore+" while computer's score is "+ComputerScore);
    

}
//playRound(HumanScore,ComputerScore);
playGame();
