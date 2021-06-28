import React from 'react'
import './HomePage.css'

export default function HomePage() {
  return (
    <div>
      <div className="homepage">

        <div className="headline">
          <h1>Eyal Ilan</h1>
          <h2>Full Stack Web Developer <i class="fas fa-laptop-code"></i></h2>

        </div>
      </div>

      <section className="skills-boxes">
        <div id="container-skills">
          <h2 className="text-medium">I Specialize In</h2>
          <h4 className="text-small">Creating Fast Beatiful Web Applications</h4>
          <div className="grid">

            <div className="box">
              <img src="/images/programmer.png" alt="" />
              <h3 className="text-medium">passionate</h3>
              <p>im very passionate about my career path of coding. working with diffrent people and invest myself in the programing world</p>
            </div>
            <div className="box">
              <img src="/images/responsive.png" alt="" />
              <h3 className="text-medium">full Stack Developer</h3>
              <p>i like to code and mange diffrent parts of the projects i very versital and flexible and my way of thinking and i enjoy bringing ides to life</p>
            </div>
            <div className="box">
              <img src="/images/workout.png" alt="" />
              <h3 className="text-medium">Leadership</h3>
              <p>I enjoy the challenge of any project thinking my way to solve any problem. i like the reseponsibility and Leadership. I genuinely care about other people, and love helping fellow programers</p>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}
