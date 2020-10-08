let root = document.documentElement;
const canvasDraw = document.getElementById('canvas')
let gridSize = document.getElementById("gridSize");
let color = 'black'
let favColor = document.getElementById('favcolor')

gridSize.addEventListener('change', (event) => {
    if (gridSize.value > 100) return
    removeGrid()
    root.style.setProperty('--box-height', 500/gridSize.value + "px");
    root.style.setProperty('--box-width', 500/gridSize.value + "px");
    drawGrid(gridSize.value)
});

let button = document.getElementById('clear')
button.addEventListener('click', (e) => {
    removeGrid()
    drawGrid(gridSize.value || 16)
})
favColor.addEventListener('change', (e) => {
    color = favColor.value
})


drawGrid(16);




function drawGrid(num) {
    for (let i = 0; i < num ** 2; i++) {
        let box = document.createElement('div')
        box.classList.add('box')
        box.addEventListener("mousemove", (e) => {
            e.target.style.backgroundColor = color;
        });
        canvasDraw.appendChild(box);
    }
}

function removeGrid() {
    document.getElementById('canvas').innerHTML = '';
}
