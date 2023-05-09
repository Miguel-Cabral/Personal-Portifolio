import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReorderIcon from '@material-ui/icons/Reorder'
import '../styles/Navbar.css'



const Navbar = () => {
  const [dilateNavbar, setDilateNavibar] = useState(false);
  return (
    <div className='navbar' id={dilateNavbar ? "open" : "close"}>
     <div className='toggleButton'><button onClick={() => {
      setDilateNavibar((prev) => !prev);
     }}><ReorderIcon /></button>

     </div>
     <div className='links'>
      <Link to="/">Home</Link>
      <Link to="/Projects">Projects</Link>
      <Link to="/Experience">Experience</Link>
      
      </div>
     
    </div>
  )
}

export default Navbar