import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Layout() {
  return (
    <>
      <Navbar/>
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}><Outlet/></div>
      
      <Footer/>
    </>  
  )
}

export default Layout
