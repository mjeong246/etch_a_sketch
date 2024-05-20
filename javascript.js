//set up references
var gridContainer = document.querySelector(".gridContainer");
var resizeButton = document.querySelector(".resizeButton");
var resetButton = document.querySelector(".resetButton");
var gridSize = 16;

//makes the grie (as a flexbox)
function makeGrid() {
    for (let i = 0; i < gridSize; i++) {
        var rowContainer = document.createElement("div");
        rowContainer.classList.add("rowContainer");
        for (let j = 0; j < gridSize; j++) {
            var cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseover", hoverFill);
            rowContainer.appendChild(cell)
        }
        gridContainer.appendChild(rowContainer);
    }
}

function hoverFill (event) {
    var cell = event.target;
    cell.style.backgroundColor = "black";
}

function clearGrid() {
    while (gridContainer.lastChild != null) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function resize(event) {
    let newGridSize = prompt("Please enter a grid size from 1 to 64 (inclusive)");
    gridSize = newGridSize;
    clearGrid();
    makeGrid();
}

function reset(event) {
    clearGrid();
    makeGrid();
}

resizeButton.addEventListener("click", resize);
resetButton.addEventListener("click", reset);

makeGrid();



