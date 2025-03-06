import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddData from './pages/AddData'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='adddata' element={<AddData/>} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
