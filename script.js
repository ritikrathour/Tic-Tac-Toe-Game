let cells = document.querySelectorAll(".cell");
let player_turn_staus = document.querySelector(".player_turn");
let restart_btn = document.querySelector(".btn");
let players__turn__btn = document.querySelectorAll(".players__turn button");

let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let currentPlayer = "X"; 
const addContent = (cell) => {
    if (players__turn__btn[0].classList.contains("active")) {
        players__turn__btn[0].classList.remove("active");
        players__turn__btn[1].classList.add("active");
    } else {
        players__turn__btn[0].classList.add("active");
        players__turn__btn[1].classList.remove("active");
    }

    cell.innerHTML = currentPlayer;
    cell.classList.add("pointerEvent");
    if(checkWin()){
        document.querySelector(".isWin").classList.add("active")
        document.querySelector(".status").textContent = `${currentPlayer}'s Win!`
    }
    else if(isDraw()){
        document.querySelector(".isWin").classList.add("active")
        document.querySelector(".status").textContent = "Draw Game!";
    }
    else{
        changePlayer(cell);
    }

}
const checkWin = () => {
  return winConditions.some(condition=>{ 
    return condition.every(index=>{
        return cells[index].textContent === currentPlayer
    })
  })
}
const isDraw = ()=>{
    return [...cells].every((cell)=>{
        return (cell.textContent === "X") || (cell.textContent === "O");
    })
}
const changePlayer = (player) => {
    (player.innerHTML === "X") ? currentPlayer = "O" : currentPlayer = "X";
}
const restartGame =()=>{
    document.querySelector(".isWin").classList.remove("active");
    document.querySelector(".status").textContent ='';
    currentPlayer = "X";
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("pointerEvent")
    });
    players__turn__btn[0].classList.add("active")
    players__turn__btn[1].classList.remove("active")
}
cells.forEach(cell => {
    cell.addEventListener("click", () => addContent(cell));
});
restart_btn.addEventListener("click",restartGame);