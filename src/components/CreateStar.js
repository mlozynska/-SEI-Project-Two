import React from 'react'


const createStar = ({ star }) => {


  return (
    <>
      <section className='hero is-fullheight-with-navbar is-black'>
        <div className='hero-body'>
          <div className='container'>
            <div>
              <h2 className='title has-text-centered'>{star.title}</h2>
              <hr />
              <div className='columns'>
                <div className='column is-half'>
                  <figure className='image'>
                    <img src={star.url} alt={star.title}/>
                  </figure>
                </div>
                <div className='column is-half'>
                  <h4 className='title is-4'>Date</h4>
                  <p>{star.date}</p>
                  <hr />
                  <h4 className='title is-4'>Copyright</h4>
                  <p>{star.copyright}</p>
                  <hr />
                  <h4 className='title is-4'>Explanation</h4>
                  <p>{star.explanation}</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default createStar
