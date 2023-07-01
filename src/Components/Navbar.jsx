import React, { useContext, useState } from 'react'
import { usePage } from './utils/global.context';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";



const Navbar = () => {
  const { pageState, pageDispatch } = usePage();
  const switchTheme = () => {
    console.log(pageState);
    pageDispatch({ type: "SWITCH_THEME" });
  };


  return (

    <nav className='navigation'>
       <a href="/" className="brand-name">
        <span className="red-letter">D</span>H Odonto
      </a>


      <div className='navigation-menu'>
        <ul>
            <li>
          <Link to='/home' className="link-item">Home</Link>
          <Link to='/favs' className="link-item">Favs</Link>
          <Link to='/details' className="link-item">Details</Link>
          <Link to="/contact" className="link-item">Contact</Link>
            </li>       
        </ul>
      </div>

      <button onClick={switchTheme}>Cambiar Tema</button>
    </nav>
    
  )
  
}

export default Navbar