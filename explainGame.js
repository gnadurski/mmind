function explainGame() {
    document.querySelector(".container").classList.add("dark");
    document.querySelector(".board").classList.add("dimmed");
    document.querySelector(".explanation").classList.remove("hidden");

    document.querySelector(".tutorial-content").innerHTML =
        "Click anywhere within this gray area to proceed";

    document.querySelector(".explanation").onclick = leaveTutorial; //proceed instead, when it's ready
}

function proceed(clicksBefore) {
    console.log("to be continued ", clicksBefore);
}

function leaveTutorial() {
    document.querySelector(".container").classList.remove("dark");
    document.querySelector(".board").classList.remove("dimmed");
    document.querySelector(".explanation").classList.add("hidden");
}