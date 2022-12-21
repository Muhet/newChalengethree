import React from 'react'
import passport from '../assets/passport.jpg';
import photo1 from '../assets/image1.png';
import photo2 from '../assets/image3.png';
import photo3 from '../assets/image4.png';

function Container() {
  return (
    <div className="container-Con">
      <div className='sub-container'>
      <nav>
        <ul>
        <h3><li><a href='#'>Indro</a></li></h3>
        </ul>
      
      </nav>
      <nav-nav>
        <ul>
          <li><a href=''>Products</a></li>
            <li><a href=''>Out Team</a></li>
            <li><a href=''>Packages</a></li>
            <li><a href=''>Pricing</a></li>
          </ul>
        </nav-nav>
        <div className='talk-to-sales'>
        <button type='button' id="btn-btn">Talk to Sales</button>
      </div>
      <div className='left-side'>
        <h1>
          Make Remote Work More Productive
        </h1>
        <p>We want to ensure a more enjoyable remote work for your team.</p>
      <button type='button' id="start">Start free trial</button>
      <i className="fa-sharp fa-solid fa-circle-play"></i><h3>About us</h3>
      <hr className='h'>
     </hr>
     <p className='paragraph'>
      Our trusted & core clients
     </p>
     <p className='clients'>
      <a href=''>Yahoo!</a>
      <a href=''>stripe</a>
      <a href=''>SIEMENS</a>
      <a href=''>intel</a>
     </p>
     <div className='row'>
      <div className='cicle'>
      <img src={passport} alt="" className='cicle'></img>
      </div>
      <div className='cicle'>
      <img src={passport} alt="" className='cicle'></img>
      </div>
      <div className='cicle'>
      <img src={passport} alt="" className='cicle'></img>
      </div>
      <div className='cicle'>
      <img src={passport} alt="" className='cicle'></img>
      </div>
      <div className='cicle'>
      <img src={passport} alt="" className='cicle'></img>
      </div>
      <div className='cicle'>
      <img src={passport} alt="" className='cicle'></img>
      </div>
     </div>
     <div className="vl"></div>
     <h4>3.5k+ joined this week</h4>
     </div>
     <div className='right-side'>
     <div className='image1'>
      <img src={photo1} alt="" className='imageOne'></img>
      <img src={photo2} alt="" className='imageTwo'></img>
      <img src={photo3} alt="" className='imagethree'></img>
      </div>
     </div>
      </div>
    <div className='box'>
   <i className="fa-solid fa-comment"></i>
   </div>
   <div className='box1'>
   <i className="fa-sharp fa-solid fa-share"></i>
   </div>
  <div className='box2'>
  <i className="fa-solid fa-circle-exclamation"></i>
  </div>
   </div>
  )
}

export default Container;
