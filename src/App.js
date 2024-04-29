import React from 'react'
import {Routes , Route} from "react-router-dom"

import Hompage from './components/Home'
import RoomPage from './components/Room'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Hompage/>}/>
      <Route path='/room/:roomId' element={<RoomPage/>}/>
    </Routes>
  )
}

export default App