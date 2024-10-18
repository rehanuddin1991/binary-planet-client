import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardHeader from '../Components/DashboardComponents/DashboardHeader'
import DashboardFooter from '../Components/DashboardComponents/DashboardFooter'
import DashboardCommonNav from '../Components/DashboardComponents/DashboardSidebarContent'
import DashboardSidebarContent from '../Components/DashboardComponents/DashboardSidebarContent'
 

 

const DashBoardLayout = () => {
  return (

    <>
    <div>
      <div className="shadow-md bg-slate-100">
        <DashboardHeader />
      </div>
      <div className="block lg:flex md:flex">
        <div className="min-w-64 shadow-md bg-slate-100">
          <DashboardSidebarContent />
        </div>
        <div className="w-3/4 min-h-screen p-10">
          <Outlet />
        </div>
      </div>
      <div>
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
    </>
  )
}

export default DashBoardLayout