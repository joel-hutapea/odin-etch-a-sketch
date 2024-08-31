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
            block.style.opacity = 0;
    
            block.addEventListener("mouseover", function() {
                const randomColor = getRandomRgbColor();
                block.style.backgroundColor = randomColor;
                let opacity = Number(block.style.opacity);
                if (opacity < 1) {
                    opacity += 0.1;
                    block.style.opacity = opacity;
                }
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

function getRandomRgbColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}