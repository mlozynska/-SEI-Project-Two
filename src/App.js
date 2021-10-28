import React from 'react'
import AllPictures from './components/AllPictures'
import NavBar from './components/NavBar'
import Home from './components/Home'
import PictureOfTheDay from './components/PictureOfTheDay'
import ShowPicture from './components/ShowPicture'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ChooseDate  from './components/ChooseDate'
import ShowYourPicture from './components/ShowYourPicture'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/pictures' component={AllPictures} />
        <Route exact path='/pictures/:date' component={ShowPicture}/>
        <Route exact path='/picture-of-the-day' component={PictureOfTheDay}/>
        <Route exact path='/choose-your-date' component={ChooseDate} />
        <Route exact path='/choose-your-date/:yourdate' component={ShowYourPicture} />
      </Switch>
    </BrowserRouter>
  )
}


export default App




