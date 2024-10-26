import React, { useState } from 'react'
import { backend_uri } from '../../CommonResources';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit, FaUserShield } from "react-icons/fa";
import { ImBlocked } from "react-icons/im";
const UserShow = ({ all_data, setUserDataFromChild, singleUser }) => {

  const navigate = useNavigate();
  const [newList, setNewList] = useState([]);
  const handleDelete = (id) => {
    // alert(id);
    fetch(`${backend_uri}/user/${id}`, { method: "DELETE" })
      .then(response => response.json())
      .then((data) => {
        //console.log(data);
        if (data.deletedCount) {
          toast.success('Successfully deleted from mongodb!')
          const remainingUser = all_data.filter((item) => item.uid !== id)
          //console.log(remainingUser,);
          setUserDataFromChild(remainingUser);
          navigate("/dashboard/allUsers")

        }
      })
      .catch((err) => {
        if (err) toast.success('failed to delete  !')
      }

      )
  }



  const handleToggleBlocked = (singleUser) => {
    const id = singleUser.uid;
    const inputObj = {
      ...singleUser,
      isAdmin: singleUser.isAdmin,
      isBlocked: !singleUser.isBlocked,

    }

    const inputData = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputObj)
    };

    fetch(`${backend_uri}/user/${id}`, inputData)
      .then(response => response.json())
      .then((data) => {
        //console.log(data);
        if (data.modifiedCount) {
          toast.success('Successfully Updated to mongodb!');
          
          navigate("/dashboard/allUsers/")
        }
        window.location.reload();
      })
  }


  const handleToggleAdmin = (singleUser) => {
    const id = singleUser.uid;
    //console.log('first',singleUser);
    const inputObj = {
      ...singleUser,
      isAdmin: !singleUser.isAdmin,
      isBlocked: singleUser.isBlocked,

    }
    // console.log('input obj',inputObj)

    const inputData = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputObj)
    };

    fetch(`${backend_uri}/user/${id}`, inputData)
      .then(response => response.json())
      .then((data) => {
        //console.log(data);
        if (data.modifiedCount) {
          toast.success('Successfully Updated to mongodb!');
         
          navigate("/dashboard/allUsers/")
        }
        window.location.reload();
      })
  }

  return (


    <tr className='grid grid-cols-5' >



      <td style={{ wordWrap: "break-word", wordBreak: "break-word" }} className="border border-white">{singleUser.displayName}</td>
      <td style={{ wordWrap: "break-word", wordBreak: "break-word" }} className="border border-white">{singleUser.email}</td>
      <td style={{ wordWrap: "break-word", wordBreak: "break-word" }} className="border border-white">{singleUser.isAdmin ? "Admin" : "User"}</td>
      <td style={{ wordWrap: "break-word", wordBreak: "break-word" }} className="border border-white">{singleUser.isBlocked ? "in-active" : "Active"}</td>

      <td style={{ wordWrap: "break-word", wordBreak: "break-word" }} className="border border-white 
           grid grid-cols-2 xs:grid-cols-1 justify-start items-center gap-2  ">
        <Link title="Edit" to={`/dashboard/user_edit/${singleUser.uid}`} ><FaEdit /></Link>
        <button title="Delete" onClick={() => handleDelete(singleUser.uid)}><RiDeleteBin6Line /></button>
        <button title="Toggle Admin" onClick={() => handleToggleAdmin(singleUser)}><FaUserShield /></button>
        <button title="Toggle Block" onClick={() => handleToggleBlocked(singleUser)}><ImBlocked /></button>
      </td>


    </tr>


  )


}

export default UserShow