let boxes = document.querySelectorAll(".btnbox");
let msg = document.querySelector("#msg");
let startBtn = document.querySelector("#btn1");
let resetBtn = document.querySelector("#btn2");

let turn0=true;
let winPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if (turn0===true){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }box.disabled=true;
    WinnerFun()
    })
});

const WinnerFun=()=>{
for(let box of winPattern){
    let pose1= boxes[box[0]].innerText;
    let pose2= boxes[box[1]].innerText;
    let pose3= boxes[box[2]].innerText;
    if(pose1 != "" && pose2 !="" && pose3 != ""){
        if(pose1===pose2 && pose2===pose3){
            msg.innerText=`Congrasulation the winner is ${pose1}`;
            msg.style.visibility="visible";
            startBtn.style.visibility="visible";
            box.style.borderBottom= "solid";
            disabledBtn();
        };
    };
}
};


function disabledBtn(){
    boxes.forEach((box)=>{
        box.disabled=true;
    });
};


function enabledBtn(){
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
        msg.style.visibility="hidden";
        startBtn.style.visibility="hidden";
        
    });
};

startBtn.addEventListener("click", enabledBtn);
resetBtn.addEventListener("click", enabledBtn);