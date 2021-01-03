'use strict';

let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
// document.querySelector('.number').textContent=secretNumber;
document.querySelector('.again').addEventListener('click',function(){
    // document.location.reload(true);
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').style.width="15rem";
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.number').textContent='?';
    secretNumber=Math.trunc(Math.random()*20)+1;

});
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
    document.querySelector('.message').textContent='⛔ No number';
   }
   else if(guess===secretNumber){
       document.querySelector('.message').textContent='🎉 Correct Number!';
       document.querySelector('body').style.backgroundColor="#60b347";
       document.querySelector('.number').style.width="30rem";
       document.querySelector('.number').textContent=secretNumber;
       if(score>highscore){
           highscore=score;
       }
       document.querySelector('.highscore').textContent=highscore;
   }
   else if(guess>secretNumber){
       if(score > 0){
        document.querySelector('.message').textContent='📈 Too high';
        score--;
        document.querySelector('.score').textContent=score;
      }
      else{
          document.querySelector('.message').textContent="😧 You lost the game!";
      }    
   }
   else if(guess<secretNumber){
    if(score>0){
    document.querySelector('.message').textContent='📉 Too Low!';
    score--;
    document.querySelector('.score').textContent=score;
 } 
 else{
     document.querySelector('.message').textContent="😧 You lost the game!";
 }   
   }
});





