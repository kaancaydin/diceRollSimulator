const buttonEl = document.getElementById("roll-button");
const clearButtonEl = document.getElementById("clear-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");

let historyList = [];

function rollDice(){
    const rollResult = Math.floor(Math.random() * 6) + 1; 
    const diceFace = getDiceFace(rollResult);
    diceEl.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
    console.log(rollResult)
    console.log(diceFace)
}

function getDiceFace(rollResult){
    switch(rollResult){
        case 1:
            return "&#9856;"
        case 2:
            return "&#9857;"
        case 3:
            return "&#9858;"
        case 4:
            return "&#9859;"
        case 5:
            return "&#9860;"
        case 6:
            return "&#9861;"
        default:
            return "";
    }
}

function updateRollHistory(){
    rollHistoryEl.innerHTML = "";
    for (let index = 0; index < historyList.length; index++) {
        const listItem = document.createElement("li")
        listItem.innerHTML = 
        `Roll ${index +1}: <span> ${getDiceFace(historyList[index])}</span`;
        rollHistoryEl.appendChild(listItem);
    }
}

buttonEl.addEventListener("click",()=>{
    diceEl.classList.add("roll-animation")
    setTimeout(()=>{
        diceEl.classList.remove("roll-animation")
        rollDice()
    },1000)  
})

clearButtonEl.addEventListener("click",()=>{
    diceEl.classList.add("shake-animation"); 
    setTimeout(() => {
        historyList = [];
        rollHistoryEl.innerHTML = "";
        diceEl.classList.remove("shake-animation");
    }, 500);
})