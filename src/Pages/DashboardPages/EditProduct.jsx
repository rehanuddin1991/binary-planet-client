import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { backend_uri } from '../../CommonResources';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const EditProduct = () => {
    const [error, setError] = useState(null);
    const loaderData = useLoaderData();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            product_name: loaderData.productName, product_category: loaderData.productCategory,
            product_price: loaderData.productPrice, product_rating: loaderData.productRating,
            product_description: loaderData.productDescription, product_quantity: loaderData.productQuantity
        }
    });
    const navigate = useNavigate();


    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${backend_uri}/category`)// replace with your API endpoint
                setOptions(response.data);
                //console.log('first',response.data)
                // Preselect the first option or any specific logic
                if (loaderData.productCategory)
                    setSelectedOption(loaderData.productCategory);
                else setSelectedOption(null);
            } catch (error) {
                // console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    //console.log('selceted',selectedOption)

    const handleproductUpdate = async (form_data) => {
        //e.preventDefault();
        setError(null);
        // const form = new FormData(e.currentTarget);
        const product_name = form_data.product_name;
        const product_description = form_data.product_description;
        const product_rating = form_data.product_rating;
        const product_price = form_data.product_price;
        const product_quantity = form_data.product_quantity;
        const product_category = form_data.product_category;
        const image = form_data.image[0];

        if (document.getElementById("image").files.length == 0) {
            //console.log("no files selected");

            const inputObj = {
                productName: product_name,
                productDescription: product_description,
                productRating: product_rating,
                productPrice: product_price,
                productQuantity: product_quantity,
                productCategory: product_category,
                imageURL: loaderData.imageURL,
            }
            // console.log(23333,inputObj)
            const inputData = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputObj)
            };

            fetch(`${backend_uri}/product/${loaderData._id}`, inputData)
                .then(response => response.json())
                .then((data) => {
                    //console.log(data);
                    if (data.modifiedCount) {
                        toast.success('Successfully Updated to mongodb!');
                        navigate("/dashboard/product/")
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
                            productName: product_name,
                            productDescription: product_description,
                            productRating: product_rating,
                            productPrice: product_price,
                            productQuantity: product_quantity,
                            productCategory: product_category,
                            imageURL: image_url,

                        }
                        // console.log('first', inputObj)

                        const inputData = {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(inputObj)
                        };

                        fetch(`${backend_uri}/product/${loaderData._id}`, inputData)
                            .then(response => response.json())
                            .then((data) => {
                                //console.log(data);
                                if (data.modifiedCount) {
                                    toast.success('Successfully Updated to mongodb!');
                                    navigate("/dashboard/product/")


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
        <div className=" mt-10 mx-auto         card bg-base-100  xs:w-[18rem] ssm:w-[21rem] ssm:ml-3
    sm:w-[23rem]   md:w-[23rem] lg:w-[30rem] shadow-2xl">
            <Helmet>
                <title>Edit Product</title>

            </Helmet>

            <form className="card-body" onSubmit={handleSubmit(handleproductUpdate)} >
                <legend className='text-[indigo] text-xl dark:text-[wheat]'>Update Product</legend>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[wheat]">Product Name</span>
                    </label>
                    <input type="text"{...register("product_name", {
                        required: "Product Name is Required"
                    })}
                        className="input input-bordered input-info w-full max-w-xs" />
                    <br /> {errors.product_name && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.product_name.message}</p>}
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[wheat]">Product Description</span>
                    </label>
                    <input type="text" {...register("product_description", {
                        required: "Description is Required"
                    })}
                        className="input input-bordered input-info w-full max-w-xs" />
                    <br /> {errors.product_description && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.product_description.message}</p>}
                </div>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[wheat]">Product Quantity</span>
                    </label>
                    <input type="text"   {...register("product_quantity", {
                        required: "Quantity is Required"
                    })}
                        className="input input-bordered input-info w-full max-w-xs" />
                    <br /> {errors.product_quantity && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.product_quantity.message}</p>}
                </div>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[wheat]">Image</span>
                    </label>
                    <input type="file" id='image'  {...register("image", {
                        required: false
                    })} className="" />
                    <br /> {errors.image && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.image.message}</p>}
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[wheat]">Product Category</span>
                    </label>
                    <select value={selectedOption}      {...register("product_category", {
                        required: "Category  is Required"
                    })} id="product_category" className='input input-bordered input-info dropdown-content  w-full
             max-w-xs'>
                        <option value="0">Select Category</option>

                        {options.map((option) => (
                            <option key={option?._id} value={option?._id}>
                                {option?.categoryName}
                            </option>
                        ))}



                    </select>
                    <br /> {errors.product_category && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.product_category.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold dark:text-[wheat]">Unit Price</span>
                    </label>
                    <input type="text"  {...register("product_price", {
                        required: "Price is Required"
                    })}
                        className="input input-bordered input-info w-full max-w-xs" />
                    <br /> {errors.product_price && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.product_price.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold dark:text-[wheat]">Rating</span>
                    </label>
                    <input type="text" {...register("product_rating", {
                        required: "Rating is Required"
                    })}
                        className="input input-bordered input-info w-full max-w-xs" />
                    <br /> {errors.product_rating && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.product_rating.message}</p>}
                </div>







                <div className="form-control mt-4  ">
                    <input className="mx-auto btn btn-primary w-24 lg:w-40 sm:w-24 md:w-32 dark:text-[white]" type="submit" value="Update" />
                    <br />
                    {
                        error ? error : ""
                    }

                </div>











            </form>
        </div>
    )
}

export default EditProduct