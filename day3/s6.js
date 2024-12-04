function printNumbers() {
    let number = 1;

    // First 5 numbers: multiples of 2
    for (let i = 0; i < 5; i++) {
        console.log(number * 2);
        number++;
    }

    // Next 5 numbers: multiples of 5
    number = 1; // Resetting the number to start from 1 for the next set
    for (let i = 0; i < 5; i++) {
        console.log(number * 5);
        number++;
    }

    // Next 5 numbers: multiples of 7
    number = 1; // Resetting the number to start from 1 for the next set
    for (let i = 0; i < 5; i++) {
        console.log(number * 7);
        number++;
    }

    // Last 5 numbers: multiples of 11
    number = 1; // Resetting the number to start from 1 for the next set
    for (let i = 0; i < 5; i++) {
        console.log(number * 11);
        number++;
    }
}

printNumbers();