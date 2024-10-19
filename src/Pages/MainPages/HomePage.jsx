import React from 'react'
import Carousel from '../../Components/Shared/Carousel'
import Category from '../../Components/Shared/Category'
import { Helmet } from 'react-helmet-async'

const HomePage = () => {
  return (
   <>
    <Helmet>
    <title>Binary Planet</title>

    </Helmet>
   <Carousel></Carousel>
   <Category></Category>
   
    </>
  )
}

export default HomePage