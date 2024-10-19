import React, { useEffect, useState } from 'react'
import { backend_uri } from '../../CommonResources';
import SingleCategory from './SingleCategory';

const Category = () => {
    const [category,setCategory]=useState([]);
    useEffect(() => {
        const fetchCategoryData = async () => {
          try {
            // const response = await fetch("http://localhost:5000/messages");
            const response = await fetch(`${backend_uri}/category`);
            if (!response.ok) {
              throw new Error("Failed to fetch messages");
            }
            const data = await response.json();
            setCategory(data);
          } catch (error) {
            console.error("Error fetching messages:", error);
          }
        };
    
        fetchCategoryData();
      }, []);

      return  ( <>
       <div className='flex items-center justify-center xs:text-xl text-3xl text-[darkcyan] mt-14 font-semibold'>
        <h1>Featured Category        </h1>
    </div>
      
        <div className='  mt-6 grid grid-cols-1 gap-4 justify-around items-center 
         sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto sm:ml-10  '> 
          {
            category.map((item,index)=>{
              return <SingleCategory  key={item._id} props={item}></SingleCategory>
                
            })
          }
             
        </div>
        </>
      )
 
}

export default Category