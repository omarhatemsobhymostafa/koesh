import React from 'react'
import Img from '../Assets/About.png'

export default function About() {
  return (

    <div className='all-about all' id='about'>
      <h2 className='header'>About Me

      </h2>


      <div className='about-container container'>



        <div className="about-img ">
          <img src={Img} alt="" />
        </div>
        <div className="about">
          <h2>Hi there! I'm Aser Islam</h2>
          <h3>Game Developer</h3>
          <p>
            I'm Aser Islam, a passionate game developer. I began my programming journey with Scratch, which helped me build a strong foundation in logic and creativity. Later, I learned HTML and CSS and used them to create many web projects.
          </p>
          <p>
            In addition to web development, I have extensive experience in digital drawing, video editing (montage), and both 2D and 3D game development using the Godot engine.
          </p>

          <ul> <li>Birthday: Dec 15, 2013</li>
            <li>Phone: +20 155 474 4988</li>
            <li>Email: social.koeshg@gmail.com</li>
            <li>From: Giza , Egypt</li>
            <li>Language: Arabic , English</li>
            <li>Freelance: Available</li></ul>


        </div>

      </div>

    </div>


  )
}
