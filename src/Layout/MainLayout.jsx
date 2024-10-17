import React from 'react'
import Footer from '../Components/Shared/Footer'
import Header from '../Components/Shared/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <Header></Header>
    <div className='bg-[#F2F4F8] container mx-auto '>
        <Outlet/> 
    </div>
    <Footer></Footer>
    </>
  )
}

export default MainLayout