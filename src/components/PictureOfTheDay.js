import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PictureOfTheDay = () => {
  const [starOfTheDay, setStarOfTheDay] = useState([])
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://api.nasa.gov/planetary/apod?api_key=etjYr41gKjN2Wh8ThofDOj0HJI3i43FjgGX4lh0g')
      setStarOfTheDay(data)
    }
    getData()
  }, [])

  console.log(starOfTheDay)
  return (
    <section className='hero is-fullheight-with-navbar is-black'>
      <div className='hero-body'>
        <div className='container'>
          <div>
            <h2 className='title has-text-centered'>{starOfTheDay.title}</h2>
            <hr />
            <div className='columns'>
              <div className='column is-half'>
                <figure className='image'>
                  <img src={starOfTheDay.url} alt={starOfTheDay.title}/>
                </figure>
              </div>
              <div className='column is-half'>
                <h4 className='title is-4'>Date</h4>
                <p>{starOfTheDay.date}</p>
                <hr />
                <h4 className='title is-4'>Copyright</h4>
                <p>{starOfTheDay.copyright}</p>
                <hr />
                <h4 className='title is-4'>Explanation</h4>
                <p>{starOfTheDay.explanation}</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PictureOfTheDay