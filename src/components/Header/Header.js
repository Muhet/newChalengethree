import React from 'react';
import passport from '../assets/passport.jpg';
function Header() {
  return (
    <div className='header'>
      <h1>Communication Application Landing Page</h1>
      <div className='circle'>
        <img src={passport} alt="" className='cicle-header'></img>
        <img src={passport} alt="" className='cicle-header1'></img>
        <img src={passport} alt="" className='cicle-header2'></img>
      </div>
      <p>Thuhidul Islam <h6>for</h6>Mouse Potato Lab Follow
       <ul> <li><a href='hire'><f>Hire Us</f></a></li>
      </ul> </p>
      <div className='btn'>
        <button className='save'>Save</button>
        <button className='like'><i className="fa-solid fa-heart"></i>Like</button>
      </div>

    </div>
  )
 
}

export default Header
