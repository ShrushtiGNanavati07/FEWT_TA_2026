import { useState } from "react";

function Login({ setUser }) {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Librarian credentials
    if (
      role === "Librarian" &&
      username === "librarian" &&
      password === "1234"
    ) {
      setUser({
        role: "Librarian",
        username: username,
      });
    }

    // User credentials
    else if (
      role === "User" &&
      username === "user" &&
      password === "1234"
    ) {
      setUser({
        role: "User",
        username: username,
      });
    }

    else {
      alert("Wrong username or password");
    }
  };

  return (
    <div>
      <h1>Library Management System</h1>

      {/* FIRST STEP */}
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">Select Role</option>
        <option value="Librarian">Librarian</option>
        <option value="User">User</option>
      </select>

      {/* LOGIN FORM */}
      {role !== "" && (
        <form onSubmit={handleLogin}>

          <h2>{role} Login</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <br /><br />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br /><br />

          <button type="submit">
            Login
          </button>

        </form>
      )}
    </div>
  );
}

export default Login;