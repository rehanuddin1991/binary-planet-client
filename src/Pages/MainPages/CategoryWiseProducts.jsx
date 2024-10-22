import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import SingleProduct from '../../Components/Shared/SingleProduct';
import { Helmet } from 'react-helmet-async';
 

const CategoryWiseProducts = () => {
  const all_Product_data=useLoaderData();
  console.log(all_Product_data,123)

    //const allLoaderData=useLoaderData();
    //const [allData,setAllData]=useState(allLoaderData)

    //console.log(allLoaderData,8888)
    return  (
      <div className='dark:text-[white] dark:bg-[#1D232A]'>
        <Helmet>
    <title>Category Wise Product</title>

    </Helmet>
        <div className='  mt-8   grid grid-cols-1 gap-4 justify-around items-center 
         sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto sm:ml-10  '> 
          {
            all_Product_data?.map((item,index)=>{
              return <SingleProduct  key={item._id} props={item}></SingleProduct>
                
            })
          }
             
        </div>
        </div> 
      )
}

export default CategoryWiseProducts