let container = document.querySelector(".container");
let board = document.querySelector(".board");
let explanation = document.querySelector(".explanation");
let tutorial = document.querySelector(".tutorial-visuals");
let textContent = document.querySelector(".tutorial-content");

let clicksBefore = 0;

function turnToFirstPage() {
    console.log("first page");

    textContent.innerHTML =
        'The "goal row" will be hidden under this button. You can cheat by clicking it to reveal the color sequence prematurely.';
    document.querySelector(".tutorial-proceed").innerHTML =
        "Click anywhere within outlined area to proceed.";
}

function turnToSecondPage() {
    console.log("second page");
}

function turnToThirdPage() {
    console.log("third page");
}

function turnToFourthPage() {
    console.log("fourth page");
}

function turnToFifthPage() {
    console.log("fifth page");
}

function turnToSixthPage() {
    console.log("sixth page");
}

let arrayOfPages = [
    turnToFirstPage,
    turnToSecondPage,
    turnToThirdPage,
    turnToFourthPage,
    turnToFifthPage,
    turnToSixthPage,
];

function explainGame() {
    container.classList.add("dark");
    board.classList.add("dimmed");
    tutorial.classList.remove("hidden");

    textContent.innerHTML =
        'The goal of this puzzle is to "guess" a random sequence of colors hidden behind a bar. Every time you guess wrong you will receive a hint.';

    explanation.onclick = proceed;
}

function proceed() {
    console.log(clicksBefore);
    arrayOfPages[clicksBefore]();
    clicksBefore++;
}

function leaveTutorial() {
    container.classList.remove("dark");
    board.classList.remove("dimmed");
    explanation.classList.add("hidden");
}