import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CreateStar from './CreateStar'

const ShowYourPicture = () => {

  const [yourStar, setYourStar] = useState([])
  const { yourdate } = useParams()
  const [hasError, setHasError] = useState(false)


  useEffect( () => {
    try {
      const getData = async () => {
        const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=etjYr41gKjN2Wh8ThofDOj0HJI3i43FjgGX4lh0g&date=${yourdate}`)
        setYourStar(data)
      }
      getData()
    } catch (error) {
      console.log(error.msg)
      setHasError(true)
    }
  }, [])

  console.log(hasError)
  return (
    <>
      { yourStar.media_type === 'image' ? 
        <CreateStar star={yourStar} />
        :
        <section className='hero is-fullheight is-black'>
          <div className='hero-body'>
            <div className='container'>
              <div>
                <h2 className='title has-text-centered'>
                  {yourStar.media_type === 'video' ? 'We are sorry, but there is no picture for this day.' : 'We are getting your picture...'}</h2>
                <hr />
              </div>
            </div>
          </div>
        </section>
      }
      
    </>
  )
}
export default ShowYourPicture