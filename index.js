const container = document.querySelector(".container");
const dimButton = document.querySelector(".dimension");
const randomButton = document.querySelector(".random");
const darker = document.querySelector(".darker");
let n = 4;
let randomColor = false;
let darkerState = false;

randomButton.addEventListener("click",
    function () {
        if (randomColor) {
            randomColor = false;
        }
        else {
            randomColor = true;
        }
    }
)

dimButton.addEventListener("click",
    function () {
        n = Number(prompt("Enter the dimension of the thing", 4));
        if (!(n > 70)) {
            container.innerHTML = "";
            gridMaker(n);
        }
        else {
            n = 70;
            container.innerHTML = "";
            gridMaker(n);

        }
    }
)

function gridMaker(n) {
    for (let i = 0; i < n * n; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `calc(100% / ${n})`;
        container.appendChild(box);
    }
}
gridMaker(n);

container.addEventListener("mousemove",
    function (e) {
        let target = e.target;
        if (target.className == "box") {
            if (randomColor == false) {
                target.style["background-color"] = "rgb(0,0,0)";
            }
            else {
                let randomNumber1 = Math.round(Math.random() * 255);
                let randomNumber2 = Math.round(Math.random() * 255);
                let randomNumber3 = Math.round(Math.random() * 255);
                target.style["background-color"] = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
            }
        }
    }
)