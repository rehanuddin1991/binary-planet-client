import React, { useContext, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { backend_uri } from '../../CommonResources';

const ProductDetails = () => {
    const loaderData = useLoaderData();
    const navigate=useNavigate();
    const {user}=useContext(AuthContext);
    const [error,setError]=useState(null);
    const handleProductPurchase = async    (e) => {

        e.preventDefault();
        setError(null);
        const form = new FormData(e.currentTarget);
        const product_name = form.get("product_name");       
        const product_id = form.get("product_id");       
        const user_id = form.get("user_id");      
        
        //console.log(product_name,product_id,user_id);
        
       
  
         
        try {
          const inputObj={
              productName:loaderData.productName,
              productPrice:loaderData.productPrice,
              productRating:loaderData.productRating,
              imageURL:loaderData.imageURL,
              productCategory:loaderData.productCategory,
              productId:loaderData._id,
              uid:user_id 
          }
  
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(inputObj)
          };
          fetch(`${backend_uri}/buy_product`, requestOptions)
              .then(response => response.json())
              .then((data)=>{
                  if(data.insertedId){
                      toast.success('Information Saved Successfully!');
                       
                      navigate("/allproducts") 
           
            // e.target.name.value="";
            // e.target.email.value="";
            // e.target.password.value="";
            // navigate("/");
  
                  }
              })
               
        } catch (error) {
          setError(error.message)
        }
        
        
       
  
  
      }

    return (
        <>
            <div className="mt-8 card bg-base-100 
             shadow-xl"><br /> <br />
                <figure>
                    <img className='rounded-md '
                        src={loaderData?.imageURL}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-center text-xl font-semibold text-[midnightblue]">
                    <p>
                    {loaderData?.productName}
                        
                    </p>
                    <p>{loaderData?.productPrice}</p>
                    <p>{loaderData?.productRating}</p>
                    <div className="card-actions justify-center">
                          <button className='btn btn-info'
                         onClick={()=>document.getElementById('my_modal_5').showModal()}
                            >Buy Now</button> 
                        
                    </div>
                </div>
            </div>



            {/* Open the modal using document.getElementById('ID').showModal() method */}
 
<dialog id="my_modal_5" className="modal  modal-bottom sm:modal-middle ">
  <div className="modal-box  ">
    
     
    <div className="modal-action flex justify-around items-center">
    <h3 className="font-bold text-lg">Product Details</h3>
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-info">Close</button>
      </form>
    </div>

    <div className=" mt-1             card bg-base-100  xs:w-[17rem] xs:ml-2 ssm:w-[20rem] ssm:ml-5 
      sm:w-[24rem] sm:ml-16   md:w-[24rem] md:ml-35  lg:w-[24rem] lg:ml-35  xl:w-[24rem] xl:ml-35  shadow-2xl">

        <form className=" card-body" onSubmit={handleProductPurchase}>
          <legend className='text-[indigo] text-xl'>Buy Product &nbsp;&nbsp;  
             </legend>
          <div className="form-control mt-4  ">
           
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Customer Name</span>
            </label>
            <input defaultValue={user?.displayName} readOnly type="text" name="customer_name"   className="input 
            input-bordered input-info w-full max-w-xs" required />
            <input type="hidden" name="user_id" value={user?.uid} />
            <input type="hidden" name="product_id" value={loaderData?._id} />
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input readOnly type="text" defaultValue={loaderData?.productName} name="product_name" placeholder="Input Your Product Name" className="input 
            input-bordered input-info w-full max-w-xs" required />
          </div>



          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <img src={loaderData?.imageURL} alt="" />
          </div>

           




          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <input readOnly defaultValue={loaderData?.productPrice} type="text" name="product_price" placeholder="Input Your Product Price" className="input input-bordered input-info w-full max-w-xs" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input readOnly defaultValue={loaderData?.productRating} type="text" name="product_rating" placeholder="Input Your Product Rating" className="input input-bordered input-info w-full max-w-xs" required />
          </div>











          <div className="form-control mt-4  mx-auto ">
            <input className="mx-auto btn btn-primary w-24  md:-ml-0 lg:-ml-0 md:w-40 lg:w-40" type="submit" value="Buy" />
            <br />
            {
              error ? error : ""
            }

          </div>











        </form>
        
      </div>
  </div>
</dialog>
        </>
    )
}

export default ProductDetails