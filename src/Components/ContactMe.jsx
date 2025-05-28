import React from 'react'

export default function ContactMe() {
  return (
    <div className="all" id='contact'>
      <div className="header">Contact Me</div>
      <div className="container">
      <div className="section1">
        <h2>Just Say Hello</h2>
        <form action="">
        <input type="text" placeholder='Your Name' id='name'/>
        <input type="email" placeholder='Your Email' id='email'/>
        <input type="text" placeholder='Your Subject' id='subject'/>
        <textarea name="message" id="message" placeholder='Your Message' rows={6} cols={10}></textarea>
        <button className="hire send" type='submit'>Send</button>
        </form>
      </div>
      <div className="section1">
        <h2>Contact Info</h2>
      
        <p>Lets Contact With Me To Make An Exellant Work Together And Remember to Vist My Socail Media Acounts </p>
        <div className="contact-info">
        <i class="fa-solid fa-envelope"></i>
          <div className="infos">
          <h2>Email</h2>
          <p>omar.hatem.okasha@gmail.com</p>
          </div>
          
          
        </div>
        
        <div className="contact-info">
        <i class="fa-solid fa-phone"></i>
          <div className="infos">
          <h2>Phone</h2>
          <p>+20 155 474 4988</p>
          </div>
          
          
        </div>
        <div className="contact-info">
        <i class="fa-solid fa-location-dot"></i>
          <div className="infos">
          <h2>Address</h2>
          <p> Giza , Egypt</p>
          </div>
          
          
        </div>
        <div className="medias">
          <a href="https://www.youtube.com/@KoeshgGo"><i class="fa-brands fa-youtube"></i></a>
          <a href="https://www.facebook.com/koeshg.go/"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://x.com/KoeshgGo"><i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/koeshg_go/"><i class="fab fa-instagram"></i></a>
          <a href="https://www.tiktok.com/@koeshggo"><i class="fab fa-tiktok"></i></a>
          <a href="https://discord.com/invite/ppDfuDBZZz"><i class="fab fa-discord"></i></a>
          <a href="https://koeshg332211.itch.io/"><i class="fab fa-itch-io"></i></a>
   

        </div>
      </div>
      
      </div>
    </div>
  )
}
