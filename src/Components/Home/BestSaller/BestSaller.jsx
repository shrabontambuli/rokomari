import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import axios from 'axios';

const BestSaller = () => {
    const [bestData, setBestData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => {
                setBestData(res.data);
            });
    }, [])

    return (
        <div className="bg-white mt-6 py-5 px-10 rounded-md shadow-md">
            <h1 className="text-2xl">বেস্ট সেলার বিষয়</h1>

            <div className="px-14 mt-10">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={36}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                    navigation={true} modules={[Navigation]}
                >
                    {
                        bestData?.map(d =>
                            <SwiperSlide key={d._id}>
                                <Link to={`/details/${d._id}`}>
                                    <div className="card card1 card-body p-0 bg-white h-52 border rounded-sm shadow">
                                        <figure className="w-48 h-40 bg-[#F5F5F5]">
                                            <img className="w-full h-full" src={d?.picture} alt="Album" />
                                        </figure>
                                        <div>
                                            <h2 className="card-title text-center justify-center text-base pb-1 font-normal mt-1">{d?.category}</h2>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default BestSaller;