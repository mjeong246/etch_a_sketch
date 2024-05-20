//set up references
var gridContainer = document.querySelector(".gridContainer");
var resizeButton = document.querySelector(".resizeButton");
var gridSize = 64;

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
    console.log("CHANGED");
}

makeGrid();


resizeButton.addEventListener("click", resize);

function resize(event) {
    console.log("Resize called");
}




