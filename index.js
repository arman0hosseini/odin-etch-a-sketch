function randomNumber(n) {
    return Math.floor(Math.random() * n);
}

function setGrid(n) {
    for (let i = 0; i < n * n; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `calc(100% / ${n})`;
        container.appendChild(box);
    }
}

//Default Grid
const container = document.querySelector(".display");
let n = 4;
setGrid(4);


//Buttons ----------
//Dimension Button
const dimensionBtn = document.querySelector(".dimension");
dimensionBtn.addEventListener("click",
    function () {
        let userInput = Number(prompt("Enter the dimension of the board"));
        if (userInput >= 70) {
            container.innerHTML = "";
            setGrid(70);
        }
        else {
            container.innerHTML = "";
            setGrid(userInput);
        }
    }
)


//Pen Button
const penBtn = document.querySelector(".pen");
let penBtnState = true;
penBtn.addEventListener("click",
    function () {
        if (penBtnState) {
            penBtnState = false;
            penBtn.style["background-color"] = "lightcoral";
        }
        else {
            penBtnState = true;
            penBtn.style["background-color"] = "lightgreen";
            randomBtnState = false;
            randomBtn.style["background-color"] = "lightcoral";
            eraserBtnState = false;
            eraserBtn.style["background-color"] = "lightcoral";
            darkBtnState = false;
            darkBtn.style["background-color"] = "lightcoral";

        }
    }
)

//Optional Eraser Button
const eraserBtn = document.querySelector(".eraser");
let eraserBtnState = false;
eraserBtn.addEventListener("click",
    function () {
        if (eraserBtnState) {
            eraserBtnState = false;
            eraserBtn.style["background-color"] = "lightcoral";
        }
        else {
            eraserBtnState = true;
            eraserBtn.style["background-color"] = "lightgreen";
            penBtnState = false;
            penBtn.style["background-color"] = "lightcoral";
            randomBtnState = false;
            randomBtn.style["background-color"] = "lightcoral";
            darkBtnState = false;
            darkBtn.style["background-color"] = "lightcoral";

        }
    }
)

//Darkener Button
const darkBtn = document.querySelector(".darkener");
let darkBtnState = false;
darkBtn.addEventListener("click",
    function () {
        if (darkBtnState) {
            darkBtnState = false;
            darkBtn.style["background-color"] = "lightcoral";
        }
        else {
            darkBtnState = true;
            darkBtn.style["background-color"] = "lightgreen";
            randomBtnState = false;
            randomBtn.style["background-color"] = "lightcoral";
            eraserBtnState = false;
            eraserBtn.style["background-color"] = "lightcoral";
            penBtnState = false;
            penBtn.style["background-color"] = "lightcoral";
        }
    }
)

//Random Button
const randomBtn = document.querySelector(".random");
let randomBtnState = false;
randomBtn.addEventListener("click",
    function () {
        if (randomBtnState) {
            randomBtnState = false;
            randomBtn.style["background-color"] = "lightcoral";
        }
        else {
            randomBtnState = true;
            randomBtn.style["background-color"] = "lightgreen";
            penBtnState = false;
            penBtn.style["background-color"] = "lightcoral";
            eraserBtnState = false;
            eraserBtn.style["background-color"] = "lightcoral";
            darkBtnState = false;
            darkBtn.style["background-color"] = "lightcoral";
        }
    }
)



//Mouse Move Behavior
container.addEventListener("mouseover",
    function (event) {
        const target = event.target;
        if (target.className == "box") {
            if (penBtnState) {
                target.style["background-color"] = "rgb(0,0,0)";
            }
            else if (randomBtnState) {
                target.style["background-color"] = `rgb(${randomNumber(256)},${randomNumber(256)},${randomNumber(256)})`;
            }
            else if (eraserBtnState) {
                target.style["background-color"] = `rgb(255,255,255)`;
            }
            else if (darkBtnState) {
                target.style["background-color"] = darkenerPen(target);
            }
        }
    }
)




//Darkener Functio
/**
 * 
 * @param {Element} targetElement 
 */
function darkenerPen(targetElement) {
    let currentCSSValue = targetElement.style["background-color"];
    if (!currentCSSValue) {
        currentCSSValue = "rgb(255,255,255)";
    }
    const pFirstIndex = currentCSSValue.indexOf("(");
    const pLastIndex = currentCSSValue.lastIndexOf(")");
    let colors = currentCSSValue.slice(pFirstIndex + 1, pLastIndex);
    let colorArray = colors.split(",");
    let newColorArray = colorArray.map(
        function (value) {
            console.log(value);
            return Math.floor(Number(value) - 25);
        }
    )
    return `rgb(${newColorArray.join(",")})`
}