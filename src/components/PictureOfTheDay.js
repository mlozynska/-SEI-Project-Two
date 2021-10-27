import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CreateStar from './CreateStar'

const PictureOfTheDay = () => {
  const [star, setStar] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://api.nasa.gov/planetary/apod?api_key=dg5GyW52DZwLxZIT4MpUfvRa01eHvDU3sbgf94zE')
      setStar(data)
    }
    getData()
  }, [])


  return (
    <CreateStar star={star}/>
  )
}

export default PictureOfTheDay

