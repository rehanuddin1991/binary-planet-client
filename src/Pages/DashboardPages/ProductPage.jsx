import React, { useContext, useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import { backend_uri } from '../../CommonResources';
import { AuthContext } from '../../Provider/AuthProvider';
import ProductShow from '../../Components/Shared/ProductShow';
import { Helmet } from 'react-helmet-async';
 

const ProductPage = () => {
    const all_product_data=useLoaderData();
 const [productData,setproductData]=useState(all_product_data);
 console.log(productData,30000);
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext)
  const navigate = useNavigate();
  const handleproductAdd = async    (e) => {


      e.preventDefault();
      setError(null);
      const form = new FormData(e.currentTarget);
      const product_name = form.get("product_name");       
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
            productName:product_name,
            imageURL:image_url
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputObj)
        };
        fetch(`${backend_uri}/product`, requestOptions)
            .then(response => response.json())
            .then((data)=>{
                if(data.insertedId){
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
    <div className=" mt-10 mx-auto         card bg-base-100  xs:max-w-[22rem] ssm:max-w-[20rem]
      sm:max-w-[28rem] lg:max-w-[34rem] md:max-w-[29rem] shadow-2xl">
       
        <form className="card-body" onSubmit={handleproductAdd}>
          <legend className='text-[indigo] text-xl'>Add product</legend>
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input type="text" name="product_name" placeholder="Input Your Product Name" className="input input-bordered input-info w-full max-w-xs" required />
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

    <div   className=" mt-6
                      bg-[darkcyan] text-[aliceblue]">
          <table className="table " border="1">
            {/* head */}
            <thead className='text-[white] text-center'>
              <tr className='grid grid-cols-3 overflow-auto whitespace-normal 	 '>
                <th style={{ wordWrap:"break-word", wordBreak:"break-word"}} className="	   border border-white">Name</th>
                 
                <th style={{ wordWrap:"break-word", wordBreak:"break-word"}} className=" 	 border border-white"  > Action</th>
                <th style={{ wordWrap:"break-word", wordBreak:"break-word"}} className=" 	 border border-white"  > Action</th>


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
  
      
      </>
  )
}

export default ProductPage