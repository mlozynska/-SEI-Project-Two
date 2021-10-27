import React, { useEffect, useState } from 'react'
import axios from 'axios'



const AllPictures = () => {
  const [stars, setStars] = useState([])
  const newDate = new Date()
  let endDate = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
  let startDate = '10'
    
  const getData = async () => {
    const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=etjYr41gKjN2Wh8ThofDOj0HJI3i43FjgGX4lh0g&start_date=2021-${startDate}-01&end_date=${endDate}`)
    setStars(data)
  }

  useEffect(() => {
    getData()
    filteredStars()
  }, [])
  
  const filteredStars = () => {
    return stars.filter((star)=> star.media_type === 'image')
  }

  const handleChange = (event) => {
    startDate = event.target.value
    endDate = `${newDate.getFullYear()}-${startDate}-30`
    getData()
  }

  return (
    <>
      <select onChange={handleChange} className='background-is-dark is medium'>
        <option value='10'>October</option>
        <option value='09'>September</option>
        <option value='08'>August</option>
        <option value='07'>July</option>
        <option value='06'>June</option>
        <option value='05'>May</option>
        <option value='04'>April</option>
        <option value='03'>March</option>
        <option value='02'>February</option>
        <option value='01'>January</option>
      </select>
      <section className='section'>
        <div className='container'>
          <div className='columns is-multiline'>
            {filteredStars().map(star => {
              return (
                <div key={star._id} className='card column is-one-quarter-desktop is-one-third-tablet has-background-black'>
                  <div className='card'>
                    <div className='card-header'>
                      <div className='card-header-title has-background-dark has-text-white'>{star.title}</div>
                    </div>
                    <div className='card-image'>
                      <figure className='image image-is-1by1 is-align-items-center'>
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