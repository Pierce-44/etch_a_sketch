const divContainer = document.querySelector(".squareContainer");

let gridxy = 100;

function drawGrid() {
    let gridSize = gridxy*gridxy;
    for (let i = 0; i < gridSize; i++) {
        const divCreator = document.createElement("div");
        divCreator.classList.add("deleteme");
        divCreator.id = "grid";
        divCreator.textContent = "";
        divContainer.appendChild(divCreator);
    };
    document.getElementById("test").style.gridTemplateColumns = "repeat(" + gridxy + ", auto)";
    document.getElementById("test").style.gridTemplateRows = "repeat(" + gridxy + ", auto)";
};

drawGrid();

document.getElementById("test").style.width = "500px";
document.getElementById("test").style.height = "500px";


//Hovering

let colorInput = document.getElementById('color');
let colorUsed = colorInput.value;

colorInput.addEventListener('input', () =>{
    colorUsed = colorInput.value;
  });

function hovering() {
    let divColor = divContainer.querySelectorAll('div')
    divColor.forEach((div) => {
        div.addEventListener("mouseenter", function(event) {
            event.target.style.backgroundColor = colorUsed;
        });
    });
};

hovering();

// Eraser

let eraser = document.querySelector('#eraser');
eraser.addEventListener('click', eraserFunction);

function eraserFunction() {
    colorUsed = "white";
};

// clear all

function drawGridLimit() {
    if (gridxy > 100 || gridxy <= 0 || isNaN(gridxy)) {
        return gridxy = 100;
    };
};

const btnClr = document.querySelector("#clearBtn");

function clearAllDrawGrid() {
    let divDelete = document.getElementsByClassName("deleteme");
    while (divDelete[0]) {
        divDelete[0].parentNode.removeChild(divDelete[0]);
    };
    let gridInput = prompt("Please enter the number of squares per side you desire \n(100 is the maximum value)");
    gridxy = Number(gridInput);
    drawGridLimit();
    drawGrid();
    hovering();
};

btnClr.addEventListener('click', clearAllDrawGrid);


function clearAllOnly() {
    let selectDivs = divContainer.querySelectorAll('div');
    selectDivs.forEach((div) => {
        div.style.backgroundColor = "white";
    });
};

const btnErase = document.querySelector("#erase");
btnErase.addEventListener('click', clearAllOnly);
