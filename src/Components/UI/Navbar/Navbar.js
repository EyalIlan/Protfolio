import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className = "navbar">
                    <h2 className="text-big">E<span id="logo-higelight">Y</span>AL ILAN</h2>

                    <ul className="navbar-list">
                        <li>
                            <Link className="text-medium" to="/">Home</Link>
                        </li>
                        <li>
                            <Link  className="text-medium"  to="/about">About</Link>
                        </li>
                        
                        <li>
                            <a className="text-medium"  href="">Projects </a>

                        </li>
                        <li>
                            <a  className="text-medium" href="">Contact</a>
                        </li>
                    
                    </ul>
              


        </header>
    )
}
