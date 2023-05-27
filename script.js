let music = new Audio('music.mp3');
let audioTurn = new Audio('ting.mp3');
let gameover = new Audio('gameover.mp3');
let turn = 'X';
let isGameOver = false;

const changeTurn = () => turn === 'X' ? '0' : 'X';

const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    if(boxtexts[0].innerText == boxtexts[1].innerText && boxtexts[1].innerText == boxtexts[2].innerText && boxtexts[0].innerText != '')
        isGameOver = true;
    else if(boxtexts[3].innerText == boxtexts[4].innerText && boxtexts[4].innerText == boxtexts[5].innerText && boxtexts[3].innerText != '')
        isGameOver = true;
    else if(boxtexts[6].innerText == boxtexts[7].innerText && boxtexts[7].innerText == boxtexts[8].innerText && boxtexts[6].innerText != '')
        isGameOver = true;
    else if(boxtexts[0].innerText == boxtexts[3].innerText && boxtexts[3].innerText == boxtexts[6].innerText && boxtexts[3].innerText != '')
        isGameOver = true;
    else if(boxtexts[1].innerText == boxtexts[4].innerText && boxtexts[4].innerText == boxtexts[7].innerText && boxtexts[1].innerText != '')
        isGameOver = true;
    else if(boxtexts[2].innerText == boxtexts[5].innerText && boxtexts[5].innerText == boxtexts[8].innerText && boxtexts[2].innerText != '')
        isGameOver = true;
    else if(boxtexts[0].innerText == boxtexts[4].innerText && boxtexts[4].innerText == boxtexts[8].innerText && boxtexts[0].innerText != '')
        isGameOver = true;
    else if(boxtexts[2].innerText == boxtexts[4].innerText && boxtexts[4].innerText == boxtexts[6].innerText && boxtexts[2].innerText != '')
        isGameOver = true;
};

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    console.log('boxtext');
    element.addEventListener('click', () => {
        if(boxtext.innerText === '') {
            boxtext.innerText = turn;
            audioTurn.play();
            checkWin();
            if(isGameOver) {
                document.getElementsByClassName('info')[0].innerText = `${turn} won!`;
                document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '15vw';
                gameover.play();
            }
            else {
                turn = changeTurn();
                document.getElementsByClassName('info')[0].innerText = `Turn of ${turn}`;
            }
        }
    }); 
});


let resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    isGameOver = false;
    turn = 'X';
    document.querySelector('.info').innerText = `Turn of ${turn}`;
    let boxtexts = document.querySelectorAll('.boxtext');
    boxtexts.forEach(boxtext => {
        boxtext.innerText = '';
    });
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = 0;
})



