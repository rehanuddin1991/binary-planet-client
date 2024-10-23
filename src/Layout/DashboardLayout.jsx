import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardHeader from '../Components/DashboardComponents/DashboardHeader'
import DashboardFooter from '../Components/DashboardComponents/DashboardFooter'
import DashboardCommonNav from '../Components/DashboardComponents/DashboardSidebarContent'
import DashboardSidebarContent from '../Components/DashboardComponents/DashboardSidebarContent'
 

 

const DashBoardLayout = () => {
  return (

    <div  >
    <div className=''>
      <div className="shadow-md bg-slate-100 ">
        <DashboardHeader />
      </div>
      <div className="block sm:flex bg-white lg:flex md:flex dark:bg-[#1a2027] dark:text-[white] shadow-2xl">
        <div className="min-w-64 xs:w-80 shadow-md dark:bg-[#1a2027]  ">
          <DashboardSidebarContent />
        </div>
        <div className="w-3/4  p-4 py-0 ">
          <Outlet />
        </div>
      </div>
      <div >
      <DashboardFooter></DashboardFooter>
      </div>
    </div>
  
      {/* <div>
      <DashboardHeader></DashboardHeader> 
      <div className='bg-red-700 flex flex-row justify-between items-center'>
      <DashboardCommonNav></DashboardCommonNav>
    
          <Outlet></Outlet>
      </div>   
      
      </div> */}
    </div>
  )
}

export default DashBoardLayout