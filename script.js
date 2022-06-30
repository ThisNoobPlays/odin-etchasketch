const container = document.querySelector(".container");

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.gridColumnStart = j + 1;
        div.style.gridColumnEnd = j + 2;

        div.addEventListener("mouseover", (e) => {
            div.style.backgroundColor = "black";
        })

        container.appendChild(div);
    }
}