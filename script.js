let box=document.querySelectorAll(".boxes");
let reset=document.querySelector("#reset");
let newButton=document.querySelector("#newone");
let winnerCon=document.querySelector(".winnerContainer");
let winner=document.querySelector("#winner");

let turnO=true;
let count=0;

let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
box.forEach((boxes) => {
    boxes.addEventListener("click",()=>{
        console.log("it was clicked");
        if(turnO)
        {
            boxes.innerText="O";
            turnO=false;
            boxes.style.color="blue";
        }
        else{
            boxes.innerText="X";
            turnO=true;
            boxes.style.color="red";
        }
        boxes.disabled=true;
        count++;

        let isWinner=checkWinner();
        if(count===9 &&! isWinner)
        {
            gameDraw();
        }
    })
})
const gameDraw=()=>{
    winner.innerText="Game was a Draw";
    winnerCon.classList.remove("hide");
    boxDisable();
}

const newGame=()=>{
   turnO=true;
   count=0;
   boxEnable();
   winnerCon.classList.add("hide");
}
const boxDisable=()=>{
    for(let bx of box){
        bx.disabled=true;
    }
}
const boxEnable=()=>{
    for(let bx of box){
        bx.disabled=false;
        bx.innerText="";
    }
}
const showWinner=(campion)=>{
    winner.innerText=`Congratulations Winner is ${campion}`;
    winnerCon.classList.remove("hide");
    boxDisable();

}

const checkWinner = ()=>{
    for(let pattern of winPatterns)
    {
        let posvalue1=box[pattern[0]].innerText;
        let posvalue2=box[pattern[1]].innerText;
        let posvalue3=box[pattern[2]].innerText;

        if(posvalue1!=""&& posvalue2!=""&& posvalue3!="")
        {
            if(posvalue1==posvalue2 && posvalue2==posvalue3){
                console.log("Winner");
                showWinner(posvalue1);
            }
        }
    }
}

reset.addEventListener("click",newGame);
newButton.addEventListener("click",newGame);