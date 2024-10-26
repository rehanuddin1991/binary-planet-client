import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form';
import { backend_uri } from '../../CommonResources';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Provider/AuthProvider';

const RegisterPage = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext)
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { name: '', email: '', password: '', phone: '', address: '' }
  });

  const handleRegister = async (form_data) => {

    const name = form_data.name;
    const email = form_data.email;
    const phone = form_data.phone;
    const address = form_data.address;
    const password = form_data.password;
    const image = form_data.image[0];
    if (password.length < 6) {
      alert("password must be at least 6 characters");
      return null;
    }

    const data = new FormData();
    data.append("image", image);
    fetch("https://api.imgbb.com/1/upload?key=17fa820efcd11eb14174837ba6528037", {
      method: "POST",
      body: data
    })
      .then((res) => res.json())
      .then(async data => {
        const image_url = data.data.display_url;
        //console.log(email)
        try {
          const createdUser = await createUser(email, password, name, phone, address, image_url);
          //const reslt=await createdUser.json();   
          //console.log('created user',reslt);
          toast.success('Successfully Registered!');
          navigate("/");
          window.location.reload();
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

        <form className="card-body" onSubmit={handleSubmit(handleRegister)} >
          <legend className='text-[indigo] dark:text-[white]   text-xl'>Register Here</legend>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Input Your Name"
              className="input input-bordered input-info w-full max-w-xs"  {...register("name", {
                required: " Name is Required"
              })} />
            <br /> {errors.name && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.name.message}</p>}
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email"  {...register("email", {
              required: " Email is Required",
              validate: (value) => {
                if (!value.includes("@")) {
                  return "Email must have @ sign";
                }

                return true;
              }
            })} placeholder="Input Your Email" className="input input-bordered input-info w-full max-w-xs" />
            <br /> {errors.email && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.email.message}</p>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password"  {...register("password", {
              required: " Password is Required",
              minLength:
              {

                value: 6,
                message: "Password must have at least six characters",
              }

            })} placeholder="password" className="input input-bordered
                 input-info w-full max-w-xs"  />
            <br /> {errors.password && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.password.message}</p>}

          </div>



          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input type="text" placeholder="Input Your Phone" className="input input-bordered input-info 
                w-full max-w-xs"   {...register("phone", {
              required: " Phone is Required"
              ,
              validate: (value) => {
                if (value.length < 11) {
                  return "Phone No. must have 11 Digits";
                }
                if (value.length > 11) return "Phone No. must have 11 Digits";

                return true;
              },



            })} />
            <br /> {errors.phone && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.phone.message}</p>}
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input type="text" name="address" placeholder="Input Your Address"
              className="input input-bordered input-info w-full max-w-xs"   {...register("address", {
                required: " Address is Required"
              })} />
            <br /> {errors.address && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.address.message}</p>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input type="file" name="image" className=""  {...register("image", {
              required: " Image is Required"
            })} />
            <br /> {errors.image && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.image.message}</p>}
          </div>






          <div className="form-control mt-2  ">
            <input className="mx-auto btn btn-primary w-24 lg:w-40 sm:w-24 md:w-32" type="submit" value="Register" />


          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text text-center ">Already have an account?<Link to="/login"> <br />
                <button className="btn btn-info w-14 xs:w-28 xs:ml-6 ssm:w-28 ssm:ml-16 mt-1  
                  sm:ml-24 md:ml-40 sm:w-32 md:w-32 lg:w-40 lg:ml-28 ">Login</button>
              </Link></span>
            </label>


          </div>









        </form>
      </div>


    </div>
  )
}

export default RegisterPage