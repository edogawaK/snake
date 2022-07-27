/* eslint-disable no-undef */
function drawX(begin = 0) {
    for (let i = begin; i < canvas.width; i += sizeGrid) {
        ctx.beginPath();
        ctx.strokeStyle = "#76BA99";
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.closePath();
        ctx.stroke();
        ctx.closePath();
    }
}
function drawY(begin = 0) {
    for (let i = begin; i <= canvas.height; i += sizeGrid) {
        ctx.beginPath();
        ctx.strokeStyle = "#76BA99";
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.closePath();
        ctx.stroke();
        ctx.closePath();
    }
}