import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Home/Login";
import Signup from "./Pages/Home/Signup";
import Footer from "./Pages/Shared/Footer/Footer";
import Manu from "./Pages/Shared/Header/Manu";

function App() {
  return (
    <div >
      <Manu />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
