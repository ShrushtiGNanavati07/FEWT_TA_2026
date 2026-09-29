import { useState } from "react";

function Login({ setUser }) {

  const [role, setRole] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "") {
      alert("Please select a role");
      return;
    }

    setUser({
      role: role
    });
  };

  return (
    <div className="login">

      <h1>Library Management System</h1>

      <form onSubmit={handleLogin}>

        <h2>Login</h2>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="Librarian">Librarian</option>
          <option value="User">User</option>
        </select>

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;