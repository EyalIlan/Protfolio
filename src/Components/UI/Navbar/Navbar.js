import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <header className = "navbar">
                <h2 className="text-big">E<span id="logo-higelight">Y</span>AL ILAN</h2>
            
                <div className="navbar-list">
                    

                    <a className="text-medium" href="">Home</a>
                    
                    <a  className="text-medium"  href="">About</a>
                    
                    <a className="text-medium"  href="">Projects </a>
                    
                    <a  className="text-medium" href="">Contact</a>
                </div>


        </header>
    )
}
