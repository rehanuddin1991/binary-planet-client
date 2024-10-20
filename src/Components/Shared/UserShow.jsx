import React, { useState } from 'react'
import { backend_uri } from '../../CommonResources';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const UserShow = ({all_data,setUserData,singleUser}) => {

    const navigate=useNavigate();
     const [newList,setNewList]=useState([]);
     const handleDelete=(id)=>
      {
       // alert(id);
        fetch(`${backend_uri}/user/${id}`, {method:"DELETE"})
          .then(response => response.json())
          .then((data) => {
            //console.log(data);
            if (data.deletedCount ) {
              toast.success('Successfully deleted from mongodb!')
              const remainingUser=all_data.filter((item)=>item.uid!==id )
              //console.log(remainingUser,);
              setUserData(remainingUser);
              navigate("/dashboard/allUsers")
              
            }
          })
          .catch((err) => {
            if (err) toast.success('failed to delete  !')
          }
    
          )
      }
       
     return (
       
         
         <tr className='grid grid-cols-4' >
           
            
           
           <td style={{ wordWrap:"break-word", wordBreak:"break-word"}}  className="border border-white">{singleUser.displayName}</td>
           <td style={{ wordWrap:"break-word", wordBreak:"break-word"}}  className="border border-white">{singleUser.email}</td>
          
           <td style={{ wordWrap:"break-word", wordBreak:"break-word"}}  className="border border-white">
           <Link to={`/dashboard/user_edit/${singleUser.uid}`} ><FaRegEdit /></Link>  
             </td>
           <td style={{ wordWrap:"break-word", wordBreak:"break-word"}}  className="border border-white">  
             <button onClick={()=>handleDelete(singleUser.uid)}><RiDeleteBin6Line/></button> </td>
           
         </tr>
        
        
          
      
     )

   
}

export default UserShow