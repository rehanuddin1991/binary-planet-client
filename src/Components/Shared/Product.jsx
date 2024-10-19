import React, { useEffect, useState } from 'react'
import { backend_uri } from '../../CommonResources';
import SingleCategorry from './SingleCategorry';

const Product = () => {
    const [categorry,setCategorry]=useState([]);
    useEffect(() => {
        const fetchCategorryData = async () => {
          try {
            // const response = await fetch("http://localhost:5000/messages");
            const response = await fetch(`${backend_uri}/categorry`);
            if (!response.ok) {
              throw new Error("Failed to fetch messages");
            }
            const data = await response.json();
            setCategorry(data);
          } catch (error) {
            console.error("Error fetching messages:", error);
          }
        };
    
        fetchCategorryData();
      }, []);

      return  ( 
        <div className='  mt-6 grid grid-cols-1 gap-4 justify-around items-center 
         sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto sm:ml-10  '> 
          {
            categorry.map((item,index)=>{
              return <SingleP  key={item._id} props={item}></SingleCategorry>
                
            })
          }
             
        </div>
      )
 
}

export default Product