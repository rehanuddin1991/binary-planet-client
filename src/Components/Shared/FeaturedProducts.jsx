import React from 'react'
import one from '../../assets/features/1.jpg'
import two from '../../assets/features/2.jpg'
import three from '../../assets/features/3.jpg'
import four from '../../assets/features/4.jpg'
import five from '../../assets/features/5.jpg'
import six from '../../assets/features/6.jpg'

const FeaturedProducts = () => {
    return (<>
    <div className='flex items-center justify-center xs:text-xl text-3xl text-[indigo] mt-14 font-semibold'>
        <h1>Featured Products </h1>
        
    </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3  md:ml-10'>
            <div className="card bg-base-100 w-80 text-2xl xs:w-[17rem] xs:-ml-8 shadow-xl">

                <figure className="px-10 pt-10">
                    <img
                        src={one}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center  space-y-3 text-justify">
                    <h2 className="card-title">AOC 24G4 23.8" 180Hz 1ms FHD FAST IPS Gaming Monitor</h2>
                    <p className='text-[darkcyan]'>Price: $200</p>
                    <div className="card-actions">
                        <button className="btn btn-primary absolute right-0 bottom-0">Save 1990taka</button>
                    </div>
                </div>
            </div>


            <div className="card bg-base-100 w-80 text-2xl xs:w-[17rem] xs:-ml-8 shadow-xl">

                <figure className="px-10 pt-10">
                    <img
                        src={two}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center  space-y-3 text-justify">
                    <h2 className="card-title">TCL 40 SE (6/256GB)</h2>
                    <p className='text-[darkcyan]'>Price: $20</p>
                    <div className="card-actions">
                        <button className="btn btn-primary absolute right-0 bottom-0">Save 990taka</button>
                    </div>
                </div>
            </div>


            <div className="card bg-base-100 w-80 text-2xl xs:w-[17rem] xs:-ml-8 shadow-xl">

                <figure className="px-10 pt-10">
                    <img
                        src={three}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center  space-y-3 text-justify">
                    <h2 className="card-title">Dell XPS 13 Plus 9320 Intel Core i7 13th Gen 13.4" 3.5K OLED Touch Laptop</h2>
                    <p className='text-[darkcyan]'>Price: $2000</p>
                    <div className="card-actions">
                        <button className="btn btn-primary absolute right-0 bottom-0">Save 4990taka</button>
                    </div>
                </div>
            </div>



            <div className="card bg-base-100 w-80 text-2xl xs:w-[17rem] xs:-ml-8 shadow-xl">

<figure className="px-10 pt-10">
    <img
        src={four}
        alt="Shoes"
        className="rounded-xl" />
</figure>
<div className="card-body items-center  space-y-3 text-justify">
    <h2 className="card-title">Lenovo IdeaCentre AIO 3 24IAP7 Core i5 13th Gen 23.8" All-in-One Desktop PC</h2>
    <p className='text-[darkcyan]'>Price: $4000</p>
    <div className="card-actions">
        <button className="btn btn-primary absolute right-0 bottom-0">Save 3990taka</button>
    </div>
</div>
</div>


<div className="card bg-base-100 w-80 text-2xl xs:w-[17rem] xs:-ml-8 shadow-xl">

<figure className="px-10 pt-10">
    <img
        src={four}
        alt="Shoes"
        className="rounded-xl" />
</figure>
<div className="card-body items-center  space-y-3 text-justify">
    <h2 className="card-title">Lenovo IdeaCentre AIO 3 24IAP7 Core i5 13th Gen 23.8" All-in-One Desktop PC</h2>
    <p className='text-[darkcyan]'>Price: $4000</p>
    <div className="card-actions">
        <button className="btn btn-primary absolute right-0 bottom-0">Save 3990taka</button>
    </div>
</div>
</div>



<div className="card bg-base-100 w-80 text-2xl xs:w-[17rem] xs:-ml-8 shadow-xl">

<figure className="px-10 pt-10">
    <img
        src={five}
        alt="Shoes"
        className="rounded-xl" />
</figure>
<div className="card-body items-center  space-y-3 text-justify">
    <h2 className="card-title">DJI Osmo Pocket 3 Creator Combo 3 Axis Gimbal Stabilizer Action Camera</h2>
    <p className='text-[darkcyan]'>Price: $6000</p>
    <div className="card-actions">
        <button className="btn btn-primary absolute right-0 bottom-0">Save 7990taka</button>
    </div>
</div>
</div>


        </div>
    </>
    )
}

export default FeaturedProducts