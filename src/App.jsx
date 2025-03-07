import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddData from './pages/AddData'
import EditData from './pages/EditData'
import { Crudprovider } from '../Crudprovider'
// import Demo from './pages/demo'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Crudprovider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/addpost' element={<AddData />} />
            <Route path='/editpost' element={<EditData />} />
            {/* <Route path='/demo' element={<Demo/>} /> */}
          </Routes>
        </Crudprovider>
      </BrowserRouter>

    </>
  )
}

export default App
