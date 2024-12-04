// Function to check exam eligibility
function checkEligibility(attendancePercentage, completedAssignments) {
  const minimumAttendance = 75; // Minimum attendance percentage required

  // Check if the person meets both criteria
  if (attendancePercentage >= minimumAttendance && completedAssignments === true) {
    console.log("You are eligible to appear for the semester exam.");
  } else {
    console.log("You are not eligible to appear for the semester exam.");
    // Optionally, we can give more specific reasons for ineligibility
    if (attendancePercentage < minimumAttendance) {
      console.log("Reason: Insufficient attendance.");
    }
    if (completedAssignments === false) {
      console.log("Reason: Assignments not completed.");
    }
  }
}

// Example usage
let attendance = 80; // Example attendance percentage
let assignmentsCompleted = true; // Whether assignments are completed or not

// Call the function to check eligibility
checkEligibility(attendance, assignmentsCompleted);