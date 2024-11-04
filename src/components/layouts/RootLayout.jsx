import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout