import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>{
  
  <nav className="nav">
        <a href='/' className='a-nav'>
            <ul>
                <li> <NavLink to='/movies'>movies</NavLink></li>
                 <li> <NavLink to='/directors'>directors </NavLink></li>
                  <li> <NavLink to='/actors'>actors</NavLink></li>

            </ul>
        </a>



      </nav>}</div>;
}

export default NavBar;
