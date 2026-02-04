let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector("#restBtn");
let newGameBtn = document.querySelector("#newGame");
let messageBtn = document.querySelector("#msg");
let msgContainer = document.querySelector(".message-container");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const restGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");

}




boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        
        
        if(turnO === true){
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;
        }
        else{
            box.innerText = "X";
             box.style.color = "green";
            turnO = true;
        }
        box.disabled = true;
        
        checkWinner();
    });
    
});



function checkWinner() {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
                }
            }
        }
    }


const showWinner = (winner) => {
    messageBtn.innerText = `Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();

}


newGameBtn.addEventListener("click", restGame);
restBtn.addEventListener("click", restGame);