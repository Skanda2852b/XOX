let boxes=document.querySelectorAll(".box");
let newg=document.querySelector("#newg");
let reset=document.querySelector("#reset");
let winner=document.querySelector("#win");
let turnx=true;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnx===true){
            console.log("X");
            turnx=false;
            box.innerText="X";
            box.disabled=true;
        }else{
            console.log("O");
            turnx=true;
            box.innerText="O";
            box.disabled=true;
        }
        checkWinner();
    });
});
const winpat=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const rest=()=>{
    turnx=true;
    enbox();
    winner.innerText="";
}
const enbox=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disbox=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const checkWinner=()=>{
    for(let pattern of winpat){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1===pos2&&pos2===pos3){
            console.log("winner");
            winner.innerText=`Winner is ${pos1}`;
            disbox();
        }}
    }
}
newg.addEventListener("click",rest);
reset.addEventListener("click",rest);
