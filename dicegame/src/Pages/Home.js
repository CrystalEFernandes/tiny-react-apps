import React from 'react'
import './PagesStyles/Home.css'
import {Link} from 'react-router-dom'
import Navbar from '../Component/Navbar.js'
const Home = () => {
  return (
    <div className='bgcolor1'>
      <Navbar/>
      <div className='content'>
        <h1>ROLL A DICE </h1>
        <h2>TEST YOUR LUCK</h2>
        <p>Do you think the world is on your side? Or are you just bored and looking to spend your time doing something stupid? Well you’ve come to the right place.</p>
        <Link to='/dicegame1'>
          <button className='standard_btn'>Let's Play!</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Home