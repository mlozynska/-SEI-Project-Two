import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <>
      <section className='hero is-fullheight-with-navbar is-black'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title is-1 has-text-centered mb-6 pb-5	'>
              <span className='logo-emoji' role='img' aria-label='logo'>🪐</span>
                NASA Astromony Pictures
              <span className='logo-emoji' role='img' aria-label='logo'>🪐</span>
            </h1>
            <Link to='/picture-of-the-day' className='has-text-white'>
              <button className='button is-dark is-large is-fullwidth is-rounded mt-6 py-5'>
                NASA Picture of the Day
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home