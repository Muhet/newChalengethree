import React from 'react';
import logo from '../assets/logo.png';
import menu from '../assets/menu_icon.png';



function navbar() {

  function togglemenu() {
    const menuList = document.getElementById("menuList");
    if (menuList.style.maxHeight === "0px") {
      menuList.style.maxHeight = "400px"
    } else
      menuList.style.maxHeight = "0px"

  }


  return (
    <div className="container">

      <div className="logo-menu" >
        <img src={menu} className='menu-icon' alt='togglemenu' onClick={togglemenu} />
        <img src={logo} className="logo" alt="logo" />
        <nav>
          <ul id='menuList'>
            <li><a href="inspiration" >Inspiration</a></li>
            <li><a href="findWork" >Find Work</a></li>
            <li><a href="learn" >Learn Design</a></li>
            <li><a href="gopro" >Go Pro</a></li>
            <li><a href="design" >Design Files</a></li>
            <li><a href="hire">Hire Designer</a></li>
          </ul>
        </nav>
        <div className='button-menu'>
          <button className='signin'>Sign in</button>
          <button className='signup'>Sign up</button>
          {<i className='fas fa-search'></i>}
        </div>
      </div>



    </div>

  )

}
export default navbar






