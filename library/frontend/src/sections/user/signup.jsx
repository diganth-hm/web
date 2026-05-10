import { useState } from "react";
import { useNavigate } from "react-router-dom";
import log from "";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [section, setSection] = useState("");
  const [usn, setUsn] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (
      !name ||
      !department ||
      !section ||
      !usn ||
      !password
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:5000/api/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            department,
            section,
            usn,
            password
          })
        }
      );

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();

      if (data.success) {
        alert("Signup successful");
        navigate("/");
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error(error);
      alert("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">

  <div className="bg-blue-800">
    <div><img src="logo" alt="" /></div>
<div className="bg-white p-10 rounded-xl shadow-lg w-[450px]">

        <h1 className="text-3xl font-bold text-center mb-8">
          SINGUP
        </h1>

        <div className="mb-4">
          <p className="mb-1 text-sm">Name</p>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <p className="mb-1 text-sm">Department</p>

          <input
            type="text"
            placeholder="Enter department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <p className="mb-1 text-sm">Section</p>

          <input
            type="text"
            placeholder="Enter section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <p className="mb-1 text-sm">USN</p>

          <input
            type="text"
            placeholder="Enter USN"
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-6">
          <p className="mb-1 text-sm">Password</p>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full bg-black text-white p-2 rounded"
        >
          {loading ? "Creating Account..." : "Signup"}
        </button>

        <button
          onClick={() => navigate("/")}
          className="w-full mt-4 border p-2 rounded bg-black text-white"
        >
          Back to Login
        </button>

      </div>
      </div>

    </div>
  );
}

export default Signup;