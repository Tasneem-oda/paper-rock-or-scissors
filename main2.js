let computerChoise = document.querySelector('.computer');
function computerChoice(){
    array = ['paper', 'rock','scissors'];
    let random = Math.floor(Math.random()*array.length);
    computerChoise.innerHTML = array[random];
}
computerChoice();
let paper = document.querySelector('.paper');
let rock = document.querySelector('.rock');
let scissors = document.querySelector('.scissors');
let yourChoise = document.querySelector('.you');
paper.addEventListener('click', ()=>{
    yourChoise.innerHTML = paper.textContent;
    computerChoice()
    result()
});
rock.addEventListener('click', ()=>{
    yourChoise.innerHTML = rock.textContent;
    computerChoice()
    result()
});
scissors.addEventListener('click', ()=>{
    yourChoise.innerHTML = scissors.textContent;
    computerChoice()
    result()
})
let resultTag = document.querySelector('.result')
function result(){
    if ( computerChoise.innerHTML==='rock' && yourChoise.innerHTML ==='paper'){
        resultTag.innerHTML ='you win!'
    }
    if ( computerChoise.innerHTML==='rock' && yourChoise.innerHTML ==='scissors'){
        resultTag.innerHTML ='you lose!'
    }
    if ( computerChoise.innerHTML==='paper' && yourChoise.innerHTML ==='rock'){
        resultTag.innerHTML ='you lose!'
    }
    if ( computerChoise.innerHTML=='paper' && yourChoise.innerHTML ==='scissors'){
        resultTag.innerHTML ='you win!'
    }
    if ( computerChoise.innerHTML=='scissors' && yourChoise.innerHTML ==='paper'){
        resultTag.innerHTML ='you lose!'
    }if ( computerChoise.innerHTML=='scissors' && yourChoise.innerHTML ==='rock'){
        resultTag.innerHTML ='you win!'
    }if ( computerChoise.innerHTML==yourChoise.innerHTML ){
        resultTag.innerHTML ='it is a drow'
    }
}
result()
