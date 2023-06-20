import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="not-found-container">
            <h1>This page was not found , but u can stay and cry with me <span><img src="src\assets\people-hugging_1fac2.png" alt="" width={40}/></span> </h1>
            <img src="\assets\404error.jpg" alt="" height={400}/>
            <Link to="/" className="link-button">Return to Home please!!</Link>
        </div>
    )
}
