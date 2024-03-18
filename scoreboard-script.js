let teamName1;
let teamName2;

document.getElementById("submitButton1").onclick = function(){
    teamName1 = document.getElementById("typebox1").value;
    document.getElementById("teamName1").textContent = teamName1;
}
document.getElementById("submitButton2").onclick = function(){
    teamName2 = document.getElementById("typebox2").value;
    document.getElementById("teamName2").textContent = teamName2;
}
//left side
const leftPlus1Btn = document.getElementById("leftplus1");
const leftPlus2Btn = document.getElementById("leftplus2");
const leftPlus3Btn = document.getElementById("leftplus3");
const leftMinus1Btn = document.getElementById("leftminus1");
const leftReset = document.getElementById("leftreset");
const scoreLabel1 = document.getElementById("scorelabel1");
countleft = 0;

leftPlus1Btn.onclick = function(){
    countleft++;
    scoreLabel1.textContent = countleft;
}
leftPlus2Btn.onclick = function(){
    countleft+=2;
    scoreLabel1.textContent = countleft;
}
leftPlus3Btn.onclick = function(){
    countleft+=3;
    scoreLabel1.textContent = countleft;
}
leftMinus1Btn.onclick = function(){
    countleft--;
    scoreLabel1.textContent = countleft;
}
leftReset.onclick = function(){
    countleft = 0;
    scoreLabel1.textContent = countleft;
}
//right side
const rightPlus1Btn = document.getElementById("rightplus1");
const rightPlus2Btn = document.getElementById("rightplus2");
const rightPlus3Btn = document.getElementById("rightplus3");
const rightMinus1Btn = document.getElementById("rightminus1");
const rightReset = document.getElementById("rightreset");
const scoreLabel2 = document.getElementById("scorelabel2");
countright = 0;

rightPlus1Btn.onclick = function(){
    countright++;
    scoreLabel2.textContent = countright;
}
rightPlus2Btn.onclick = function(){
    countright+=2;
    scoreLabel2.textContent = countright;
}
rightPlus3Btn.onclick = function(){
    countright+=3;
    scoreLabel2.textContent = countright;
}
rightMinus1Btn.onclick = function(){
    countright--;
    scoreLabel2.textContent = countright;
}
rightReset.onclick = function(){
    countright = 0;
    scoreLabel2.textContent = countright;
}