import React from 'react'

export default function Resume() {
  return (
    <div className="all" id='resume'>
      
      <div className="header">Resume</div>
      <div className="container resume-container">
        <div className="section1">
          <i class="fa-solid fa-briefcase"></i><span style={{fontSize:"2.2rem"}}>Experince</span>
          <div className="ex-card">
            <h2>Scratch</h2>
            <p  class="date">Jan 2022 - present</p>
            <p  className='cate'>Personal Projects</p>
            <p class="desc">
              I Developed a Lot of projects with scratch and i have ver enjoyable game like "Kanz Elma3refa" and My achievement in scratch is Be the best 10 in "CKP" competition  

            </p>

          </div>

          <div className="ex-card">
            <h2>Godot</h2>
            <p class="date">Mar 2023 - present</p>
            <p className='cate'>Self-Employed</p>
            <p class="desc">

              I made games by godot and upload them on itch io and i learn godot from youtube and SOP course on Udemy and made a Perfect Game from course  


            </p>

          </div>

        </div> 
        <div className="section1">
          <i class="fa-solid fa-graduation-cap"></i><span style={{fontSize:"2.2rem"}}>Education</span>
          <div className="ex-card">
            <h2>Primary School Student</h2>
            <p class="date">Sibrbay Primary School, Egypt | 20XX - Present</p>
            <p  class="desc">Studying core subjects including Mathematics, Computer Science, and English.

              Passionate about programming, web development, and graphic design.

              Ranked among the top 10 in "The State Prize for Young Creators" .</p>
          </div>
        </div>
      </div>
    </div>
  )
}
