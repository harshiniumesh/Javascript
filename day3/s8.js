function printReverseLowercaseAlphabet() {
    // Loop from 122 (ASCII code for 'z') to 97 (ASCII code for 'a')
    for (let i = 122; i >= 97; i--) {
        let alphabet = String.fromCharCode(i); // Convert ASCII code to lowercase character
        console.log(alphabet);
    }
}

printReverseLowercaseAlphabet();