let PlayerOne = document.querySelector('#PlayerOne')
let PlayerTwo = document.querySelector('#PlayerTwo')

let p1=document.querySelector('#Player_one_button')
let p2=document.querySelector('#Player_two_button')
let reset=document.querySelector('#Reset')
let ToWin=document.querySelector('#ToWin')

let p1score=0;
let p2score=0;

let target=1;
let GameOver=true;
p1.addEventListener('click',function (){
    if(GameOver==true)
    {
        p1score++
        PlayerOne.textContent = p1score
        if(p1score==target)
        {
            GameOver=false;
            PlayerOne.classList.add('has-text-success')
            PlayerTwo.classList.add('has-text-danger')
            Player_one_button.disabled = true
            Player_two_button.disabled = true
        }

    }
})

p2.addEventListener('click',function (){
    if(GameOver==true)
    {
        p2score++
        PlayerTwo.textContent = p2score
        if(p2score==target)
        {
            GameOver=false;
            PlayerOne.classList.add('has-text-danger')
            PlayerTwo.classList.add('has-text-success')
            Player_one_button.disabled = true
            Player_two_button.disabled = true
        }
    }
})

reset.addEventListener('click',function (){
    GameOver=true
    p1score=0
    p2score=0
    PlayerOne.classList.remove('has-text-danger' ,'has-text-success')
    PlayerTwo.classList.remove('has-text-danger','has-text-success')
    PlayerOne.textContent = 0
    PlayerTwo.textContent = 0
    Player_one_button.disabled = false
    Player_two_button.disabled = false

})

ToWin.addEventListener('change',function(){
    GameOver=true
    p1score=0
    p2score=0
    PlayerOne.classList.remove('has-text-danger' ,'has-text-success')
    PlayerTwo.classList.remove('has-text-danger','has-text-success')
    PlayerOne.textContent = 0
    PlayerTwo.textContent = 0
    Player_one_button.disabled = false
    Player_two_button.disabled = false
    target= parseInt(this.value)
})
