import React from 'react'

export default function MySkills() {
  return (
    <div>
      <div className="all" id='my-skills'>
        <h2 className="header">My Skills</h2>
        <div className="container sills-words">
          <div className="section1">
            <h2>All the skills that I have in that field of work are mentioned</h2>
            <p>I started my journey with Scratch, then moved on to building web projects using HTML and CSS. I'm also skilled in digital drawing, video editing, and developing both 2D and 3D games using the Godot engine.

            </p>
          </div>


          <div className="skills">
            <div className="skill">
              <div className="info">
                <h3>Scratch</h3> <span>98%</span>
              </div>
              <div className="full-mark"><div className="scratch mark"></div></div>
            </div>
            <div className="skill">
              <div className="info">
                <h3>Digital Drawing</h3> <span>92%</span>
              </div>

              <div className="full-mark"><div className="draw mark"></div></div>
            </div>

            <div className="skill">
              <div className="info">
                <h3>Montage</h3> <span>90%</span>
              </div>

              <div className="full-mark"><div className="montage mark"></div></div>
            </div>
            <div className="skill">
              <div className="info">
                <h3>Godot</h3> <span>90%</span>
              </div>


              <div className="full-mark"><div className="godot mark"></div></div>
            </div>
            <div className="skill">
              <div className="info">
                <h3>HTML</h3> <span>75%</span>
              </div>

              <div className="full-mark"><div className="html mark"></div></div>
            </div>

            <div className="skill">
              <div className="info">
                <h3>CSS</h3> <span>70%</span>
              </div>

              <div className="full-mark"><div className="css mark"></div></div>
            </div>






          </div>
        </div>
      </div>
    </div>
  )
}
