import React from 'react'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.jpg'
const Carousel = () => {
    return (
        <div className='mt-2 shadow-2xl'>
            <div className="carousel w-full max-h-screen">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src={banner1}
                        className="w-full rounded-lg shadow-md " />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src={banner2}
                        className="w-full rounded-lg shadow-md " />
                </div>

                <div id="item3" className="carousel-item w-full">
                    <img
                        src={banner1}
                        className="w-full rounded-lg shadow-md " />
                </div>

                <div id="item4" className="carousel-item w-full">
                    <img
                        src={banner2}
                        className="w-full rounded-lg shadow-md " />
                </div>

            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn min-h-[2rem] h-[2rem] btn-info">1</a>
                <a href="#item2" className="btn min-h-[2rem] h-[2rem] btn-info">2</a>
                <a href="#item3" className="btn min-h-[2rem] h-[2rem] btn-info">3</a>
                <a href="#item4" className="btn min-h-[2rem] h-[2rem] btn-info">4</a>

            </div>
        </div>
    )
}

export default Carousel