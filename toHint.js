function toHint(letters, activeHeight) {
    // letters "b", "w", "n" indicate hint square's color, activeHeight is seqHeight from index.js
    let hintArray = [
        "nothing-found",
        "nothing-found",
        "nothing-found",
        "nothing-found",
    ];

    for (let i = 0; i < 4; i++) {
        if (letters[i] === "b") {
            hintArray[i] = "black";
        } else if (letters[i] === "w") {
            hintArray[i] = "white";
        } else {
            hintArray[i] = "nothing-found";
        }
    }
    for (let i = 1; i <= 4; i++) {
        document.querySelector(
            `.rows-hint>.flex-row:nth-child(${
        10 - activeHeight
      })>.ansquare:nth-child(${i})`
        ).classList = `ansquare ${hintArray[i - 1]}`;
    }
}