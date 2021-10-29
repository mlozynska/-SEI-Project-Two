import React from 'react'


const CreateStar = ({ star }) => {


  return (
    <>
      { star.title  ? 
        <section className='hero is-fullheight is-black' id='createstar'>
          <div className='hero-body'>
            <div className='container'>
              <div>
                <div className='columns is-align-items-center'>
                  <div className='column is-half'>
                    <figure className='image is-4by3 '>
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
        :
        <section className='hero is-fullheight is-black'>
          <div className='hero-body'>
            <div className='container'>
              <div>
                <h2 className='title has-text-centered'>
                  We are getting your star</h2>
                <hr />
              </div>
            </div>
          </div>
        </section>
      }

      
    </>
  )
}

export default CreateStar
