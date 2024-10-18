import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { NavLink, useNavigate } from 'react-router-dom';

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
      <h1 className='xs:text-[0.8rem] text-xl p-2 text-[indigo]'>Binary Planet Ltd. </h1>
      <h1 className='xs:text-[0.8rem] text-xl p-2 text-[darkcyan] '>User: {user?.displayName}  
        &nbsp; <NavLink onClick={handleLogout}>Logout</NavLink>
         </h1>
    </div>
  )
}

export default DashboardHeader