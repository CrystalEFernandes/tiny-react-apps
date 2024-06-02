import React from 'react'
import { Link } from 'react-router-dom'
import Dicelogo from '../Images/Dicelogo.svg'
import '../Component/NavbarStyles.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <Link to='/'>
            <img src={Dicelogo} className='logo'/>
        </Link>
    </div>
  )
}

export default Navbar