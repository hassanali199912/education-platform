
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Route, Routes } from 'react-router-dom';
import Contact from "./pages/Contact/Contact";
import Instractors from "./pages/Instractors/Instractors";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Singup from "./pages/Singup/Singup";
import Coureses from "./pages/Coureses/Coureses";
import SingleCourese from "./pages/SingleCoure/SingleCoure";
import { useEffect } from "react";
// import customJquery from './jquery.script';

function App() {



  return (
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/instractors" element={<Instractors />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/coureses" element={<Coureses />} />
        <Route path="/single-courese" element={<SingleCourese />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="*" element={<><h1>Error</h1></>} />
        
   </Routes>
  );
}

export default App;
