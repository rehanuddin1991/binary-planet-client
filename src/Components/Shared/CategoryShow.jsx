import React, { useState } from 'react'
import { backend_uri } from '../../CommonResources';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const CategoryShow = ({all_data,setCategoryData,singleCategory}) => {

    const navigate=useNavigate();
     const [newList,setNewList]=useState([]);
     const handleDelete=(id)=>
     {
      // alert(id);
       fetch(`${backend_uri}/category/${id}`, {method:"DELETE"})
         .then(response => response.json())
         .then((data) => {
           //console.log(data);
           if (data.deletedCount ) {
             toast.success('Successfully deleted from mongodb!')
             const remainingCategory=all_data.filter((item)=>item._id!==id )
             //console.log(remainingCategory);
             setCategoryData(remainingCategory);
             navigate("/dashboard/category")
             
           }
         })
         .catch((err) => {
           if (err) toast.success('failed to delete  !')
         }
   
         )
     }
      
       
     return (
       
         
         <tr className='grid grid-cols-3' >
           
            
           
           <td style={{ wordWrap:"break-word", wordBreak:"break-word"}}  className="border border-white">{singleCategory.categoryName}</td>
          
           <td style={{ wordWrap:"break-word", wordBreak:"break-word"}}  className="border border-white">
           <Link to={`/category_edit/${singleCategory._id}`} >Edit</Link>  
             </td>
           <td style={{ wordWrap:"break-word", wordBreak:"break-word"}}  className="border border-white">  
             <button onClick={()=>handleDelete(singleCategory._id)}>Delete</button> </td>
           
         </tr>
        
        
          
      
     )

   
}

export default CategoryShow