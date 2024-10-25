import React, { useEffect, useState } from 'react'
import { backend_uri } from '../../CommonResources';
import SingleCategory from './SingleCategory';
import SingleMessage from './SingleMessage';

const MessageShow = () => {
    const [message,setMessage]=useState([]);
    useEffect(() => {
        const fetchCategoryData = async () => {
          try {
            // const response = await fetch("http://localhost:5000/messages");
            const response = await fetch(`${backend_uri}/message`);
            if (!response.ok) {
              throw new Error("Failed to fetch messages");
            }
            const data = await response.json();
            setMessage(data);
          } catch (error) {
            console.error("Error fetching messages:", error);
          }
        };
    
        fetchCategoryData();
      }, []);

      return  ( <div className='dark:text-[white] dark:bg-[#2d333b]'>
       <div className='p-2 flex items-center justify-center xs:text-xl text-3xl text-[darkcyan] dark:text-[wheat] mt-14 font-semibold'>
        <h1>All Message Here... </h1>
    </div>
      
        <div className='mb-4  mt-6 grid grid-cols-1 gap-4 justify-around items-center 
         sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto sm:ml-10  '> 
          {
            message.map((item,index)=>{
              return <SingleMessage  key={item._id} props={item}></SingleMessage>
                
            })
          }
             
        </div>
        </div>
      )
 
}

export default MessageShow