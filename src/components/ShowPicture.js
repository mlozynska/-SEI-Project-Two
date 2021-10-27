import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import CreateStar from './CreateStar'

const ShowPicture = () => {
  const [star, setStar] = useState([])
  const { date } = useParams()

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=dg5GyW52DZwLxZIT4MpUfvRa01eHvDU3sbgf94zE&date=${date}`)
      setStar(data)
    }
    getData()
  }, [])

  return (
    <CreateStar star={star}/>
    
  )
}

export default ShowPicture