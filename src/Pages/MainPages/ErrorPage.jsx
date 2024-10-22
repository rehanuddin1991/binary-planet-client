import React from 'react'
import errorImg from '../../assets/error.jpg'
import { Helmet } from 'react-helmet-async'
const ErrorPage = () => {
  return (
    <div className='text-[crimson] text-center text-4xl mt-4  '> 
    <Helmet>
    <title>Page not found</title>

    </Helmet>
    <img src= {errorImg} alt="" />
    </div>
  )
}

export default ErrorPage