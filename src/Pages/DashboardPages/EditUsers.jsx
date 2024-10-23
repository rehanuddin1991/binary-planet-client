import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { backend_uri } from '../../CommonResources';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
const EditUsers = () => {
    const [error, setError] = useState(null);
    const loaderData = useLoaderData();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {  email:loaderData.email, displayName: loaderData.displayName , phone:loaderData.phone, address:loaderData.address }
    });
    //console.log(loaderData,3344)
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const handleUserUpdate = async (form_data) => {
        //e.preventDefault();
        setError(null);
        const image = form_data.image[0];
        const displayName=form_data.displayName
        const phone=form_data.phone
        const address=form_data.address

        if( document.getElementById("image").files.length == 0 ){
            //console.log("no files selected");
             
                const inputObj = {
                    displayName: displayName,
                    phone: phone,
                    address: address,
                    photoURL:loaderData.photoURL,
                }

                const inputData = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(inputObj)
                };

                fetch(`${backend_uri}/user/${loaderData.uid}`, inputData)
                            .then(response => response.json())
                            .then((data) => {
                                console.log(data);
                                if (data.modifiedCount) {
                                    toast.success('Successfully Updated to mongodb!');
                                    navigate("/dashboard/profile/")}
                                    window.location.reload();
                                })

                 
        }
          
        else{
            const data = new FormData();
            data.append("image", image);
             
            fetch("https://api.imgbb.com/1/upload?key=17fa820efcd11eb14174837ba6528037", {
                method: "POST",
                body: data
            })
                .then((res) => res.json())
                .then(async data => {
                    const image_url = data.data.display_url;
                    try {
                        const inputObj = {
                            displayName: displayName,
                            phone: phone,
                            address: address,
                            photoURL:image_url,
                            
                             

                        }

                        const inputData = {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(inputObj)
                        };

                        fetch(`${backend_uri}/user/${loaderData.uid}`, inputData)
                            .then(response => response.json())
                            .then((data) => {
                                console.log(data);
                                if (data.modifiedCount) {
                                    toast.success('Successfully Updated to mongodb!');
                                    navigate("/dashboard/profile/")
                                    window.location.reload();
                                    //  fetch("http://localhost:5000/courses")
                                    //  .then((res)=>res.json())
                                    //  .then(data=>setCourses(data))
                                    //  .catch(err=>console.error(err))

                                }
                            })
                            .catch((err) => {
                                if (err) toast.success('failed to update  !')
                            }

                            )



                    } catch (error) {

                    }
                })

        }










    }
    return (
        <div className=" mt-10 mx-auto         card bg-base-100  xs:w-[18rem] ssm:w-[22rem]
    sm:w-[23rem] lg:w-[34rem] md:w-[29rem] shadow-2xl">
         <Helmet>
    <title>Edit User</title>

    </Helmet>

            <form className="card-body "  onSubmit={handleSubmit(handleUserUpdate)}  >
                <legend className='text-[indigo] text-xl  dark:text-[white]'>Update User</legend>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[wheat]">Email</span>
                    </label>
                    <input readOnly  type="text"   {...register("email", {
                                    required:false
                                })}
                      className="text-[indigo] dark:text-[wheat] input input-bordered input-info w-full max-w-xs"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[wheat]">Name</span>
                    </label>
                    <input type="text"    {...register("displayName", {
                                    required: " Name is Required"
                                })}   
                      className="input input-bordered input-info w-full max-w-xs"   />
                       <br/> {errors.displayName && <p className='text-red-500 text-xs'>{errors.displayName.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[wheat]">Phone</span>
                    </label>
                    <input type="text"  {...register("phone", {
                  required: " Phone is Required"
                  ,
                  validate:(value)=>
                    {
                    if(value.length<11 )
                    {
                    return "Phone No. must have 11 Digits";
                    }
                    if(value.length>11)return "Phone No. must have 11 Digits";
                    // const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                    // if(!value.match(phoneno)) {
                    //   return "input only number"
                    // }
                    return true;
                  },
                   

                 
              })}  
                       className="input input-bordered input-info w-full max-w-xs"   />
                       <br/> {errors.phone && <p className='text-red-500 text-xs'>{errors.phone.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[wheat]">Address</span>
                    </label>
                    <input type="text"    {...register("address", {
                                    required: " Address is Required"
                                })}    
                       className="input input-bordered input-info w-full max-w-xs"   />
                       <br/> {errors.address && <p className='text-red-500 text-xs'>{errors.address.message}</p>}
                </div>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[wheat]">Image</span>
                    </label>
                    <input type="file" id='image' {...register("image", {
                                    required:false
                                })}   className=""  />
                </div>






                <div className="form-control mt-4  ">
                    <input className="dark:text-[white] mx-auto btn btn-primary w-24 lg:w-40 sm:w-24 md:w-32" type="submit" value="Update" />
                    <br />
                    {
                        error ? error : ""
                    }

                </div>











            </form>
        </div>
    )
}

export default EditUsers