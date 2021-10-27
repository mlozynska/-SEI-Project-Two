import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
// import CreateStar from './CreateStar'

const ShowPicture = () => {
  const [star, setStar] = useState()
  const { date } = useParams()

  useEffect(()=> {
    const getData = async () => {
      const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=etjYr41gKjN2Wh8ThofDOj0HJI3i43FjgGX4lh0g&date=${date}`)
      setStar(data)
    }
    getData()
  }, [])

  console.log(star)
  return (
    <h1>Hello</h1>
    // <>
    //   <section className='hero is-fullheight-with-navbar is-black'>
    //     <div className='hero-body'>
    //       <div className='container'>
    //         <div>
    //           <h2 className='title has-text-centered'>{star.title}</h2>
    //           <hr />
    //           <div className='columns'>
    //             <div className='column is-half'>
    //               <figure className='image'>
    //                 <img src={star.url} alt={star.title}/>
    //               </figure>
    //             </div>
    //             <div className='column is-half'>
    //               <h4 className='title is-4'>Date</h4>
    //               <p>{star.date}</p>
    //               <hr />
    //               <h4 className='title is-4'>Copyright</h4>
    //               <p>{star.copyright}</p>
    //               <hr />
    //               <h4 className='title is-4'>Explanation</h4>
    //               <p>{star.explanation}</p>
    //               <hr />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
  )
}

export default ShowPicture