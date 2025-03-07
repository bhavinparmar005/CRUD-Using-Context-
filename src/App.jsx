import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddData from './pages/AddData'
import EditData from './pages/EditData'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addpost' element={<AddData/>} />
          <Route path='/editpost' element={<EditData/>} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
