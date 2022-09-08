import React from 'react'
import { FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
       <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                 <FaHome size={20} style={{color:'#fff', marginRight:"2rem"}}   />
            </div>
            <div>
                <p>Coconut Grove, Miami, FL</p>
                <p> USA </p>
            </div>
        </div>
        <div className='phone'>
       <h4> <FaPhone size={20} style={{color:'#fff', marginRight:"2rem"}}   />
       1-786-740-1456
         </h4>
        </div>
        <div className='email'>
       <h4> <FaMailBulk size={20} style={{color:'#fff', marginRight:"2rem"}}   />
       alfea1983@gmail.com </h4>
        </div>

        <div className='right'>
            <h4>About me</h4>
            <p>Im a programmer with a backgroung in music. In love with the Arts and always looking for a creative outlet.
            I am intertested in delivering top notch web applications and sites.</p>
            <div className='social'>
            <FaLinkedin
             size={30}
             style={{color:"#fff",
             marginRight: "2rem" }}/>
             

            </div>
        </div>
       </div>
    </div>
  )
}

export default Footer