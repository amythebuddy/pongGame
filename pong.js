const ball = document.getElementById('ball');
const board = document.querySelector('.board');
const maxX = board.clientWidth - ball.clientWidth;
const maxY = board.clientHeight - ball.clientHeight;
let xDirection = 1;
let yDirection = 1;

function init(){
    setInterval(frame, 5);
    
}
function handleCollision(){

}
function frame(){
    handleCollision();
    ball.style.top = ball.offsetTop + yDirection;
    ball.style.left = ball.offsetLeft + xDirection;
}
init();