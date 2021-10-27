import React from 'react'
import AllPictures from './components/AllPictures'
import NavBar from './components/NavBar'
import Home from './components/Home'
import PictureOfTheDay from './components/PictureOfTheDay'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/pictures' component={AllPictures} />
        <Route exact path='/picture-of-the-day' component={PictureOfTheDay}/>
      </Switch>
    </BrowserRouter>
  )
}


export default App




