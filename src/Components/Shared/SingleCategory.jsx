import React from 'react'

const SingleCategory = ({props}) => {
   // console.log(item,444444);
    const {categoryName,imageURL}=props;
  return (
    <div className='text-red-300'>{categoryName}</div>
  )
}

export default SingleCategory