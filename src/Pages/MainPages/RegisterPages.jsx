import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
 
import { backend_uri } from '../../CommonResources';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Provider/AuthProvider';

const RegisterPage = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext)
  const navigate = useNavigate();
  const handleRegister = async    (e) => {


      e.preventDefault();
      setError(null);
      const form = new FormData(e.currentTarget);
      const name = form.get("name");
      const email = form.get("email");
      const phone = form.get("phone");
      const address = form.get("address");
      const password = form.get("password");
      const image = form.get("image");
      if (password.length < 6) {
        alert("password must be at least 6 characters");
        return null;
      }

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
        const createdUser= await createUser(email,password,name,phone,address,image_url);
        //const reslt=await createdUser.json();   
        //console.log('created user',reslt);
        toast.success('Successfully Registered!');
         e.target.name.value="";
         e.target.email.value="";
         e.target.password.value="";
           navigate("/");
      } catch (error) {
        setError(error.message)
      }
      }
      )

     
      
      

       
             
         
         


    }
  return (
<div className='dark:text-[white] dark:bg-[#1D232A]'>
<Helmet>
    <title>Register Here</title>

    </Helmet>
   


<div className=" mt-10   dark:text-[white] dark:bg-[#1D232A]            card bg-base-100  xs:w-[16rem] xs:-ml-8  
 ssm:w-[20rem] ssm:-ml-3 
      sm:w-[24rem] sm:ml-32  md:w-[24rem] md:ml-40  lg:w-[35rem] lg:ml-35 xl:w-[45rem] xl:px-32  shadow-2xl">
       
        <form className="card-body" onSubmit={handleRegister}>
          <legend className='text-[indigo] dark:text-[white]   text-xl'>Register Here</legend>
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Input Your Name" className="input input-bordered input-info w-full max-w-xs" required />
              </div>

        
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Input Your Email" className="input input-bordered input-info w-full max-w-xs" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" required className="input input-bordered
                 input-info w-full max-w-xs"  />

              </div>

              

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input type="text" name="phone" placeholder="Input Your Phone" className="input input-bordered input-info w-full max-w-xs" required />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input type="text" name="address" placeholder="Input Your Address" className="input input-bordered input-info w-full max-w-xs" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input type="file" name="image"   className="" required />
              </div>




             

              <div className="form-control mt-4  ">
                <input className="mx-auto btn btn-primary w-24 lg:w-40 sm:w-24 md:w-32" type="submit" value="Register" />
                <br />
                {
                  error ? error : ""
                }

              </div>

              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-center ">Already have an account?<Link to="/login"> <button className="btn btn-info w-14 lg:w-40 sm:w-24 md:w-32  ">Login</button>
                  </Link></span>
                </label>
                

              </div>





              
         
         
         
      </form>
    </div>
  
      
      </div>
  )
}

export default RegisterPage