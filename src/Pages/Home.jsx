import React from "react";
import "./Home.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Home() {
    return (
        <>
           

            <div className="Home-Body">
               
               <div className="paraContent">
                <h1>You got the travel plans, we got the travel vans.</h1>
                <p>
                    Add adventure to your life by joining the #vanlife movement. Rent the
                    perfect van to make your perfect road trip.
                </p>
                </div>
            <div id="anchor"> <Link to="/vans" className="home-button" > Find your van</Link></div>
            </div>


            <div className="footer">Ⓒ 2022 #VANLIFE</div>
        </>
    );
}
