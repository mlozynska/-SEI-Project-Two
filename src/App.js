import React from 'react'
import AllPictures2021 from './components/AllPictures2021'
import AllPictures2022 from './components/AllPictures2022'
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
        <Route exact path='/pictures-2021/' component={AllPictures2021} />
        <Route exact path='/pictures-2022/' component={AllPictures2022} />
        <Route exact path='/pictures/:date' component={ShowPicture}/>
        <Route exact path='/picture-of-the-day' component={PictureOfTheDay}/>
        <Route exact path='/choose-your-date' component={ChooseDate} />
        <Route exact path='/choose-your-date/:yourdate' component={ShowYourPicture} />
      </Switch>
    </BrowserRouter>
  )
}


export default App




