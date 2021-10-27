import React, { useEffect, useState } from 'react'
import axios from 'axios'



const AllPictures = () => {
  const [stars, setStars] = useState([])
    
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://api.nasa.gov/planetary/apod?api_key=etjYr41gKjN2Wh8ThofDOj0HJI3i43FjgGX4lh0g&start_date=2021-08-01&end_date=2021-10-26')
      setStars(data)
    }
    getData()
    filteredStars()
  }, [])
  
  const filteredStars = () => {
    return stars.filter((star)=> star.media_type === 'image')
  }

  console.log(stars)
  return (
    <>
      <section className='section'>
        <div className='container'>
          <div className='columns is-multiline'>
            {filteredStars().map(star => {
              return (
                <div key={star._id} className='column is-one-quarter-desktop is-one-third-tablet'>
                  <div className='card'>
                    <div className='card-header'>
                      <div className='card-header-title'>{star.title}</div>
                    </div>
                    <div className='card-image'>
                      <figure className='image image-is-1by1'>
                        <img src={star.url} alt={star.title}></img>
                      </figure>
                    </div>
                  </div>
                </div>
              )
            }
            )}
          </div>
        </div> 
      </section>
    </>
  )
}


export default AllPictures