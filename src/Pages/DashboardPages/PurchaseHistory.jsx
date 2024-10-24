import React, { useContext, useEffect, useState } from 'react'
 
import { Helmet } from 'react-helmet-async';
 
import { backend_uri } from '../../CommonResources';
import SingleBuyProduct from '../../Components/Shared/SingleBuyProduct';
import { useParams } from 'react-router-dom';

const PurchaseHistory = () => {
    //const all_Product_data=useLoaderData();
    const {id}=useParams();
    const [payment,setPayment]=useState(0);
    
    

     
    const [products,setProducts]=useState([]);
    useEffect(()=>{
      //console.log('first',`${backend_uri}/buy_product/${id}`)
      fetch(`${backend_uri}/buy_product/`)
      .then((res)=>res.json())
      .then(data=>{
      const data_up=  data.filter((item)=>{    return item.uid===id});
     
      setProducts(data_up)
      })
      console.log('pm11t',payment)
     // const remainingUser=products.filter((item)=>item.uid===id);
      //setProducts(remainingUser);
    },[])
     
    //console.log('33',products)
    return  ( <div className='dark:text-[white] dark:bg-[#1D232A]'>
      <Helmet>
    <title>Purchase History </title>

    </Helmet>
    <div className='mt-4 text-center font-semibold'> User's Purchase History </div>
        <div className=' dark:text-[white] dark:bg-[#1D232A] mt-8   grid grid-cols-1 gap-4 
        justify-around items-center 
         sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2   sm:ml-10  '> 
          
         
{
             
            products.length>0 && ( 
            products.map((item,index)=>{
              //setPayment(payment + item.productPrice)
              return <SingleBuyProduct  key={item._id} props={item}></SingleBuyProduct>
                
            })
          )
          
          }
             
        </div></div>
      )
}

export default PurchaseHistory