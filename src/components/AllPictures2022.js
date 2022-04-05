import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AllPictures2022 = () => {
  const [stars, setStars] = useState([])
  const [newStars, setNewStars] = useState([])
  const [hasError, setHasError] = useState(false)
  const newDate = new Date()
  const currentDay = `${newDate.getFullYear()}-${
    newDate.getMonth() + 1
  }-${newDate.getDate()}`
  let startMonth = `${newDate.getMonth() + 1}`
  let endDate = `${newDate.getFullYear()}-${
    newDate.getMonth() + 1
  }-${newDate.getDate()}`
  const currentMonth = `${newDate.getMonth() + 1}`
  let day = 31
  let search = ''

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=dg5GyW52DZwLxZIT4MpUfvRa01eHvDU3sbgf94zE&start_date=2022-${startMonth}-01&end_date=${endDate}`
      )
      setStars(data)
      setNewStars(data)
    } catch (err) {
      setHasError(true)
    }
  }

  useEffect(() => {
    getData()
    filteredStars()
  }, [])

  const filteredStars = () => {
    return newStars.filter((star) => star.media_type === 'image')
  }

  const handleChange = (event) => {
    startMonth = event.target.value
    if (event.target.value === currentMonth) {
      endDate = currentDay
    } else {
      if (
        startMonth === '4' ||
        startMonth === '6' ||
        startMonth === '9' ||
        startMonth === '11'
      ) {
        day = 30
      } else if (startMonth === '2') {
        day = 28
      } else {
        day = 31
      }
      endDate = `${newDate.getFullYear()}-${startMonth}-${day}`
    }
    getData()
  }

  const filterPics = () => {
    const regexSearch = new RegExp(search, 'i')

    const newSearch = stars.filter((star) => {
      return regexSearch.test(star.title)
    })
    setNewStars(newSearch)
  }

  const handleKeyUp = (event) => {
    search = event.target.value
    filterPics()
  }

  return (
    <>
      <div className="is-fullheight is-black" id="allpictures">
        <div id="buttons">
          <select
            onChange={handleChange}
            className="background-is-dark is medium mt-6 ml-6"
            id="selectbutton"
          >
            {/* <option value="12">December</option> */}
            {/* <option value="11">November</option> */}
            {/* <option value="10">October</option> */}
            {/* <option value="9">September</option> */}
            {/* <option value="8">August</option> */}
            {/* <option value="7">July</option> */}
            {/* <option value="6">June</option> */}
            {/* <option value="5">May</option> */}
            <option value="4">April</option>
            <option value="3">March</option>
            <option value="2">February</option>
            <option value="1">January</option>
          </select>
          <div>
            <input
              placeholder="Search..."
              className="background-is-dark is medium mt-6 ml-6"
              id="searchbutton"
              onKeyUp={handleKeyUp}
            ></input>
          </div>
        </div>
      </div>
      {stars.length > 0 ? (
        <section className="section is-large" id="allpics">
          <div className="container" id="picturescontainer">
            <div className="columns is-multiline">
              {filteredStars().map((star) => {
                return (
                  <div
                    key={star.date}
                    className="card column is-one-quarter-desktop is-one-third-tablet"
                    id="allpicscard"
                  >
                    <Link to={`/pictures/${star.date}`}>
                      <div className="card">
                        <div className="card-header">
                          <div
                            className="card-header-title has-background-black is-centered"
                            id="cardtitle"
                          >
                            {star.title}
                          </div>
                        </div>
                        <div className="card-image">
                          <figure className="image is-5by4">
                            <img src={star.url} alt={star.title}></img>
                          </figure>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="hero is-large" id="loading">
          <div className="hero-body">
            <div className="container">
              <h2 id="loading-text">
                {hasError ? 'Something went wrong...' : 'Loading...'}
              </h2>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default AllPictures2022
