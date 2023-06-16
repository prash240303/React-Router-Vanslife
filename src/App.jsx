import { useState } from "react";

import "../src/App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Vans from "./Pages/vans/Vans"
import "./server"
import VansDetails from "./Pages/vans/vansDetails";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./Pages/host/Dashboard"
import Income from './Pages/host/Income'
import Reviews from './Pages/host/Reviews'
import HostLayout from "./components/HostLayout";
function App() {



  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansDetails />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="review" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

