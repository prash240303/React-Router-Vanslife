import { useState } from "react";
import "../src/App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Vans from "./Pages/vans/Vans";
import "./server";
import VansDetails from "./Pages/vans/vansDetails";

import Layout from "./components/Layout";
import Dashboard from "./Pages/host/Dashboard";
import Income from './Pages/host/Income';
import Reviews from './Pages/host/Reviews';
import HostLayout from "./components/HostLayout";
import VansHost from "./Pages/host/VansHost";
import VansDetailsHost from "./Pages/host/VansDetailsHost";
import HostVanPricing from "./Pages/host/HostVanPricing";
import HostvanPhotos from "./Pages/host/HostvanPhotos";
import HostVanInfo from "./Pages/host/HostVanInfo";
import NotFound from "./PageNotFound404";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link
} from "react-router-dom"
import { vansloader } from "./Pages/vans/Vans";
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans"  loader={vansloader} element={<Vans />} />
          <Route path="vans/:id" element={<VansDetails />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<VansHost />} />
            <Route path="vans/:id" element={<VansDetailsHost />}>
              <Route index element={<HostVanInfo />} />
              <Route path="photos" element={<HostvanPhotos />} />
              <Route path="pricing" element={<HostVanPricing />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
        <Route path="*" element={<NotFound />} />
        </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App



