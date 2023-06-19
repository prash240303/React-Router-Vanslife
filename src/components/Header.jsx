 import React from 'react'
 import { Link, NavLink } from 'react-router-dom'
 
 function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
   return (
       <nav>
                <h1 > <Link to="/" className="logo"> #VANLIFE </Link></h1>
                <ul className="menu">
                    <li>
                        <NavLink to="/about"style={({isActive}) => isActive ? activeStyles : null} > About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/vans" style={({isActive}) => isActive ? activeStyles : null}>Vans</NavLink>
                    </li>
                    <li>
                        <NavLink to="/host" style={({isActive}) => isActive ? activeStyles : null}>Host</NavLink>
                    </li>
                </ul>
            </nav>
   )
 }
 
 export default Header
 