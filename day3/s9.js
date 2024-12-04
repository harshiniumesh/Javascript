function printOddDigitAlphabets() {
    // Loop through the alphabet and print the odd-numbered alphabets
    for (let i = 1; i <= 26; i++) {
        if (i % 2 !== 0) { // Check if the number is odd
            let alphabet = String.fromCharCode(64 + i); // Convert number to corresponding alphabet
            console.log(alphabet);
        }
    }
}

printOddDigitAlphabets();