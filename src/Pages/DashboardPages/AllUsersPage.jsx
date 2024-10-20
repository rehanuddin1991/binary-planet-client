import React, { useContext, useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import { backend_uri } from '../../CommonResources';
 
import CategoryShow from '../../Components/Shared/CategoryShow';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../provider/AuthProvider';

const AllUsersPage = () => {
    const all_Users_data=useLoaderData();
 const [usersdata,setUserdata]=useState(all_Users_data);
 console.log(all_Users_data,30000);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext)
  const navigate = useNavigate();
  const handleCategoryAdd = async    (e) => {


      e.preventDefault();
      setError(null);
      const form = new FormData(e.currentTarget);
      const category_name = form.get("category_name");       
      const category_description = form.get("category_description");       
      const image = form.get("image");
     

      const data=new FormData();
      data.append("image",image);
      fetch("https://api.imgbb.com/1/upload?key=17fa820efcd11eb14174837ba6528037",{
        method: "POST",
        body:data
      })
      .then((res)=>res.json())
      .then(async data=>
      {
        const image_url=data.data.display_url;
        //console.log(email)
      try {
        const inputObj={
            categoryName:category_name,
            categoryDescription:category_description,
            imageURL:image_url
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputObj)
        };
        fetch(`${backend_uri}/category`, requestOptions)
            .then(response => response.json())
            .then((data)=>{
                if(data.insertedId){
                    toast.success('Category Saved Successfully!');
                    setCategoryData(data);
                    navigate("/dashboard/category")

                }
            })
             
      } catch (error) {
        setError(error.message)
      }
      }
      )
     
      
      

       
             
         
          // e.target.name.value="";
          // e.target.email.value="";
          // e.target.password.value="";
          // navigate("/");


    }
  return (
<>
<Helmet>
    <title>All Users</title>

    </Helmet>
    

<div className=" mt-10             card bg-base-100  xs:w-[17rem] xs:ml-2 ssm:w-[20rem] ssm:ml-5 
      sm:w-[24rem] sm:ml-16   md:w-[24rem] md:ml-35 lg:w-[35rem] lg:ml-35 xl:w-[45rem] xl:px-32  shadow-2xl">


       
        

      <div   className=" mt-6
                      bg-[darkcyan] text-[aliceblue]">
          <table className="table " border="1">
            {/* head */}
            <thead className='text-[white] text-left'>
              <tr className='grid grid-cols-3 overflow-auto whitespace-normal 	 '>
                <th style={{ wordWrap:"break-word", wordBreak:"break-word"}} className="	   border border-white">Name</th>
                 
                <th style={{ wordWrap:"break-word", wordBreak:"break-word"}} className=" 	 border border-white"  > Action</th>
                <th style={{ wordWrap:"break-word", wordBreak:"break-word"}} className=" 	 border border-white"  > Action</th>


              </tr>
            </thead>
            <tbody className='text-left '>

              {/* {
                usersdata.map((category) => {

                  return (<CategoryShow key={category._id} all_data={categoryData} setCategoryData={setCategoryData} singleCategory={category}></CategoryShow>)
                })
              } */}

            </tbody>
          </table>
        </div>
  
    </div>

    
      
      </>
  )
}

export default AllUsersPage