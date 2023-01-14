function startGame() {

    var chessboard = document.getElementById('chessboard');
    for (var i = 0; i < 8; i++) {
        
        for (var j = 0; j < 8; j++) {

            var chessSquare = document.createElement('div');
            chessSquare.className = 'chess-square';
            if ((i + j) % 2 == 0) {
                chessSquare.style.backgroundColor = '#000';

            }
            chessboard.appendChild(chessSquare);
            chessSquare.setAttribute('id' ,`${i+1}${String.fromCharCode(j+65)}`)
        }
    }
let scoreCounter =1 ;
let timeCounter = 30;
const num = [1,2,3,4,5,6,7,8];
const chars = ["A", "B", "C", "D", "E", "F", "G", "H"];
function getNewPressedKeys () {
    return Math.floor(Math.random()*7) 
}
let pattern = `${num[getNewPressedKeys()]}${chars[getNewPressedKeys()]}`;
    document.querySelector('.pattern').innerHTML = `${pattern}`

function handler (event) {
        if ((event.target.id) === pattern) {
            document.querySelector('.score').innerHTML = `Score:${scoreCounter++}`
            pattern = `${num[getNewPressedKeys()]}${chars[getNewPressedKeys()]}`;
            document.querySelector('.pattern').innerHTML = `${pattern}`
            document.querySelector('.status').innerHTML = `Correct`
            document.querySelector('.status').style.color = `green`
        } else {
            document.querySelector('.status').innerHTML = `Wrong`
            document.querySelector('.status').style.color = `red`
        }
    }
chessboard.addEventListener('click',handler);

let timeId =setInterval(()=> {
    document.querySelector('.timer').innerHTML = `Timer: ${timeCounter--} Sec`
    if (timeCounter === 0) {
        clearInterval(timeId);
        chessboard.removeEventListener('click',handler);
        document.querySelector('.text').innerHTML = `Your Score is ${scoreCounter}`
    }
},1000)
}

