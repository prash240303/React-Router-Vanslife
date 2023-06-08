import { useState } from "react";

import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Vans from "./Pages/Vans"
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
function App() {
  return (
  
      <BrowserRouter>
   <nav>
                <h1 > <Link to="/" className="logo"> #VANLIFE </Link></h1>
                <ul className="menu">
                    <li>
                        <Link to="/about"> About</Link>
                    </li>
                    <li>
                        <Link to="/vans">Vans</Link>
                    </li>
                </ul>
            </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
