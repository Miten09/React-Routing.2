import "./App.css";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Page404 from "./components/Page404";
import User from "./components/User";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="user" element={<User />} />
        <Route path="/user/:name" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
