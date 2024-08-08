import Card from "../../Card/Card/Card/Card";

// import { Link } from "react-router-dom";

import { useState } from 'react';
import { Virtual, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const BestSaller = () => {
    const [setSwiperRef] = useState(null);
    // Create array with 500 slides
    const [slides] = useState(
        Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
    );



    return (
        <div className="bg-white mt-6 py-5 px-10 rounded-md shadow-md">
            <h1 className="text-2xl">বেস্ট সেলার বিষয়</h1>
            {/* <div className="grid grid-cols-1 lg:grid-cols-6 justify-items-center items-center gap-8 px-14 mt-6">
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
            </div> */}


            <div className="px-14 mt-10">
                <Swiper
                    modules={[Virtual, Navigation]}
                    onSwiper={setSwiperRef}
                    slidesPerView={6}
                    spaceBetween={36}
                    navigation={true}
                    virtual
                >
                    {slides.map((slideContent, index) => (
                        <SwiperSlide key={slideContent} virtualIndex={index}>
                            <div>
                                <Card />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default BestSaller;