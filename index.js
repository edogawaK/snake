/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
let canvas = document.querySelector('canvas');
let timeArea = document.querySelector('.game__time');
let foodArea = document.querySelector('.game__food');
let buttonPlay = document.querySelector('.game__button');
let sound = document.querySelector('.game__sound');
canvas.width = 1000;
canvas.height = 500;
let ctx = canvas.getContext('2d');
ctx.lineWidth = 0.1;
let position = {
    x: canvas.width / 2,
    y: canvas.height / 2
};
let direct = {
    right: true,
    up: true
};
let Vposition = {
    x: gameWidth / 2,
    y: gameHeight / 2,
}
let snakeBody = [Vposition];
canvas.addEventListener('mousemove', (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    updateUnit(x, y);
});
function convertV2P(v) {
    console.log()
    return {
        spaceX: v.x - snakeBody[0].x,
        spaceY: v.y - snakeBody[0].y,
    };
}
function updateUnit(x, y) {
    angile = Math.atan2(
        y - (canvas.height / 2),
        x - (canvas.width / 2)
    );
}
function updateVposition() {
    let newBody = {
        x: snakeBody[0].x + Math.floor(Math.cos(angile) * speed),
        y: snakeBody[0].y + Math.floor(Math.sin(angile) * speed)
    };
    snakeBody.unshift(newBody);
    snakeBody.pop();
}

function renderFood() {
    food=[];
    for (let i = 0; i < foodNumber; i++) {
        food[i] = {
            x: Math.floor(Math.random() * 1000),
            y: Math.floor(Math.random() * 1000),
        };
    }

}
function drawFood() {
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    for (let i = 0; i < food.length; i++) {
        let data = convertV2P(food[i]);
        ctx.beginPath();
        ctx.arc(data.spaceX + centerX, data.spaceY + centerY, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "#FFDEB4";
        ctx.fill();
    }
}

function game() {
    if (time > 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawFood(250, 250);
        drawX(sizeGrid - snakeBody[0].x % sizeGrid);
        drawY(sizeGrid - snakeBody[0].y % sizeGrid);
        drawSnake();
        for (let i = 0; i < food.length; i++) {
            if (Math.abs(food[i].x - snakeBody[0].x) < 20 && Math.abs(food[i].y - snakeBody[0].y) < 20) {
                {
                    eat();
                    food[i].x = Math.floor(Math.random() * 5000);
                    food[i].y = Math.floor(Math.random() * 5000);
                }
            }
        }
        updateVposition();
        foodArea.innerHTML = `Trân châu còn: ${foodNumber}`;
        window.requestAnimationFrame(game);
    }
}

function renderGame(){
    time=60;
    foodNumber=100;
    renderFood();
    renderSnake();
    sound.play();
}
function play() {
    renderGame();
    timer = setInterval(() => {
        time--;
        timeArea.innerHTML = `Thời gian: ${time}`;
        if (time <= 0) {
            clearInterval(timer);
            if(foodNumber==0){
                alert("Win");
            }
            else{
                alert("Snake said: 'Loser!'");
            }
            sound.pause();
        }
    }, 1000);
    window.requestAnimationFrame(game);
}
buttonPlay.onclick=play;