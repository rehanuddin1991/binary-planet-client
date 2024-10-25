import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SingleBuyProduct = ({ props }) => {
    // console.log(item,444444);
    const { productName, imageURL,productRating,productPrice,_id,productQuantity,productDeliveryAddress } = props;
    const {user}=useContext(AuthContext);
    const navUrl=user? `/product_details/${_id}`:"/login";
    //console.log(navUrl,33)
    return (
        <div className='dark:text-[white] dark:bg-[#1c2229]   '>
            <div className="dark:text-[white] dark:bg-[#1D232A] card bg-base-100 xs:w-[17rem]
              xs:ml-5 ssm:ml-6 w-80 lg:w-[30rem] lg:ml-10 shadow-xl">
                <figure>
                    <img className='h-40 w-full'
                        src={imageURL}
                        alt="product" />
                </figure>
                <div className="card-body text-left   space-y-6">
                    <h2 className="card-title   text-2xl text-[indigo] dark:text-[white]">Title:&nbsp; {productName.slice(0,40)}....</h2>
                    <h2 className="card-title   text-2xl text-[darkcyan] dark:text-[cyan]">Price:&nbsp;{productPrice}</h2>
                    <h2 className="card-title   text-2xl text-[indigo] dark:text-[white]">Rating:&nbsp;{productRating}</h2>
                    <h2 className="card-title   text-2xl text-[indigo] dark:text-[white]">Purchase Quantity:&nbsp;{productQuantity}</h2>
                    <h2 className="card-title   text-2xl text-[indigo] dark:text-[white]">Shipping Address: &nbsp; {productDeliveryAddress}</h2>
                    <button className='btn  w-24 bg-[orange] text-black'>Payment</button>
                    
                     
                </div>
            </div>

        </div>

    )
}

export default SingleBuyProduct