import React from 'react'
import { Link } from 'react-router-dom'
import mountain from "../assets/mountainrancho.jpeg"

const HeroImg = () => {
  return (
    <div className='hero'>
    <div className='mask'>
    <img className='intro-img' src={mountain} alt="mountainImg"/>
    <div className='intro-content'>
    <p>Hi! I'm a creative</p>
      <h1>MERN Developer</h1>
      <div>
        <Link to= "/project"></Link>
      </div>
    </div>
    </div>
   </div>
  )
}

export default HeroImg