import React from 'react'
import Footer from '../Components/Shared/Footer'
import Header from '../Components/Shared/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='dark:bg-[#1D232A]'>
      <Header></Header>
      <div className='bg-[#F2F4F8] container mx-auto '>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout