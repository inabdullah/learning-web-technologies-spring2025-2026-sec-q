const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("reset");

const xScoreDisplay = document.getElementById("xScore");
const oScoreDisplay = document.getElementById("oScore");

let xScore = 0;
let oScore = 0;

let currentPlayer = "X";
let board = ["","","","","","","","",""];
let gameActive = true;

const winConditions = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

cells.forEach((cell,index)=>{
cell.addEventListener("click",()=>handleCellClick(cell,index));
});

function handleCellClick(cell,index){

if(board[index]!=="" || !gameActive){
return;
}

board[index]=currentPlayer;
cell.textContent=currentPlayer;

cell.classList.add("animate");

checkWinner();
}

function checkWinner(){

let roundWon=false;

for(let condition of winConditions){

const a=board[condition[0]];
const b=board[condition[1]];
const c=board[condition[2]];

if(a==="" || b==="" || c===""){
continue;
}

if(a===b && b===c){
roundWon=true;

condition.forEach(i=>{
cells[i].classList.add("winner");
});

break;
}
}

if(roundWon){

statusText.textContent="Player "+currentPlayer+" Wins!";

if(currentPlayer==="X"){
xScore++;
xScoreDisplay.textContent=xScore;
}
else{
oScore++;
oScoreDisplay.textContent=oScore;
}

gameActive=false;
return;
}

if(!board.includes("")){
statusText.textContent="It's a Draw!";
gameActive=false;
return;
}

currentPlayer = currentPlayer==="X" ? "O" : "X";
statusText.textContent="Player "+currentPlayer+"'s Turn";
}

resetBtn.addEventListener("click",resetGame);

function resetGame(){

board=["","","","","","","","",""];
gameActive=true;
currentPlayer="X";

statusText.textContent="Player X's Turn";

cells.forEach(cell=>{
cell.textContent="";
cell.classList.remove("winner");
cell.classList.remove("animate");
});
}