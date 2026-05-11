import { useState } from "react";
import log from "../assets/log.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [usn, setUsn] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!usn || !password) {
      alert("Please fill the required details");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:5000/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
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
        alert("Login success");
        navigate("/dashboard");
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="p-10 flex bg-blue-800 rounded-xl gap-10">

        <div className="bg-white p-1 rounded-lg shadow-lg w-96">
          <img src={log} alt="cover" />
        </div>

        <div className="bg-white p-10 rounded-lg shadow-lg w-96">

          <h1 className="text-2xl font-semibold text-center mb-8">
            Login
          </h1>

          <div className="mb-5">
            <p className="mb-1 text-sm">USN</p>

            <input
              type="text"
              placeholder="Enter your USN"
              value={usn}
              onChange={(e) => setUsn(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-6">
            <p className="mb-1 text-sm">Password</p>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-black text-white p-2 rounded"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="w-full mt-5 bg-black text-white p-2 rounded"
          >
            Signup
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;