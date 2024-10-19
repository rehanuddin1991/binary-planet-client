import React from 'react'
import { NavLink } from 'react-router-dom';
import { backend_uri } from '../../CommonResources';

const SingleCategory = ({ props }) => {
    // console.log(item,444444);
    const { categoryName, imageURL,_id } = props;
    return (
        <>
            <div className="card bg-base-100 xs:w-[18rem] xs:-ml-10 w-80 shadow-xl">
                <figure>
                    <img className='h-40 w-full'
                        src={imageURL}
                        alt="category" />
                </figure>
                <div className="card-body text-center mx-auto">
                    <h2 className="card-title mx-auto text-2xl text-[indigo]"> {categoryName}</h2>
                    
                    <div className="card-actions justify-end ">
                        <button className="btn h-[2rem] max-h-[2rem] text-[white] bg-[darkcyan]">
                            <NavLink to={`/categorywiseproduct/${_id}`}>See All Products</NavLink>
                        </button>  
                    </div>
                </div>
            </div>

        </>

    )
}

export default SingleCategory