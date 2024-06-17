let computerChoise = document.querySelector('.computer');
let yourChoise = document.querySelector('.you');
let resultTag = document.querySelector('.result');
let buttons = document.querySelectorAll('button');
let random;
buttons.forEach( button=> button.addEventListener('click', function(e){
    // e.preventDefault()
    yourChoise.innerHTML = button.innerText;
    randomChoise();
    result()
})
)
function randomChoise(){
    random = Math.floor(Math.random() * 3)+ 1 ;

    if(random =='1'){
    computerChoise.innerHTML='rock'
}
if(random =='2'){
    computerChoise.innerHTML = 'paper'
}
 if (random == '3'){
    computerChoise.innerHTML = 'scissors'
}
}
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

