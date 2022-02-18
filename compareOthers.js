function compareOthers(guess, answer) {
    let result = false;
    for (let i = 0; i < 4; i++) {
        if (toCols(answer).find((element) => element === guess)) {
            result = true;
        }
    }
    return result;
}