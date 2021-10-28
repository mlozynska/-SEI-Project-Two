import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const ChooseDate = () => {

  const [yourDate, setYourDate] = useState([])
  const history = useHistory()

  const handleChange = (event) => {
    setYourDate(event.target.value)
    
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    history.push(`/choose-your-date/${yourDate}`)
  }
  
  return (
    <>
      <section className='hero is-fullheight' id='pickdate'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <form className='column is-half is-offset-one-quarter box' id='dateform' onSubmit={handleSubmit}>
                <div className='field'>
                  <label className='label' id='datelabel'>Your Date :</label>
                  <div className='control'>
                    <input 
                      id='dateinput'
                      placeholder='YYYY-MM-DD' 
                      name='date'
                      value={yourDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='field'>
                  <Link to={`/choose-your-date/${yourDate}`}>
                    <button type='submit' className='button is-fullwidth' id='datebutton'>Show me the Picture!</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ChooseDate

    