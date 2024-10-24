import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SingleBuyProduct = ({ props }) => {
    // console.log(item,444444);
    const { productName, imageURL,productRating,productPrice,_id } = props;
    const {user}=useContext(AuthContext);
    const navUrl=user? `/product_details/${_id}`:"/login";
    //console.log(navUrl,33)
    return (
        <div className='dark:text-[white] dark:bg-[#1D232A] '>
            <div className="dark:text-[white] dark:bg-[#1D232A] card bg-base-100 xs:w-[17rem]
              xs:ml-5 ssm:ml-6 w-80 lg:w-[30rem] lg:ml-10 shadow-xl">
                <figure>
                    <img className='h-40 w-full'
                        src={imageURL}
                        alt="product" />
                </figure>
                <div className="card-body text-center mx-auto space-y-6">
                    <h2 className="card-title mx-auto text-2xl text-[indigo] dark:text-[white]">Title: {productName.slice(0,40)}....</h2>
                    <h2 className="card-title mx-auto text-2xl text-[darkcyan] dark:text-[cyan]">Price:{productPrice}</h2>
                    <h2 className="card-title mx-auto text-2xl text-[indigo] dark:text-[white]">Rating:{productRating}</h2>
                    
                     
                </div>
            </div>

        </div>

    )
}

export default SingleBuyProduct