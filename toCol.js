function toCol(seq) {
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
    for (let i = 0; i < 4; i++) {
        colArray[i] = paletteArray[seq[i]];
    }
    return colArray;
}