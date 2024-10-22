import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { backend_uri } from '../../CommonResources';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const EditProduct = () => {
    const [error, setError] = useState(null);
    const loaderData = useLoaderData();
    //console.log(loaderData,3344)
    const navigate = useNavigate();
     
    const handleproductUpdate = async (e) => {
        e.preventDefault();
        setError(null);
        const form = new FormData(e.currentTarget);
        const product_name = form.get("product_name");
        const product_description = form.get("product_description");
        const product_rating = form.get("product_rating");
        const product_price = form.get("product_price");
        const product_quantity = form.get("product_quantity");
        const image = form.get("image");

        if( document.getElementById("image").files.length == 0 ){
            //console.log("no files selected");
             
                const inputObj = {
                    productName: product_name,
                    productDescription: product_description,
                    productRating: product_rating,
                    productPrice: product_price, 
                    productQuantity: product_quantity, 
                    imageURL:loaderData.imageURL,
                }
                console.log(23333,inputObj)
                const inputData = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(inputObj)
                };

                fetch(`${backend_uri}/product/${loaderData._id}`, inputData)
                            .then(response => response.json())
                            .then((data) => {
                                console.log(data);
                                if (data.modifiedCount) {
                                    toast.success('Successfully Updated to mongodb!');
                                    navigate("/dashboard/product/")}
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
                            productName: product_name,
                            productDescription: product_description,
                            productRating: product_rating,
                            productPrice: product_price, 
                            productQuantity: product_quantity,
                            imageURL: image_url,

                        }
                        console.log('first',inputObj)

                        const inputData = {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(inputObj)
                        };

                        fetch(`${backend_uri}/product/${loaderData._id}`, inputData)
                            .then(response => response.json())
                            .then((data) => {
                                console.log(data);
                                if (data.modifiedCount) {
                                    toast.success('Successfully Updated to mongodb!');
                                    navigate("/dashboard/product/")
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
    <title>Edit Product</title>

    </Helmet>

            <form className="card-body" onSubmit={handleproductUpdate}>
                <legend className='text-[indigo] text-xl dark:text-[wheat]'>Update Product</legend>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[wheat]">Product Name</span>
                    </label>
                    <input type="text" defaultValue={loaderData?.productName} name="product_name"
                      className="input input-bordered input-info w-full max-w-xs" required />
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[wheat]">Product Description</span>
                    </label>
                    <input type="text" defaultValue={loaderData?.productDescription} name="product_description" 
                      className="input input-bordered input-info w-full max-w-xs" required />
                </div>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[wheat]">Product Quantity</span>
                    </label>
                    <input type="text" defaultValue={loaderData?.productQuantity} name="product_quantity" 
                      className="input input-bordered input-info w-full max-w-xs" required />
                </div>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-[wheat]">Image</span>
                    </label>
                    <input type="file" id='image' name="image" className=""  />
                </div>

                <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold dark:text-[wheat]">Unit Price</span>
            </label>
            <input type="text" name="product_price" defaultValue={loaderData?.productPrice} className="input input-bordered input-info w-full max-w-xs" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold dark:text-[wheat]">Rating</span>
            </label>
            <input type="text" name="product_rating" defaultValue={loaderData?.productRating} className="input input-bordered input-info w-full max-w-xs" required />
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