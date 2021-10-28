import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <>
      <section className='hero is-fullheight is-black' id='hero'>
        <div className='hero-body'>
          <div className='container' id='homecontainer'>
            <h1 className='title is-1 has-text-centered' id='hometitle'>
                Astronomy Pictures
            </h1>
            <Link to='/picture-of-the-day' className='has-text-white'>
              <button className='button is-dark is-large' id='homebutton'>
                Picture of the Day
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home