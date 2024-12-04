// Function to process numbers and track results
function processNumbers() {
    let results = [];  // Array to store the processed results
    let repeatedResults = new Set();  // Set to track repeated results
    let seenResults = new Set();  // Set to track numbers we've already seen

    // Loop through the first 100 natural numbers
    for (let i = 1; i <= 100; i++) {
        let result = i;  // Start with the original number

        // Apply the operation for multiples of 2
        if (i % 2 === 0) {
            result = result * 5;
        }

        // Apply the operation for multiples of 3
        if (i % 3 === 0) {
            result = result / 3;
        }

        // Check if the result has been seen before
        if (seenResults.has(result)) {
            repeatedResults.add(result);  // If repeated, add to repeatedResults
        } else {
            seenResults.add(result);  // Otherwise, add to seenResults
        }

        // Store the result
        results.push(result);
    }

    // Output the repeated results
    console.log("Repeated results after the operations:");
    repeatedResults.forEach(result => {
        console.log(result);
    });
}

// Call the function to process the numbers
processNumbers();