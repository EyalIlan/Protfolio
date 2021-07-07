import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {



    return (
        <header className="navbar">
            <h2 className="text-big">E<span id="logo-higelight">Y</span>AL ILAN</h2>

            <ul className="navbar-list">

                <li>
                    <NavLink  activeClassName="active" className="text-medium" to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink activeClassName="active"  className="text-medium" to="/about">About</NavLink>
                </li>


                <li>
                    <NavLink activeClassName="active"  className="text-medium" to="/projects">Projects </NavLink>

                </li>

                <li>
                    <NavLink activeClassName="active"  className="text-medium" to="/content">Contact</NavLink>
                </li>
            </ul>



        </header>
    )
}
