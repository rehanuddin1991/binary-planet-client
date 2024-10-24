import React, { useContext, useEffect, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { FaHome, FaUserAlt, FaCog, FaSignOutAlt, FaBars, FaUsers } from 'react-icons/fa'
 
import { NavLink, useNavigate } from 'react-router-dom';
import { MdCategory } from "react-icons/md";
import { signOut } from 'firebase/auth';
import { AuthContext } from '../../provider/AuthProvider';


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

      <div className={` dark:bg-[#1a1f25] dark:text-[white] xs:hidden  ssm:hidden  top-0 left-0  h-[100%]   ${isOpen ? "w-32" : "w-20"}   md:w-[19.25rem] lg:w-[25.75rem]  bg-gray-700 text-white transition-all duration-100 
                ease-out  `}>
        <div className='flex justify-between items-center p-4'>
          <h2 className={`  md:block ${isOpen ? "block" : "hidden"}`}>My App {user?.name} </h2>
          <button onClick={() => setIsOpen(!isOpen)} className='md:hidden block'>
            {isOpen ? <IoCloseSharp size={24} /> : <FaBars size={24} />}

          </button>
        </div>
        <nav className='mt-4'>
          <ul>
            <NavLink to="/dashboard/" className='flex items-center p-4 hover:text-[orange]  hover:bg-gray-700 cursor-pointer'>
              <FaHome size={24} />
              <span className={`ml-4   md:block ${isOpen ? "block" : "hidden"} `}>Home  </span>
            </NavLink  >


            


            <NavLink to="/dashboard/profile" className='flex items-center p-4 hover:text-[orange]   hover:bg-gray-700 cursor-pointer'>
              <FaCog size={24} />
              <span className={`ml-4   md:block ${isOpen ? "block" : "hidden"} `}>Profile</span>
            </NavLink>

           

            

            {/* <NavLink to="/dashboard/profile" className='flex items-center p-4 hover:text-[orange]   hover:bg-gray-700 cursor-pointer'>
              <FaCog size={24} />
              <span className={`ml-4   md:block ${isOpen ? "block" : "hidden"} `}>Settings</span>
            </NavLink> */}

          {user?.isAdmin && (
            <>
             <NavLink to="/dashboard/allUsers" className='flex items-center p-4 hover:text-[orange]   hover:bg-gray-700 cursor-pointer'>
              <FaUsers size={24} />
              <span className={`ml-4   md:block ${isOpen ? "block" : "hidden"} `}>All Users</span>
            </NavLink>

             <NavLink to="/dashboard/category" className='flex items-center p-4  hover:bg-gray-700 hover:text-[orange]  cursor-pointer'>
              <MdCategory size={24} />
              <span className={`ml-4   md:block ${isOpen ? "block" : "hidden"} `}>Add Category  </span>
            </NavLink>

            <NavLink to="/dashboard/product" className='flex items-center p-4  hover:bg-gray-700 hover:text-[orange]  cursor-pointer'>
              <MdCategory size={24} />
              <span className={`ml-4   md:block ${isOpen ? "block" : "hidden"} `}>Add Product  </span>
            </NavLink>
            </>

            
          )}
           


            <NavLink onClick={handleSignout} className='flex text-[white] items-center p-4  hover:bg-gray-700 hover:text-[orange]  cursor-pointer'>
              <FaSignOutAlt size={24} />
              <span className={`ml-4   md:block ${isOpen ? "block" : "hidden"} `}>Logout    </span>
            </NavLink>

          </ul>

        </nav>
      </div>

      <div className="hidden ssm:block  xs:block  xs:-mt-[4.3rem] xs:-ml-5  ssm:-mt-[4.3rem] ssm:-ml-5 navbar bg-base-100">
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
              className="ml-3 menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-3 space-y-2 shadow">
              <NavLink className="text-black dark:text-[wheat]  " to="/dashboard"><span><FaHome size={14} />Home</span></NavLink>
              <NavLink className="text-black dark:text-[wheat] " to="/dashboard"><span><FaUserAlt size={14} />Profile</span></NavLink>
               
            {user?.isAdmin &&
            <>
            
              <NavLink to="/dashboard/allUsers"  className="text-black dark:text-[wheat] "  >
              
              <span><FaUsers size={24} />All Users</span>
            </NavLink>
            <NavLink to="/dashboard/category" className="text-black dark:text-[wheat] "  ><span><MdCategory size={14} />Add Category</span></NavLink>
              <NavLink to="/dashboard/product" className="text-black dark:text-[wheat] "  ><span><MdCategory size={14} />Add Product</span></NavLink>
               
            
            </>

            }
             
              <NavLink className="text-black dark:text-[wheat] " onClick={handleSignout}><span><FaSignOutAlt size={14} />Logout</span></NavLink>
              
            </ul>
          </div>
        </div>


      </div>


    </>
  )
}

export default DashboardSidebarContent