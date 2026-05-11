import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./sections/login";
import Signup from "./sections/user/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;