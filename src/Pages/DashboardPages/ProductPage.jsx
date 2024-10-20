import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
 
import toast from 'react-hot-toast'
import axios from 'axios';

import { backend_uri } from '../../CommonResources';
import { AuthContext } from '../../Provider/AuthProvider';
import ProductShow from '../../Components/Shared/ProductShow';
import { Helmet } from 'react-helmet-async';


const ProductPage = () => {
  const all_product_data = useLoaderData();
  const [productData, setproductData] = useState(all_product_data);
  //console.log(productData,30000);

  const [options, setOptions] = useState(null);
  //console.log(`${backend_uri}/category`)
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


  //console.log(options, 3435)

  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext)
  const navigate = useNavigate();
  const handleproductAdd = async (e) => {


    e.preventDefault();
    setError(null);
    const form = new FormData(e.currentTarget);
    const product_name = form.get("product_name");
    const product_category = form.get("product_category");
    //console.log(product_category,"cat")
    const product_price = form.get("product_price");
    const product_rating = form.get("product_rating");
    const image = form.get("image");


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
                toast.success('product Saved Successfully!');
                setproductData(data);
                navigate("/dashboard/product")

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
        <title>Product Page</title>

      </Helmet>
      <div className=" mt-10             card bg-base-100  xs:w-[17rem] xs:ml-2 ssm:w-[20rem] ssm:ml-5 
      sm:w-[24rem] sm:ml-16   md:w-[24rem] md:ml-35 lg:w-[35rem] lg:ml-35 xl:w-[45rem] xl:px-32  shadow-2xl">

        <form className=" card-body" onSubmit={handleproductAdd}>
          <legend className='text-[indigo] text-xl'>Add Product</legend>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input type="text" name="product_name" placeholder="Input Your Product Name" className="input 
            input-bordered input-info w-full max-w-xs" required />
          </div>



          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input type="file" name="image" className="" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Category</span>
            </label>
            <select name="product_category" id="product_category" required className='input input-bordered input-info dropdown-content  w-full
             max-w-xs'>
              <option value="0">Select Category</option>
              {
                options?.map((item)=>{
                  return (
                    <option value={item?.value}>{item?.label}</option>
                  )
                })
              }
            
              
            </select>
          </div>




          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <input type="text" name="product_price" placeholder="Input Your Product Price" className="input input-bordered input-info w-full max-w-xs" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input type="text" name="product_rating" placeholder="Input Your Product Rating" className="input input-bordered input-info w-full max-w-xs" required />
          </div>











          <div className="form-control mt-4  ">
            <input className="mx-auto btn btn-primary w-24  md:-ml-0 lg:-ml-0 md:w-40 lg:w-40" type="submit" value="Save" />
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