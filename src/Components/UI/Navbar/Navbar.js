import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <header className = "navbar">
                <h2 className="text-big">E<span id="logo-higelight">Y</span>AL ILAN</h2>
            
              
                    <ul className="navbar-list">
                        <li>
                        <a className="text-medium" href="">Home</a>
                        </li>
                        <li>
                            <a  className="text-medium"  href="">About</a>
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
