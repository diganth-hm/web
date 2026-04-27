import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "post",
        headers: {
          "content-Type": "aplpication/json"
        },
        body: json.stringify({
          email,
          password
        })
      });

      const data = await res.json();

      if (data.success) {
        alert("login success")

      }
      else {
        alert(data.messege);

      }

    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login");
    }
  }      
    
    
    
    
    
    
    
    
    
    
    
    return (
      <div><h1>LOGIN</h1>
        <input
          type="email"
          placeholder="Enter the email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}

        />
        <br />
        <input
          type="password"
          placeholder="Enter the password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

        />


        <button onclick={handleLogin}>Login</button>

      </div>

    )
  }
  export default Login;