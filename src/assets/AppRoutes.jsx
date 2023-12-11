import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './About'
import Advice from './Advice'

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/advice' element={<Advice/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
