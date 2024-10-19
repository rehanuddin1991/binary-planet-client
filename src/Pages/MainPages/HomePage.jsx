import React from 'react'
import Carousel from '../../Components/Shared/Carousel'
import Category from '../../Components/Shared/Category'
import { Helmet } from 'react-helmet-async'
import FAQsection from '../../Components/Shared/FAQsection'
import UserReviewSection from '../../Components/Shared/UserReviewSection'
import FeaturedProducts from '../../Components/Shared/FeaturedProducts'

const HomePage = () => {
  return (
   <>
    <Helmet>
    <title>Binary Planet</title>

    </Helmet>
   <Carousel></Carousel>
   <Category></Category>
   <FeaturedProducts></FeaturedProducts>
   <FAQsection></FAQsection>
  <UserReviewSection></UserReviewSection> 
   
    </>
  )
}

export default HomePage