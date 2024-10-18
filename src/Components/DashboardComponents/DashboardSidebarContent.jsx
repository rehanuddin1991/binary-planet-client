import React, { useContext, useEffect, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import {FaHome, FaUserAlt, FaCog, FaSignOutAlt, FaBars} from 'react-icons/fa'
import {AuthContext} from '../../Provider/AuthProvider'
import { NavLink, useNavigate } from 'react-router-dom';
 
const DashboardSidebarContent = () => {
    const {user,mySignOut}=useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignout = () => {
      //  alert(1111)
        mySignOut();
    
      navigate("/");
    };


    const [isOpen,setIsOpen]=useState(false);
    const [showModal,setShowModal]=useState(false);
   
    const showNewModal="rehan";
const modalFnc=()=>
{
  setShowModal(true);
 // document.div.style.backgroundColor="white";
}
    useEffect(()=>{
     
    },[])
   console.log(user,"2222reud2222");
  return (
    <>
    {/* {showModal}.....
    <button onClick={modalFnc}>Open Modal</button>
    {showModal && <Modal userdata={user} closemodal={setShowModal}/>} */}

    {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn hidden" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!{showNewModal}</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
     <div className={`  top-0 left-0 h-[408px]  ${isOpen? "w-32": "w-20"}   md:w-40  bg-gray-700 text-white transition-all duration-100 
                ease-out  `}>
            <div className='flex justify-between items-center p-4'>
                <h2 className={`  md:block ${isOpen?"block" : "hidden"}`}>My App {user?.name} </h2>
                <button onClick={()=>setIsOpen(!isOpen)} className='md:hidden block'> 
                    { isOpen? <IoCloseSharp size={24} />  : <FaBars size={24}/> }
                     
                      </button>
            </div>
            <nav className='mt-4'>
                <ul>
                    <li className='flex items-center p-4 hover:text-[orange]  hover:bg-gray-700 cursor-pointer'>
                    <FaHome size={24}/>
                    <span className={`ml-4   md:block ${isOpen?  "block": "hidden"} `}>Home  </span>
                    </li>


                    <li className='flex items-center p-4 hover:text-[orange]  hover:bg-gray-700 cursor-pointer'>
                    <FaUserAlt size={24}/>
                    <span className={`ml-4   md:block ${isOpen?  "block": "hidden"} `}>Profile</span>
                    </li>


                    <NavLink to="/dashboard/profile" className='flex items-center p-4 hover:text-[orange]   hover:bg-gray-700 cursor-pointer'>
                    <FaCog size={24}/>
                    <span className={`ml-4   md:block ${isOpen?  "block": "hidden"} `}>Profile</span>
                    </NavLink>



                    <li className='flex items-center p-4 hover:text-[orange]   hover:bg-gray-700 cursor-pointer'>
                    <FaCog size={24}/>
                    <span className={`ml-4   md:block ${isOpen?  "block": "hidden"} `}>Settings</span>
                    </li>


                    <NavLink onClick={handleSignout} className='flex items-center p-4  hover:bg-gray-700 hover:text-[orange]  cursor-pointer'>
                    <FaSignOutAlt size={24}/>
                    <span className={`ml-4   md:block ${isOpen?  "block": "hidden"} `}>Logout {user?.email}  </span>
                    </NavLink>
                     
                </ul>

            </nav>
              </div>
    </>
  )
}

export default DashboardSidebarContent