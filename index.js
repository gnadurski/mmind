//console.log("It's working!")
let goalSequence;
let workSequence;
let indication;
let selection = document.querySelector(".selected");

// class ColorSequence {
//     constructor(options) {
//         const defaultSequence = {
//             first: "gray",
//             second: "gray",
//             third: "gray",
//             fourth: "gray",
//             toCode: function() {
//                 let encodedSequence = 0;
//                 for (let i = 3; i >= 0; i--) {
//                     switch (valueOf.position) {
//                         case "first":
//                             encodedSequence += (1 * 10) ^ i;
//                             break;
//                         case "second":
//                             encodedSequence += (2 * 10) ^ i;
//                             break;
//                         case "blue":
//                             encodedSequence += (3 * 10) ^ i;
//                             break;
//                         case "red":
//                             encodedSequence += (4 * 10) ^ i;
//                             break;
//                         case "green":
//                             encodedSequence += (5 * 10) ^ i;
//                             break;
//                         case "blue":
//                             encodedSequence += (6 * 10) ^ i;
//                             break;
//                         case "green":
//                             encodedSequence += (7 * 10) ^ i;
//                             break;
//                         case "blue":
//                             encodedSequence += (8 * 10) ^ i;
//                             break;
//                         case "gray":
//                             encodedSequence += (9 * 10) ^ i;
//                             break;
//                     }

//                     digitPosition -= 1;
//                 }
//                 return encodedSequence;
//             },
//         };

//         const populated = Object.assign(defaultSequence, options);
//         for (const key in populated) {
//             if (populated.hasOwnProperty(key)) {
//                 this[key] = populated[key];
//             }
//         }
//     }
// }
// const TestSequence = new ColorSequence({
//     first: "red",
//     second: "yellow",
//     fourth: "black",
// });

function readColor(colVal) {
    let colorFinally;
    switch (colVal) {
        case 1:
            colorFinally = "red";
            break;

        case "2":
            colorFinally = "green";
            break;

        case "3":
            colorFinally = "blue";
            break;

        case "4":
            colorFinally = "white";
            break;

        case "5":
            colorFinally = "black";
            break;

        case "6":
            colorFinally = "yellow";
            break;

        case "7":
            colorFinally = "purple";
            break;

        case "8":
            colorFinally = "orange";
            break;

        case "9":
            colorFinally = "gray";
            break;
    }
    return colorFinally;
}

function toColor(colorCode) {
    let rowArray = ["gray", "gray", "gray", "gray"];
    let colorDigit;
    for (let i = 0; i < 4; i++) {
        colorDigit = toString(colorCode);
        rowArray[i] = readColor(colorDigit[i]);
    }
    return rowArray;
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

goalSequence = randomSequence();

// reveal goal sequence on reveal button click
function reveal() {
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

// game over conditions