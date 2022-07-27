/* eslint-disable no-undef */
function renderSnake() {
    Vposition = {
        x: gameWidth / 2,
        y: gameHeight / 2,
    }
    snakeBody = [Vposition];
    for (let i = 0; i < 10; i++) {
        eat();
    }
}
function eat() {
    let newBody = {
        x: snakeBody[snakeBody.length - 1].x,
        y: snakeBody[snakeBody.length - 1].y
    };
    snakeBody.push(newBody);
    foodNumber--;
}
function drawEye(head) {
    ctx.beginPath();
    ctx.arc(head.x, head.y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.strokeStyle = 'red';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(head.x, head.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.strokeStyle = 'red';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawCenter(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "#06FF00";
    ctx.strokeStyle = 'red';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
function drawSnake() {
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    for (let i = snakeBody.length - 1; i >= 0; i--) {
        let data = convertV2P(snakeBody[i]);
        drawCenter(data.spaceX + centerX, data.spaceY + centerY);
    }
    drawEye({ x: centerX, y: centerY });
}