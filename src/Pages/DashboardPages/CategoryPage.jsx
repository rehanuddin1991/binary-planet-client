import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import { backend_uri } from '../../CommonResources';
import { AuthContext } from '../../Provider/AuthProvider';

const CategoryPage = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext)
  const navigate = useNavigate();
  const handleCategoryAdd = async    (e) => {


      e.preventDefault();
      setError(null);
      const form = new FormData(e.currentTarget);
      const category_name = form.get("category_name");       
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
                if(data.insertedId)toast.success('Category Saved Successfully!');
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
    <div className=" mt-10 mx-auto         card bg-base-100  xs:max-w-[22rem] ssm:max-w-[20rem]
      sm:max-w-[28rem] lg:max-w-[34rem] md:max-w-[29rem] shadow-2xl">
       
        <form className="card-body" onSubmit={handleCategoryAdd}>
          <legend className='text-[indigo] text-xl'>Add Category</legend>
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Category Name</span>
                </label>
                <input type="text" name="category_name" placeholder="Input Your Category Name" className="input input-bordered input-info w-full max-w-xs" required />
              </div>

         

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input type="file" name="image"   className="" required />
              </div>




             

              <div className="form-control mt-4  ">
                <input className="mx-auto btn btn-primary w-24 lg:w-40 sm:w-24 md:w-32" type="submit" value="Save" />
                <br />
                {
                  error ? error : ""
                }

              </div>

               





              
         
         
         
      </form>
    </div>
  
      
      </>
  )
}

export default CategoryPage