document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gridCanvas");
    const ctx = canvas.getContext("2d");

    const matrix = [
        ['r', 'g', 'b', 'r', 'g', 'b', 'r', 'g', 'b', 'r'],
        ['g', 'b', 'r', 'g', 'b', 'r', 'g', 'b', 'r', 'g'],
        ['b', 'r', 'g', 'b', 'r', 'g', 'b', 'r', 'g', 'b'],
        ['r', 'g', 'b', 'r', 'g', 'b', 'r', 'g', 'b', 'r'],
        ['g', 'b', 'r', 'g', 'b', 'r', 'g', 'b', 'r', 'g'],
        ['b', 'r', 'g', 'b', 'r', 'g', 'b', 'r', 'g', 'b'],
        ['r', 'g', 'b', 'r', 'g', 'b', 'r', 'g', 'b', 'r'],
        ['g', 'b', 'r', 'g', 'b', 'r', 'g', 'b', 'r', 'g'],
        ['b', 'r', 'g', 'b', 'r', 'g', 'b', 'r', 'g', 'b'],
        ['r', 'g', 'b', 'r', 'g', 'b', 'r', 'g', 'b', 'r']
    ];

    drawMatrix(ctx, canvas.width, canvas.height, matrix);
});

function drawMatrix(ctx, canvasWidth, canvasHeight, matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const cellWidth = canvasWidth / cols;
    const cellHeight = canvasHeight / rows;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const color = getColor(matrix[row][col]);
            ctx.fillStyle = color;
            ctx.fillRect(col * cellWidth, row * cellHeight, cellWidth, cellHeight);
        }
    }
}

function getColor(value) {
    return value === 'r' ? 'red' : value === 'g' ? 'green' : value === 'b' ? 'blue' : 'white';
}
