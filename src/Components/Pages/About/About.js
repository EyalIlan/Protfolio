import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './About.css'
export default function About(props) {

  
    return (
        <div className="main-section">
            <div className="mid-container">
                {/* <h2 className="text-medium">About Me</h2> */}
                <h2 className="text-medium">Who Am I...</h2>
                
                <div className="grid3">

                        <div className="grid-1 opacity">
                            <img className="imageSize" src="/images/profilePicture.jpeg" alt="" />
                        </div>
                        <p className="grid-2 opacity">a</p>
                        <div className="grid-3 grid-box opacity">
                            <h3 className="text-small">BACHELOR DEGREE</h3>
                            <p className="text-small">I have a B.S.c Degree in computer science from Sapir Collage </p>       
                        </div>
                        <h3 className="grid-4 opacity text-medium">SELF LEARNING</h3>
                        <h3 className="grid-5 opacity text-medium">Motivation for Success</h3>
                </div>
            </div>
        </div>
    )
}
