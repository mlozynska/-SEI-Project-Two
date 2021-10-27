import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <>
      <nav className='navbar is-black is-fixed-top'>
        <div className='container'>
          <div className='navbar-brand'>
            <span role='img' aria-label='logo' className='navbar-item '><Link to='/' className='has-text-white'>🪐  Home 🪐 </Link></span>
          </div>
          <div className='navbar-start'>
            <div className='navbar-item'>
              <Link to='/pictures' className='has-text-white'>All Pictures</Link>
            </div>
          </div>
          <div className='navbar-end'>
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