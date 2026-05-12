import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./sections/user/dash";
import Login from "./sections/login";
import Signup from "./sections/user/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
   <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;