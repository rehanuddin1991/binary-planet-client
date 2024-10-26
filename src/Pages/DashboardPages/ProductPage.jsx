import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { backend_uri } from '../../CommonResources';
import ProductShow from '../../Components/Shared/ProductShow';
import { Helmet } from 'react-helmet-async';



const ProductPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      product_name: '', product_category: '', product_price: '', product_rating: '',
      product_description: '', product_quantity: '',
    }
  });


  const all_product_data = useLoaderData();
  const [productData, setproductData] = useState(all_product_data);

  const [options, setOptions] = useState(null);
  async function getCategory() {
    const { data } = await axios.get(`${backend_uri}/category`)
    const options = data.map((item) => ({
      "value": item._id,
      "label": item.categoryName
    }))
    setOptions(options)
  }

  useEffect(() => {
    getCategory();
  }, [])


  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext)
  const navigate = useNavigate();
  const handleproductAdd = async (form_data) => {


    setError(null);
    const product_name = form_data.product_name;
    const product_category = form_data.product_category;
    const product_price = form_data.product_price;
    const product_rating = form_data.product_rating;
    const product_description = form_data.product_description;
    const product_quantity = form_data.product_quantity;
    const image = form_data.image[0];


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
          const inputObj = {
            productName: product_name,
            productPrice: product_price,
            productCategory: product_category,
            productDescription: product_description,
            productQuantity: product_quantity,
            productRating: product_rating,
            imageURL: image_url
          }

          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputObj)
          };
          fetch(`${backend_uri}/product`, requestOptions)
            .then(response => response.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success('Product Saved Successfully!');
                setproductData(data);
                navigate("/dashboard/product")

              }
            })

        } catch (error) {
          setError(error.message)
        }
      }
      )



  }
  return (
    <>
      <Helmet>
        <title>Product Page</title>

      </Helmet>
      <div className=" mt-10    dark:text-[white] dark:bg-[#1D232A]         card bg-base-100  xs:w-[17rem] xs:ml-2 ssm:w-[20rem] ssm:ml-5 
      sm:w-[24rem] sm:ml-16   md:w-[24rem] md:ml-35 lg:w-[35rem] lg:ml-35 xl:w-[45rem] xl:px-32  shadow-2xl">

        <form className=" card-body" onSubmit={handleSubmit(handleproductAdd)}  >
          <legend className='text-[indigo] text-xl dark:text-[whitesmoke]'>Add Product</legend>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold dark:text-[wheat]">Product Name</span>
            </label>
            <input type="text" {...register("product_name", {
              required: "Product Name is Required"
            })} placeholder="Input Product Name" className="input 
            input-bordered input-info w-full max-w-xs"   />

            <br /> {errors.product_name && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.product_name.message}</p>}
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold dark:text-[wheat]">Product Description</span>
            </label>
            <input type="text" {...register("product_description", {
              required: "Description is Required"
            })} placeholder="Input Product Description" className="input 
            input-bordered input-info w-full max-w-xs"   />

            <br /> {errors.product_description && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.product_description.message}</p>}
          </div>



          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold dark:text-[wheat]">Product Quantity</span>
            </label>
            <input type="text"  {...register("product_quantity", {
              required: "Quantity is Required"
            })} placeholder="Product Quantity" className="input 
            input-bordered input-info w-full max-w-xs"   />
            <br /> {errors.product_quantity && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.product_quantity.message}</p>}
          </div>



          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-[wheat]">Image</span>
            </label>
            <input type="file" className=""  {...register("image", {
              required: "Image is Required"
            })} />
            <br /> {errors.image && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.image.message}</p>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-[wheat]">Product Category</span>
            </label>
            <select  {...register("product_category", {
              required: "Category  is Required"
            })} id="product_category" className='input input-bordered input-info dropdown-content  w-full
             max-w-xs'>
              <option value="0">Select Category</option>
              {
                options?.map((item) => {
                  return (
                    <option value={item?.value}>{item?.label}</option>
                  )
                })
              }


            </select>
            <br /> {errors.product_category && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.product_category.message}</p>}
          </div>




          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold dark:text-[wheat]">Unit Price</span>
            </label>
            <input type="text" placeholder="Input Your Product Price"
              className="input input-bordered input-info w-full max-w-xs"  {...register("product_price", {
                required: "Price is Required"
              })} />
            <br /> {errors.product_price && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.product_price.message}</p>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold dark:text-[wheat]">Rating</span>
            </label>
            <input type="text"  {...register("product_rating", {
              required: "Rating is Required"
            })} placeholder="Input Your Product Rating"
              className="input input-bordered input-info w-full max-w-xs" />
            <br /> {errors.product_rating && <p className='text-red-500 dark:text-[wheat] text-xs'>{errors.product_rating.message}</p>}
          </div>

          <div className="form-control mt-4  ">
            <input className="mx-auto btn btn-primary w-24  md:-ml-0 lg:-ml-0 md:w-40 lg:w-40 dark:text-[whitesmoke] dark:bg-[darkblue]" type="submit" value="Save" />
            <br />
            {
              error ? error : ""
            }

          </div>


        </form>
        <div className=" mt-6
                      bg-[darkcyan] text-[aliceblue]">
          <table className="table " border="1">
            {/* head */}
            <thead className='text-[white] text-center'>
              <tr className='grid grid-cols-4 overflow-auto whitespace-normal 	 '>
                <th style={{ wordWrap: "break-word", wordBreak: "break-word" }} className="	   border border-white">Name</th>
                <th style={{ wordWrap: "break-word", wordBreak: "break-word" }} className="	   border border-white">Price</th>

                <th style={{ wordWrap: "break-word", wordBreak: "break-word" }} className="  	 border border-white"  >
                  Edit

                </th>
                <th style={{ wordWrap: "break-word", wordBreak: "break-word" }} className=" 	 border border-white"  >

                  Delete  </th>


              </tr>
            </thead>
            <tbody className='text-center '>

              {
                productData.map((product) => {

                  return (<ProductShow key={product._id} all_data={productData} setproductData={setproductData} singleproduct={product}></ProductShow>)
                })
              }

            </tbody>
          </table>
        </div>
      </div>




    </>
  )
}

export default ProductPage