import React, { useContext, useEffect, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { FaHome, FaUserAlt, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa'
import { AuthContext } from '../../Provider/AuthProvider'
import { NavLink, useNavigate } from 'react-router-dom';
import { MdCategory } from "react-icons/md";
import { signOut } from 'firebase/auth';


const DashboardSidebarContent = () => {
  const { user, mySignOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignout = () => {
    //  alert(1111)
    mySignOut();

    navigate("/");
  };


  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const showNewModal = "rehan";
  const modalFnc = () => {
    setShowModal(true);
    // document.div.style.backgroundColor="white";
  }
  useEffect(() => {

  }, [])
  //console.log(user,"2222reud2222");
  return (
    <>
      {/* {showModal}.....
    <button onClick={modalFnc}>Open Modal</button>
    {showModal && <Modal userdata={user} closemodal={setShowModal}/>} */}

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <div className={` xs:hidden ssm:hidden  top-0 left-0 h-[408px]  ${isOpen ? "w-32" : "w-20"}   md:w-40  bg-gray-700 text-white transition-all duration-100 
                ease-out  `}>
        <div className='flex justify-between items-center p-4'>
          <h2 className={`  md:block ${isOpen ? "block" : "hidden"}`}>My App {user?.name} </h2>
          <button onClick={() => setIsOpen(!isOpen)} className='md:hidden block'>
            {isOpen ? <IoCloseSharp size={24} /> : <FaBars size={24} />}

          </button>
        </div>
        <nav className='mt-4'>
          <ul>
            <li className='flex items-center p-4 hover:text-[orange]  hover:bg-gray-700 cursor-pointer'>
              <FaHome size={24} />
              <span className={`ml-4   md:block ${isOpen ? "block" : "hidden"} `}>Home  </span>
            </li>


            <li className='flex items-center p-4 hover:text-[orange]  hover:bg-gray-700 cursor-pointer'>
              <FaUserAlt size={24} />
              <span className={`ml-4   md:block ${isOpen ? "block" : "hidden"} `}>Profile</span>
            </li>


            <NavLink to="/dashboard/profile" className='flex items-center p-4 hover:text-[orange]   hover:bg-gray-700 cursor-pointer'>
              <FaCog size={24} />
              <span className={`ml-4   md:block ${isOpen ? "block" : "hidden"} `}>Profile</span>
            </NavLink>



            <li className='flex items-center p-4 hover:text-[orange]   hover:bg-gray-700 cursor-pointer'>
              <FaCog size={24} />
              <span className={`ml-4   md:block ${isOpen ? "block" : "hidden"} `}>Settings</span>
            </li>


            <NavLink to="/dashboard/category" className='flex items-center p-4  hover:bg-gray-700 hover:text-[orange]  cursor-pointer'>
              <MdCategory size={24} />
              <span className={`ml-4   md:block ${isOpen ? "block" : "hidden"} `}>Add Category  </span>
            </NavLink>

            <NavLink to="/dashboard/product" className='flex items-center p-4  hover:bg-gray-700 hover:text-[orange]  cursor-pointer'>
              <MdCategory size={24} />
              <span className={`ml-4   md:block ${isOpen ? "block" : "hidden"} `}>Add Product  </span>
            </NavLink>


            <NavLink onClick={handleSignout} className='flex items-center p-4  hover:bg-gray-700 hover:text-[orange]  cursor-pointer'>
              <FaSignOutAlt size={24} />
              <span className={`ml-4   md:block ${isOpen ? "block" : "hidden"} `}>Logout    </span>
            </NavLink>

          </ul>

        </nav>
      </div>

      <div className="hidden xs:block navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <NavLink to="/dashboard"><span><FaHome size={14} />Home</span></NavLink>
              <NavLink to="/dashboard"><span><FaUserAlt size={14} />Profile</span></NavLink>
              <NavLink to="/dashboard"><span><FaHome size={14} />Home</span></NavLink>
              <NavLink to="/dashboard"><span><FaHome size={14} />Home</span></NavLink>
              <NavLink onClick={handleSignout}><span><FaSignOutAlt size={14} />Logout</span></NavLink>
              
            </ul>
          </div>
        </div>


      </div>


    </>
  )
}

export default DashboardSidebarContent