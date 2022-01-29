//console.log("It's working!")
let goalSequence;
let workSequence;
let indication;
let selection = document.querySelector(".selected");
let seqHeight = 0;

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

goalSequence = randomSequence();

// translate sequences
function toColors(clay) {
    let result = ["gray", "gray", "gray", "gray"];
    for (let i = 0; i < 4; i++) {
        let colorNumber = clay.toString()[i];
        switch (colorNumber) {
            case "1":
                result[i] = "red";
                break;
            case "2":
                result[i] = "green";
                break;
            case "3":
                result[i] = "blue";
                break;
            case "4":
                result[i] = "white";
                break;
            case "5":
                result[i] = "black";
                break;
            case "6":
                result[i] = "yellow";
                break;
            case "7":
                result[i] = "purple";
                break;
            case "8":
                result[i] = "orange";
                break;
            case "9":
                result[i] = "gray";
                break;
            case "0":
                console.log("There was a 0 where it shouldn't be, watch out!");
                break;
        }
    }
    return result;
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
            .classList.add(toColors(goalSequence)[i]);
    }
    document.querySelector(".hidden").classList.remove("hidden");
    document.querySelector(".reroll").classList.remove("hidden");
    document.querySelector(".reveal").classList.add("hidden");
}

document.getElementsByClassName("reveal")[0].onclick = reveal;

// attach reset function to try again button
function reroll() {
    document.querySelector(".hidden").classList.remove("hidden");
    document.querySelector(".reroll").classList.add("hidden");
    document.querySelector(".goal").classList.add("hidden");
    goalSequence = randomSequence();
}
document.getElementsByClassName("reroll")[0].onclick = reroll;

// pick a circle to change color
document.querySelectorAll(".active-row>.p-color").forEach((item) => {
    item.addEventListener("click", (e) => {
        // click selected colored circle to make it gray
        if (selection === e.target) {
            selection.classList.remove(selection.classList[1]);
            selection.classList.add("gray");
        } //
        selection.classList.remove("selected");
        e.target.classList.add("selected");
        selection = e.target;
    });
});

// select color for picked circle
function replaceColor(event) {
    selection.classList.remove(selection.classList[1], "selected");
    selection.classList.add(event.target.classList[1]);
    if (selection.nextElementSibling === null) {
        selection = document.querySelector(".active-row>.p-color");
        selection.classList.add("selected");
    } else {
        selection.nextElementSibling.classList.add("selected");
        selection = selection.nextElementSibling;
    }
}
document.querySelectorAll(".palette>.flex-row>.p-color").forEach((item) => {
    item.addEventListener("click", (e) => {
        replaceColor(e);
    });
});

// compare guessed sequence with randomized one

// output hints according to guessing's accuracy

// check if game over conditions are met
if (workSequence === goalSequence) {
    window.confirm(`Congratulations! You've guessed on ${seqHeight}th line!`);
    seqHeight = 0;
}