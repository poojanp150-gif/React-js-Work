import React from 'react'
import BloagAdd from './BloagAdd'
import ViewData from './ViewData'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Alldatashow from './Alldatashow'
import Updatedata from './Updatedata'

export default function App() {
  return (
    <div>
      

    <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route path='/Alldatashow' element={<Alldatashow/>}/>
      <Route path='/BloagAdd' element={<BloagAdd/>}/>
      <Route path='/Updatedata/:id' element={<Updatedata/>}/>
      <Route path="/viewdata/:id" element={<ViewData/>} />
      </Route>
    </Routes>
      
    </div>
  )
}
