import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { backend_uri } from '../../CommonResources';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const EditUsers = () => {
    const [error, setError] = useState(null);
    const loaderData = useLoaderData();
    //console.log(loaderData,3344)
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const handleCategoryUpdate = async (e) => {
        e.preventDefault();
        setError(null);
        const form = new FormData(e.currentTarget);
        const displayName = form.get("displayName");
        const phone = form.get("phone");
        const address = form.get("address");
         
         
        const image = form.get("image");

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
                                    navigate("/dashboard/allUsers/")
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
        <div className=" mt-10 mx-auto         card bg-base-100  xs:max-w-[22rem] ssm:max-w-[20rem]
    sm:max-w-[28rem] lg:max-w-[34rem] md:max-w-[29rem] shadow-2xl">
         <Helmet>
    <title>Edit User</title>

    </Helmet>

            <form className="card-body" onSubmit={handleCategoryUpdate}>
                <legend className='text-[indigo] text-xl'>Update User</legend>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input readOnly disabled type="text" defaultValue={loaderData?.email} name="email"
                      className="input input-bordered input-info w-full max-w-xs"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" defaultValue={loaderData?.displayName} name="displayName"
                      className="input input-bordered input-info w-full max-w-xs" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="text" defaultValue={loaderData?.phone} name="phone" 
                       className="input input-bordered input-info w-full max-w-xs" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input type="text" defaultValue={loaderData?.address} name="address" 
                       className="input input-bordered input-info w-full max-w-xs" required />
                </div>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="file" id='image' name="image" className=""  />
                </div>






                <div className="form-control mt-4  ">
                    <input className="mx-auto btn btn-primary w-24 lg:w-40 sm:w-24 md:w-32" type="submit" value="Update" />
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