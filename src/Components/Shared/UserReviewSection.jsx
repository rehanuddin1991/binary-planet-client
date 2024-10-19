import React from 'react'
import { FaUser } from "react-icons/fa";


const UserReviewSection = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3 '>
          <div className="card bg-base-100 w-80 xs:w-[17rem] xs:-ml-8 shadow-xl">
              <div className="card-body">
                
                  <h2 className="card-title"> <FaUser /> Sara Williams</h2>
                  <p>Great Customer Service                  </p>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p className='text-[midnightblue] py-2 font-semibold text-justify'>"I had an excellent experience at this computer shop! The staff were very knowledgeable and helped me pick out the perfect laptop for my needs. They explained all the specs and even set up the device for me before I left. Highly recommend!"</p>
                  <div className="card-actions justify-end ">
                      <button className="btn btn-primary absolute right-0 w-28   bottom-0">5 out of 5</button>
                  </div>
              </div>
          </div>


          <div className="card bg-base-100 w-80 xs:w-[17rem] xs:-ml-8 shadow-xl">
              <div className="card-body">
                
                  <h2 className="card-title"> <FaUser /> Milton Joseph</h2>
                  <p>Affordable Prices and Fast Shipping                 </p>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p className='text-[midnightblue] py-2 font-semibold text-justify'>"I found the prices to be very competitive compared to other stores. I ordered a gaming keyboard online, and it arrived within three days in perfect condition. I’m very happy with the product and will definitely shop here again."</p>

                  <div className="card-actions justify-end">
                      <button className="btn btn-primary absolute right-0 w-28 bottom-0">4.9 out of 5</button>
                  </div>
              </div>
          </div>




          <div className="card bg-base-100 w-80 xs:w-[17rem] xs:-ml-8 shadow-xl">
              <div className="card-body">
                
                  <h2 className="card-title"> <FaUser /> David Miller</h2>
                  <p>Great Selection of Accessories                  </p>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p className='text-[midnightblue] py-2 font-semibold text-justify'>"This store has a great variety of computer accessories. I was able to find everything I needed, from a new mouse to an external hard drive, all at reasonable prices. The quality of the products is top-notch too!"</p>
                  <div className="card-actions justify-end">
                      <button className="btn btn-primary absolute right-0 w-28 bottom-0">5 out of 5</button>
                  </div>
              </div>
          </div>




          <div className="card bg-base-100 w-80 xs:w-[17rem] xs:-ml-8 shadow-xl">
              <div className="card-body">
                
                  <h2 className="card-title"> <FaUser /> Navila Hoseph</h2>
                  <p>Excellent Repair Services                  </p>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p className='text-[midnightblue] py-2 font-semibold text-justify'>"My laptop was running slow, and I took it to this shop for a tune-up. They did a fantastic job! The team was very professional, and now my laptop is running faster than ever. Highly recommend their repair services."</p>
                  <div className="card-actions justify-end">
                      <button className="btn btn-primary absolute right-0 w-28 bottom-0">5 out of 5</button>
                  </div>
              </div>
          </div>




          <div className="card bg-base-100 w-80 xs:w-[17rem] xs:-ml-8 shadow-xl">
              <div className="card-body">
                
                  <h2 className="card-title"> <FaUser /> Maria Margaret</h2>
                  <p>Knowledgeable Staff and Quality Products                  </p>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p className='text-[midnightblue] py-2 font-semibold text-justify'>"I’m not very tech-savvy, but the staff here made everything easy to understand. They guided me through the process of upgrading my computer’s RAM and storage. I appreciate their patience and expertise."</p>
                  <div className="card-actions justify-end">
                      <button className="btn btn-primary absolute right-0 w-28 bottom-0">5 out of 5</button>
                  </div>
              </div>
          </div>



          <div className="card bg-base-100 w-80 xs:w-[17rem] xs:-ml-8 shadow-xl">
              <div className="card-body">
                
                  <h2 className="card-title"> <FaUser /> Jahid Hasan</h2>
                  <p>Quick and Efficient Service                  </p>
                  <p>⭐⭐⭐⭐⭐</p>
                  <p className='text-[midnightblue] py-2 font-semibold text-justify'>"My desktop was having some issues, and I brought it in for repairs. They diagnosed the problem quickly, and it was fixed within a day. The service was fast, and the price was fair. Will definitely return for any future needs."</p>
                  <div className="card-actions justify-end">
                      <button className="btn btn-primary absolute right-0 w-28 bottom-0">5 out of 5</button>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default UserReviewSection