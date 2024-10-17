import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown hidden xs:block ssm:block">
        <div tabIndex={0} role="button" className="btn btn-ghost    ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-4 text-[darkcyan] font-bold w-52 p-2 shadow">
         <li><NavLink to="/">Home </NavLink> </li>
         <li><NavLink to="/course">Course </NavLink> </li>
        </ul>
      </div>
      <NavLink to="/" className="btn btn-ghost  xs:text-[0.9rem] ssm:text-[0.9rem] lg:text-xl md:text-xl sm:text-xl">Binary Planet</NavLink>
    </div>
    <div className="navbar-center text-3xl font-bold xs:hidden ssm:hidden sm:hidden  md:flex lg:flex">
      <ul className="menu menu-horizontal px-3 text-[midnightblue]">
         <NavLink to="/">Home </NavLink>   &nbsp; &nbsp; &nbsp; &nbsp; 
         <NavLink to="/course">Course </NavLink>  
        
         
      </ul>
    </div>
    <div className="navbar-end flex gap-4 items-center   ">
      <NavLink  className=" lg:text-[1rem] xs:text-[0.6rem] md:text-[0.8rem] ssm:text-[0.6rem]  xs:py-1 xs:px-1"  to="/about">About</NavLink> 
       <NavLink className="lg:text-[1rem]  xs:text-[0.6rem] md:text-[0.8rem] ssm:text-[0.6rem]  xs:py-1 xs:px-1 " to="/login">Login</NavLink>  
    </div>
  </div>
  )
}

export default Header