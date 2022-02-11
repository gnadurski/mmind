function toCols(seq) {
    let colArray = ["gray", "gray", "gray", "gray"];
    let paletteArray = [
        "gray",
        "red",
        "green",
        "blue",
        "white",
        "black",
        "yellow",
        "purple",
        "orange",
    ];
    if (typeof seq === "string") {
        for (let i = 0; i < 4; i++) {
            colArray[i] = paletteArray[seq[i]];
        }
    } else if (typeof seq === "number") {
        for (let i = 0; i < 4; i++) {
            colArray[i] = paletteArray[parseInt(seq.toString()[i])];
        }
    } else
        console.log(
            "trying to convert something that's neither a string nor a number but should be"
        );
    return colArray;
}