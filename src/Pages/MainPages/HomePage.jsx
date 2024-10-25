import React from 'react'
import Carousel from '../../Components/Shared/Carousel'
import Category from '../../Components/Shared/Category'
import { Helmet } from 'react-helmet-async'
import FAQsection from '../../Components/Shared/FAQsection'
import UserReviewSection from '../../Components/Shared/UserReviewSection'
import FeaturedProducts from '../../Components/Shared/FeaturedProducts'
import MessageShow from '../../Components/Shared/MessageShow'

const HomePage = () => {
  return (
   <div className='dark:bg-[#1D232A] dark:text-[white]'>
    <Helmet>
    <title>Binary Planet</title>

    </Helmet>
   <Carousel></Carousel>
   <Category></Category>
   <FeaturedProducts></FeaturedProducts>
   <FAQsection></FAQsection>
  <UserReviewSection></UserReviewSection> 
  <MessageShow/>
   
    </div>
  )
}

export default HomePage