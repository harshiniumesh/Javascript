// Function to categorize students based on their marks
function categorizeStudent(name, marks) {
    let grade;
    
    // Categorize based on marks
    if (marks >= 90) {
      grade = "A+";
    } else if (marks >= 80) {
      grade = "A";
    } else if (marks >= 70) {
      grade = "B+";
    } else if (marks >= 60) {
      grade = "B";
    } else if (marks >= 50) {
      grade = "C+";
    } else {
      grade = "C";
    }
  
    return { name: name, grade: grade };
  }
  
  // Sample data of 10 students with their marks
  const students = [
    { name: "John", marks: 95 },
    { name: "Alice", marks: 82 },
    { name: "Bob", marks: 78 },
    { name: "Diana", marks: 65 },
    { name: "Charlie", marks: 88 },
    { name: "Eva", marks: 55 },
    { name: "Frank", marks: 73 },
    { name: "Grace", marks: 60 },
    { name: "Hannah", marks: 92 },
    { name: "Ibrahim", marks: 49 }
  ];
  
  // Loop through each student and categorize them
  for (let student of students) {
    const result = categorizeStudent(student.name, student.marks);
    console.log(`Student: ${result.name}, Marks: ${student.marks}, Grade: ${result.grade}`);
  }