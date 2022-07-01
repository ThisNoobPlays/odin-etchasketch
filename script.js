const container = document.querySelector(".container");
const button = document.querySelector(".newgrid-button");

button.addEventListener("click", (e) => {
    let dimensions = prompt("How many squares per side?")
    if (dimensions > 100) {
        return;
    }

    generateGrid(dimensions);
})

generateGrid(4);

function generateGrid(dimension) {
    container.innerHTML = "";
    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            const div = document.createElement("div");
            div.classList.add("square");
            div.style.gridColumnStart = j + 1;
            div.style.gridColumnEnd = j + 2;

            div.style.width = 960 / dimension;
            div.style.height = 960 / dimension;
            div.style.backgroundColor = "white";

            div.addEventListener("mouseover", (e) => {
                if (div.style.backgroundColor == "white") {
                    let red = Math.floor(Math.random() * 256);
                    let blue = Math.floor(Math.random() * 256);
                    let green = Math.floor(Math.random() * 256);
                    div.style.backgroundColor = `rgb(${red},${green},${blue})`;
                    div.dataset.redDiminish = red / 10;
                    div.dataset.greenDiminish = green / 10;
                    div.dataset.blueDiminish = blue / 10;
                } else {
                    let reduction = div.style.backgroundColor.slice(4, -1);
                    let colorsArray = reduction.split(",");
                    div.style.backgroundColor = `rgb(${parseInt(colorsArray[0]) - div.dataset.redDiminish}, ${parseInt(colorsArray[1]) - div.dataset.greenDiminish}, ${parseInt(colorsArray[0]) - div.dataset.blueDiminish})`
                }
            })

            container.appendChild(div);
        }
    }
}