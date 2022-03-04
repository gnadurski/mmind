let container = document.querySelector(".container");
let board = document.querySelector(".board");
let explanation = document.querySelector(".explanation");
let tutorial = document.querySelector(".tutorial-visuals");
let textContent = document.querySelector(".tutorial-content");

let clicksBefore = 0;

function leaveTutorial() {
    container.classList.remove("dark");
    board.classList.remove("dimmed");
    explanation.classList.add("hidden");
}

function turnToFirstPage() {
    textContent.innerHTML =
        'The "goal row" will be hidden under this button. You can cheat by clicking it to reveal the color sequence early.';
    document.querySelector(".tutorial-proceed").innerHTML =
        "Click anywhere within outlined area to proceed.";
}

function turnToSecondPage() {
    textContent.innerHTML =
        'Pick a color from palette by clicking it. Chosen color will then be assigned to selected circle in your "active row".';
}

function turnToThirdPage() {
    textContent.innerHTML =
        'Your guesses history will appear here. Click the "check" button at the bottom to compare your guess with goal.';
}

function turnToFourthPage() {
    textContent.innerHTML =
        "Hints appear here. When you guess a color and its position correctly a square will turn black in that position.";
}

function turnToFifthPage() {
    textContent.innerHTML =
        "When you guess a color that appears somewhere else, a square will turn white in position, in which you placed that color";
}

function turnToSixthPage() {
    textContent.innerHTML =
        "The sooner you can guess the better! Find a consistent strategy to do so. Good luck!";
    explanation.onclick = leaveTutorial;
}

let arrayOfPages = [
    turnToFirstPage,
    turnToSecondPage,
    turnToThirdPage,
    turnToFourthPage,
    turnToFifthPage,
    turnToSixthPage,
];

function proceed() {
    arrayOfPages[clicksBefore]();
    clicksBefore++;
}

function explainGame() {
    container.classList.add("dark");
    board.classList.add("dimmed");
    tutorial.classList.remove("hidden");

    textContent.innerHTML =
        'The goal of this puzzle is to "guess" a random sequence of colors hidden behind a bar. Every time you guess wrong you will receive a hint.';

    explanation.onclick = proceed;
}