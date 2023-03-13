import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import PlayPage from './PlayPage'

export default function AllRoutes() {
  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/play" element={<PlayPage/>} />
     </Routes>   
    </>
  )
}
