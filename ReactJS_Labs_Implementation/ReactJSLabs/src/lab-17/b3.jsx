//Display Students stored in array using ReactJS.

function Student() {
  const students = [
    "Rahul",
    "Priya",
    "Amit",
    "Neha",
    "Rohan"
  ];

  return (
    <div>
      <h2>Student List</h2>
      <ol>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ol>
    </div>
  );
}

export default Student;