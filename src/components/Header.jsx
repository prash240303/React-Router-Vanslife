 import React from 'react'
 import { Link } from 'react-router-dom'
 
 function Header() {
   return (
       <nav>
                <h1 > <Link to="/" className="logo"> #VANLIFE </Link></h1>
                <ul className="menu">
                    <li>
                        <Link to="/about"> About</Link>
                    </li>
                    <li>
                        <Link to="/vans">Vans</Link>
                    </li>
                    <li>
                        <Link to="/host">Host</Link>
                    </li>
                </ul>
            </nav>
   )
 }
 
 export default Header
 