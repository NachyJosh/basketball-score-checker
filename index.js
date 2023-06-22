 let homePoint = document.getElementById("home-point")
 let awayPoint = document.getElementById("away-point")

increaseHome = 15
increaseAway = 7



function add1(){
    increaseAway += 1
    awayPoint.textContent = increaseAway
     
}
function add2(){
    increaseAway += 2
    awayPoint.textContent = increaseAway
     
}
function add3(){
    increaseAway += 3
    awayPoint.textContent = increaseAway
     
}
 
 function getCurrentHomeScore(){
     return parseInt(document.getElementById("home-point").textContent)
 }
 function addToHomeScore(num){
     let currentHomeScore = getCurrentHomeScore() + num
     document.getElementById("home-point").textContent = currentHomeScore
}

