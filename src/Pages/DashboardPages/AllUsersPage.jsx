import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import { backend_uri } from '../../CommonResources';
 
import CategoryShow from '../../Components/Shared/CategoryShow';
import { Helmet } from 'react-helmet-async'; 
import UserShow from '../../Components/Shared/UserShow';
import { AuthContext } from '../../Provider/AuthProvider';

const AllUsersPage = () => {
    const all_Users_data=useLoaderData();
 const [usersdata,setUserdata]=useState(all_Users_data);
 //console.log("loader data after admin blocked",usersdata)  

//  useEffect(()=>{
//   //console.log("first",`${backend_uri}/user/`)
//   fetch(`${backend_uri}/user/`)
//                             .then((res)=>res.json())
//                             .then(data=>{
//                               setUserdata(data);
//                             })

//  },[usersdata])
   
   
  return (
<>
<Helmet>
    <title>All Users</title>

    </Helmet>
    

<div className=" mt-10              card bg-base-100  xs:w-[17rem] xs:ml-2 ssm:w-[20rem] ssm:ml-5 
      sm:w-[24rem] sm:ml-16   md:w-[24rem] md:ml-35 lg:w-[35rem] lg:ml-35 xl:w-[45rem] xl:px-32  shadow-2xl">


       
        

      <div   className=" 
                      bg-[darkcyan] text-[white] mt-3 mb-3 dark:bg-[#343d46]
     dark:text-[white]">
          <table className="table  " border="1">
            {/* head */}
            <thead className='text-[white] text-left'>
              <tr className='grid grid-cols-5 overflow-auto whitespace-normal 	 '>
                <th style={{ wordWrap:"break-word", wordBreak:"break-word"}} className="	text-[wheat]  border border-white">Name</th>
                <th style={{ wordWrap:"break-word", wordBreak:"break-word"}} className="	text-[wheat]   border border-white">Email</th>
                <th style={{ wordWrap:"break-word", wordBreak:"break-word"}} className="text-[wheat]	   border border-white">Role</th>
                <th style={{ wordWrap:"break-word", wordBreak:"break-word"}} className="text-[wheat]	   border border-white">Status</th>
                 
                <th style={{ wordWrap:"break-word", wordBreak:"break-word"}} className="text-[wheat] 	 border border-white"  > Action</th>
                


              </tr>
            </thead>
            <tbody className='text-left '>

              {
                usersdata.map((user) => {

                  return (<UserShow key={user._id} all_data={usersdata}  setUserDataFromChild={setUserdata} singleUser={user}   
                      ></UserShow>)
                })
              }

            </tbody>
          </table>
        </div>
  
    </div>

    
      
      </>
  )
}

export default AllUsersPage