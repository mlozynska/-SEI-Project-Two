import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const AllPictures = () => {
  const [stars, setStars] = useState([])
  const newDate = new Date()
  const currentDay = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
  let endDate = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
  const currentMonth = `${newDate.getMonth() + 1}`
  let startMonth = `${newDate.getMonth() + 1}`
    
  const getData = async () => {
    const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=dg5GyW52DZwLxZIT4MpUfvRa01eHvDU3sbgf94zE&start_date=2021-${startMonth}-01&end_date=${endDate}`)
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
    startMonth = event.target.value
    if (event.target.value === currentMonth) {
      endDate = currentDay
    } else {
      endDate = `${newDate.getFullYear()}-${startMonth}-30`
    }
    getData()
  }


  let search = ''
  const handleKeyUp = (event) => {
    search = event.target.value
    filterPics()
  }

  const  filterPics = () => {
    const regexSearch = new RegExp(search, 'i')
    const newSearch = stars.filter(star => {
      return regexSearch.test(star.title)
    })
    setStars(newSearch)
  }


  return (
    <>
      <div className='mt-6'></div>
      <select onChange={handleChange} className='background-is-dark is medium mt-6 ml-6'>
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
      <div>
        <input placeholder='search' className='background-is-dark is medium mt-6 ml-6' onKeyUp={handleKeyUp}>
        </input>
      </div>
      <section className='section'>
        <div className='container'>
          <div className='columns is-multiline'>
            {filteredStars().map(star => {
              return (
                <div key={star.date} className='card column is-one-quarter-desktop is-one-third-tablet has-background-black'>
                  <Link to={`/pictures/${star.date}`}>
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
                  </Link>
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