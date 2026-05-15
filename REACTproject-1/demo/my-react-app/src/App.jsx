import { useState } from "react";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <header
      style={{
        padding: "1rem",
        marginBottom: "2rem",
        borderBottom: "1px solid #fdfdfd",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <div>
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1>Home </h1>
      <p> you are not logged in. Go to the login page to sign in. </p>
    </div>
  );
}

function ProfilePage() {
  return(
    <div style={{ padding: "0 1.5rem" }}>
      <h1>Profile</h1>
      <p>Name: [Name will go here]</p>
      <p>here you could show more user information</p>
    </div>
  );
}

function LoginPage() {
  const [name, setName] = useState("");
  const[user, setUser] = useState({name:"",isAuth:false});

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    alert("Login");
  }

  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h2>Login</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <label>
          Name
          <input
            type="text"
            placeholder="Type any name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: "0.5rem" }}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="*"
          element={<h1 style={{ padding: "0 1.5rem" }}>404 Not Found</h1>}
        />
      </Routes>
    </div>
  );
}