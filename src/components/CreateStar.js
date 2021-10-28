import React from 'react'


const CreateStar = ({ star }) => {


  return (
    <>
      <section className='hero is-fullheight is-black' id='createstar'>
        <div className='hero-body'>
          <div className='container'>
            <div>
              {/* <h2 className='has-text-centered'>{star.title}</h2> */}
              {/* <hr /> */}
              <div className='columns'>
                <div className='column is-half'>
                  <figure className='image is-4by3'>
                    <img src={star.url} alt={star.title}/>
                  </figure>
                </div>
                <div className='column is-half'>
                  <h2>{star.title}</h2>
                  <hr />
                  <h4>Date</h4>
                  <p>{star.date}</p>
                  <hr />
                  <h4>Copyright</h4>
                  <p>{star.copyright}</p>
                  <hr />
                  <h4 >Explanation</h4>
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

export default CreateStar
