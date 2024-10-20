import React from 'react'
import { useContext } from 'react'

import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome,FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';

const DashboardHeader = () => {
  const { user,mySignOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
   // alert(1111111111)
    mySignOut() ;

    navigate("/");
  };

 
  return (
    <div className='flex justify-between items-center bg-[white] p-2 shadow-sm '>
      <h1 className='xs:text-[0.7rem] xs:ml-5 ssm:ml-5 ssm:text-[0.7rem] text-xl p-2 text-[indigo]'>Binary Planet Ltd. </h1>
      <h1 className='xs:text-[0.7rem] ssm:text-[0.7rem]  text-xl p-1 text-[darkcyan] '> {user?.email}  
       
        
         </h1>
         <div className='flex gap-2 '>
         <NavLink onClick={handleLogout}><FaSignOutAlt size={19}/></NavLink> 
         <NavLink to="/"><FaHome size={19}/></NavLink> 

         </div>
          
    </div>
  )
}

export default DashboardHeader