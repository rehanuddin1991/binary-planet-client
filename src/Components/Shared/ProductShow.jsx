import React, { useState } from 'react'
import { backend_uri } from '../../CommonResources';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
const ProductShow = ({all_data,setproductData,singleproduct}) => {

    const navigate=useNavigate();
     const [newList,setNewList]=useState([]);
     const handleDelete=(id)=>
     {
      // alert(id);
       fetch(`${backend_uri}/product/${id}`, {method:"DELETE"})
         .then(response => response.json())
         .then((data) => {
           //console.log(data);
           if (data.deletedCount ) {
             toast.success('Successfully deleted from mongodb!')
             const remainingproduct=all_data.filter((item)=>item._id!==id )
             //console.log(remainingproduct);
             setproductData(remainingproduct);
             navigate("/dashboard/product")
             
           }
         })
         .catch((err) => {
           if (err) toast.success('failed to delete  !')
         }
   
         )
     }
      
       
     return (
       
         
         <tr className='grid grid-cols-4' >
           
            
           
           <td style={{ wordWrap:"break-word", wordBreak:"break-word"}}  className="border border-white">{singleproduct.productName}</td>
           <td style={{ wordWrap:"break-word", wordBreak:"break-word"}}  className="border border-white">{singleproduct.productPrice}</td>
          
           <td style={{ wordWrap:"break-word", wordBreak:"break-word"}}  className="border border-white">
           <Link to={`/dashboard/product_edit/${singleproduct._id}`} > <FaRegEdit />
            </Link>  
             </td>
           <td style={{ wordWrap:"break-word", wordBreak:"break-word"}}  className="border border-white">  
             <button onClick={()=>handleDelete(singleproduct._id)}> <RiDeleteBin6Line/> </button> </td>
           
         </tr>
        
        
          
      
     )

   
}

export default ProductShow