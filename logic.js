const container = document.querySelector("#container");
const newGridButton = document.querySelector("#new-grid-button");

newGridButton.addEventListener("click", generateNewGrid);

const space = 960;

generateGrid(4);

function generateGrid(blocksPerSide) {
    for (i = 0; i < blocksPerSide; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
    
        for (n = 0; n < blocksPerSide; n++) {
            const block = document.createElement("div");
            block.style.width = `${space/blocksPerSide}px`;
            block.style.height = `${space/blocksPerSide}px`;
    
            block.addEventListener("mouseover", function() {
                block.classList.add("hover-on");
            })
    
            row.appendChild(block);
        }
    
        container.appendChild(row);
    }
}

function generateNewGrid() {
    let newSides = prompt("Number of squares per side? (2-100)");
    newSides = Number(newSides);
    if (!Number.isInteger(newSides) || newSides > 100 || newSides < 2) {
        alert("Invalid input");
    } else {
        container.textContent = "";
        generateGrid(newSides);
    }
}