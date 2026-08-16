//Display Faculties stored in array using ReactJS.

function Faculty() {
  const faculties = [
    "Dr. Patel",
    "Prof. Shah",
    "Prof. Mehta",
    "Dr. Trivedi"
  ];

  return (
    <div>
      <h2>Faculty List</h2>
      <br/>
      <ol type="i">
        {faculties.map((faculty, index) => (
          <li key={index}>{faculty}</li>
        ))}
      </ol>
    </div>
  );
}

export default Faculty;