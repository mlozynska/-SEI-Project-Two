import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <>
      <nav className='navbar is-black is-fixed-top is-transparent' id='navbar'>
        <div className='container' id='navbarcontainer'>
          <div className='navbar-brand'>
            <span role='img' aria-label='logo' className='navbar-item '><Link to='/' className='has-text-white'>Home</Link></span>
          </div>
          <div className='navbar-start'>
            <div className='navbar-item'>
              <Link to='/pictures-2021' className='has-text-white'>2021</Link>
            </div>
            <div className='navbar-item'>
              <Link to='/pictures-2022' className='has-text-white'>2022</Link>
            </div>
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <Link to='/choose-your-date' className='has-text-white'>Pick a Date</Link>
            </div>
            <div className='navbar-item'>
              <Link to='/picture-of-the-day' className='has-text-white'>Picture of the Day</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar