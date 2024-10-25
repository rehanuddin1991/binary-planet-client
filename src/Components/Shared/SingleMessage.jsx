import React from 'react'
import { NavLink } from 'react-router-dom';
 

const SingleMessage = ({ props }) => {
    // console.log(item,444444);
    const { messageSubject, messageBody,messagSender } = props;
    return (
        <>
            <div className="card bg-base-100 xs:w-[18rem] xs:-ml-10 w-80 shadow-xl ">
                 
                <div className="card-body  flex flex-col justify-center items-center gap-3 ">
                    
                    <h2 className="card-title    text-xl text-[indigo] dark:text-[white]">From: &nbsp; {messagSender}</h2>
                    <h2 className="card-title    text-xl text-[indigo] dark:text-[white]">Title: &nbsp; {messageSubject}</h2>
                    <h2 className="card-title    text-xl text-[indigo] dark:text-[white]"> Message: &nbsp;{messageBody}</h2>
                    

                     
                   
                    
                </div>
            </div>

        </>

    )
}

export default SingleMessage