import React from 'react'
import { useContext, useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi"; // Importing react-icon
import { AuthContext } from "../../Provider/AuthProvider";
import { backend_uri } from "../../CommonResources";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Profile = () => {
  const navigate=useNavigate();
  const { user,setUser } = useContext(AuthContext);
  //console.log(user,"my new user")
  const [users,setUsers]=useState([]);
  
  
  return (
    <div className="p-6 dark:bg-[#1D232A] dark:text-[white] bg-white mt-4 sm:w-[26rem] sm:ml-12 lg:w-[37rem] xl:w-[50rem]
    md:w-[27rem] xs:w-[18rem] ssm:w-[21rem] rounded-lg shadow-lg relative">

<Helmet>
    <title>Profile Page</title>

    </Helmet>
    <div className="flex flex-col items-center ">
        <img
          src={user?.photoURL}
          alt="Profile"
          className="w-36 h-36 object-cover rounded-full shadow-md"
        />
        <h2 className="mt-4 text-2xl font-bold text-gray-800 dark:text-[white]">
          {user?.displayName}
        </h2>
        <p className="text-gray-500 dark:text-[white]">{user?.email}</p>
        <div>
          <strong
            className={!user?.isBlocked ? "text-green-500" : "text-red-500"}
          >
            {!user?.isBlocked ? "Active" : "Blocked"}
          </strong>
        </div>
      </div>


      <div className="mt-6 w-full">
        <h3 className="text-xl font-bold text-gray-700 dark:text-[white]">Profile Details</h3>
        <hr />
        <ul className="mt-3 text-gray-600 space-y-2 dark:text-[white]">
          <li>
            <strong>Role:</strong> {user?.isAdmin ? "Admin" : "User"}
          </li>
          <li>
            <strong>Email:</strong> {user?.email}
          </li>
          <li>
            <strong>Phone:</strong> {user?.phone || "N/A"}
          </li>
          <li>
            <strong>Address:</strong> {user?.address || "N/A"}
          </li>
          <hr />
          <li>
            <strong>Unique ID:</strong> {user?.uid}
          </li>
        </ul>
      </div>


       {/* Edit Button with React Icon */}
       {!user?.isBlocked ? (
        <button
          className="absolute top-4 right-4 text-gray-500 dark:text-[wheat] hover:text-blue-600 transition-transform transform hover:scale-105"
          // onClick={handleOpenEditModal}
        > <Link to={`/dashboard/user_edit/${user?.uid}`} > <FiEdit size={24} /></Link> 
         
        </button>
      ) : null}





      </div>
  )
}

export default Profile