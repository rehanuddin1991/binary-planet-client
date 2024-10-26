import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { backend_uri } from '../../CommonResources';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
const EditCategory = () => {
    const [error, setError] = useState(null);
    const loaderData = useLoaderData();
    //console.log(loaderData,3344)
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { category_name: loaderData.categoryName, category_description: loaderData.categoryDescription }
    });

    const handleCategoryUpdate = async (form_data) => {
        
        const image = form_data.image[0];
        const category_name = form_data.category_name;
        const category_description = form_data.category_description;;

        if (document.getElementById("image").files.length == 0) {
            //console.log("no files selected");

            const inputObj = {
                categoryName: category_name,
                categoryDescription: category_description,
                imageURL: loaderData.imageURL,
            }
            //console.log(inputObj, 33333333)

            const inputData = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputObj)
            };

            fetch(`${backend_uri}/category/${loaderData._id}`, inputData)
                .then(response => response.json())
                .then((data) => {
                    //console.log(data);
                    if (data.modifiedCount) {
                        toast.success('Successfully Updated to mongodb!');
                        navigate("/dashboard/category/")
                    }
                })


        }

        else {
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
                            categoryName: category_name,
                            categoryDescription: category_description,
                            imageURL: image_url,

                        }

                        const inputData = {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(inputObj)
                        };

                        fetch(`${backend_uri}/category/${loaderData._id}`, inputData)
                            .then(response => response.json())
                            .then((data) => {
                                //console.log(data);
                                if (data.modifiedCount) {
                                    toast.success('Successfully Updated to mongodb!');
                                    navigate("/dashboard/category/")
                                    

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
                <title>Edit Category</title>

            </Helmet>

            <form className="card-body" onSubmit={handleSubmit(handleCategoryUpdate)}>
                <legend className='text-[indigo] text-xl dark:text-[white]'>Update Category</legend>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[wheat]">Category Name</span>
                    </label>
                    <input {...register("category_name", {
                        required: "Category Name is Required"
                    })} type="text"
                        className="input input-bordered input-info w-full max-w-xs" />
                    <br />
                    {errors.category_name && <p className='text-red-500 text-xs'>{errors.category_name.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[wheat]">Category Description</span>
                    </label>
                    <input type="text"  {...register("category_description", {
                        required: "Description is Required"
                    })}
                        className="input input-bordered input-info w-full max-w-xs" />
                    <br />
                    {errors.category_description && <p className='text-red-500 text-xs'>{errors.category_description.message}</p>}
                </div>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[wheat]">Image</span>
                    </label>
                    <input {...register("image", {
                        required: false
                    })} type="file" id='image' className="" />
                </div>






                <div className="form-control mt-4  ">
                    <input className="mx-auto btn btn-primary w-24 lg:w-40 sm:w-24 md:w-32" type="submit" value="Update" />


                </div>











            </form>
        </div>
    )
}

export default EditCategory