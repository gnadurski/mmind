//console.log("It's working!")

let goalSequence;
let workSequence = ["gray", "gray", "gray", "gray"];
let indication;
let selection = document.querySelector(".selected");
let seqHeight = 1;

// initialize
function startInitialize() {
    randomiseAgain();
    activateRow(); //first row becomes active
    document.querySelectorAll(".palette>.flex-row>.p-color").forEach((item) => {
        item.addEventListener("click", handlePaletteClick);
    });

    // color palette recognizing clicks
    function handlePaletteClick(colorClicked) {
        replaceColor(colorClicked);
    }

    document.getElementsByClassName("reveal")[0].onclick = reveal; // reveal button
    document.getElementsByClassName("reroll")[0].onclick = reroll; // reroll button
    document
        .getElementsByClassName("button-ask")[0]
        .addEventListener("click", compareGuess); // check button compare

    document
        .getElementsByClassName("button-ask")[0]
        .addEventListener("click", checkGameOver); // check button game over
}

// randomize a sequence of colors
function randomColor() {
    return Math.floor(Math.random() * 8 + 1);
}

function randomSequence() {
    return (
        randomColor() * 1000 +
        randomColor() * 100 +
        randomColor() * 10 +
        randomColor()
    );
}

function randomiseAgain() {
    goalSequence = randomSequence();
}

// reveal goal sequence on reveal button click
function reveal() {
    // loop 4 times
    for (let i = 0; i < 4; i++) {
        // reset circle's classes giving it color
        document.querySelector(`ul.goal > li:nth-child(${i + 1})`).className =
            "p-color";
        // assign a circle it's randomized color
        document
            .querySelector(`ul.goal > li:nth-child(${i + 1})`)
            .classList.add(toCol(goalSequence.toString())[i]);
    }
    document.querySelector(".hidden").classList.remove("hidden");
    document.querySelector(".reroll").classList.remove("hidden");
    document.querySelector(".reveal").classList.add("hidden");
}

// attach reset function to try again button
function reroll() {
    document.querySelector(".hidden").classList.remove("hidden");
    document.querySelector(".reroll").classList.add("hidden");
    document.querySelector(".goal").classList.add("hidden");
    randomiseAgain();
}

// pick a circle to change color
function activateRow() {
    document.querySelectorAll(".active-row>.p-color").forEach((item) => {
        item.addEventListener("click", handleSelectionClick);
    });
}

function handleSelectionClick(e) {
    // click selected colored circle to make it gray
    if (e.target === selection) {
        selection.className = "p-color gray selected";
    } else {
        document.querySelector(".selected").classList.remove("selected");
        e.target.classList.add("selected");
    }
    selection = e.target;
}
/* function deactivateRow() {
    document.querySelectorAll(".active-row>p.color").forEach((item) => {
        item.removeEventListener("click");
    });
}*/

// select color for picked circle
function replaceColor(event) {
    selection.classList.remove(selection.classList[1], "selected");
    selection.classList.add(event.target.classList[1]);
    if (selection.nextElementSibling === null) {
        selection = document.querySelector(".active-row>.p-color");
        selection.classList.add("selected");
    } else {
        selection.nextElementSibling.classList.add("selected");
        selection = document.querySelector(".selected");
    }
}

// compare guessed sequence with randomized one
function compareGuess() {
    // hints stored: n -> color not found, w -> color in wrong position, b -> color correct
    let hintResult = ["n", "n", "n", "n"];
    // to make it easier, first remove selection
    document.querySelector(".selected").classList.remove("selected");
    // read color class names of circles
    let givenCols = [
        document.querySelector(`div.rows > ul.active-row > li:nth-child(${1})`)
        .classList[1],
        document.querySelector(`div.rows > ul.active-row > li:nth-child(${2})`)
        .classList[1],
        document.querySelector(`div.rows > ul.active-row > li:nth-child(${3})`)
        .classList[1],
        document.querySelector(`div.rows > ul.active-row > li:nth-child(${4})`)
        .classList[1],
    ];
    for (let i = 0; i < 4; i++) {
        let hintPos = 0;
        if (toCol(goalSequence).find((element) => element === givenCols[i])) {
            if (givenCols[i] === toCol(goalSequence)[i]) {
                hintResult[hintPos] = "b";
                hintPos++;
            } else {
                hintResult[hintPos] = "w";
                hintPos++;
            }
        }
        console.log(hintResult);
    }
    moveRowUp();
}

// activate next row and mark it's first circle as selected
function moveRowUp() {
    document.querySelectorAll(".active-row>.p-color").forEach((item) => {
        item.removeEventListener("click", handleSelectionClick);
    });
    document.querySelector("ul.active-row").classList.remove("active-row");

    function testedFunc() {
        console.log("surprisingly, it works");
    }

    let nextRow = document.querySelector(
        `div.rows > ul:nth-child(${9 - seqHeight})`
    );
    if (nextRow === null) {
        console.log("There is no next row");
    } else {
        nextRow.classList.add("active-row");
        seqHeight++;
        document.querySelector("ul.active-row > li").classList.add("selected");
        selection = document.querySelector(".selected");
    }
    activateRow();
}

// output hints according to guessing's accuracy

// check if game over conditions are met
function checkGameOver() {
    for (let i = 0; i < 4; i++) {
        workSequence[i] = document.querySelectorAll(".active-row>p-color")[i];
    }
    if (workSequence === goalSequence) {
        window.confirm(`Congratulations! You've guessed on ${seqHeight}th line!`);
        seqHeight = 1;
        reroll();
    } else if (document.querySelector(".active-row") === null) {
        window.confirm(`Ran out of guesses, try again?`);
        reroll();
    } else {
        console.log("Something went wrong with game over conditions");
    }
}

startInitialize();