import React from 'react';
import Logo from '../Assets/Logo.png';

export default function Nav() {
    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>

            <div className="list">
            <a href="#bannar">Home</a>
            <a href="#about">About Me</a>
            <a href="#service">Service</a>
            <a href="#my-skills">My Skills</a>
            <a href="#resume">Resume</a>
            <a href="#my-works">My Works</a>
            <a href="#contact">Contact</a>
            
            </div>
            <div className='line'>
            |

            </div>
            <div className="no">
         
                <i class="fa-solid fa-phone"></i> <span><b>+20 155 474 4988</b></span>
         
            </div>
        </nav>
    );
}
