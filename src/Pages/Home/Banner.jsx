import background from "/background.jpg"
import product1 from "/product-slider.png"
import product2 from "/product-slider2.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"

            >
                <SwiperSlide><div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${background})` }}>
                    {/* <div className="hero-overlay bg-opacity-5"></div> */}
                    <div className="hero-content text-center text-black">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl md:text-5xl font-bold">Fresh <br /> Vitamin</h1>
                            <button className="btn btn-primary bg-white text-black border-none hover:bg-[#75b239]">Shop now</button>
                        </div>
                        <div className="pl-9">
                            <img className="" src={product1} alt="" />
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${background})` }}>
                    {/* <div className="hero-overlay bg-opacity-5"></div> */}
                    <div className="hero-content text-center text-black">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl md:text-5xl font-bold">Fresh <br /> Vitamin</h1>
                            <button className="btn btn-primary bg-white text-black border-none hover:bg-[#75b239]">Get Started</button>
                        </div>
                        <div className="pl-9">
                            <img className="" src={product2} alt="" />
                        </div>
                    </div>
                </div></SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;