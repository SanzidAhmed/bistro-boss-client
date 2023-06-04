import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from '../../../../assets/home/slide1.jpg'
import slide2 from '../../../../assets/home/slide2.jpg'
import slide3 from '../../../../assets/home/slide3.jpg'
import slide4 from '../../../../assets/home/slide4.jpg'
import slide5 from '../../../../assets/home/slide5.jpg'
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"From 11am to 10pm"}
            heading={"Order online"}
            >

            </SectionTitle>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-10"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-center text-3xl -mt-20 text-white shadow-xl uppercase">Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-center text-3xl -mt-20 text-white shadow-xl uppercase">Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-center text-3xl -mt-20 text-white shadow-xl uppercase">Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-center text-3xl -mt-20 text-white shadow-xl uppercase">Cake</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-center text-3xl -mt-20 text-white shadow-xl uppercase">Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-center text-3xl -mt-20 text-white shadow-xl uppercase">Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-center text-3xl -mt-20 text-white shadow-xl uppercase">Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-center text-3xl -mt-20 text-white shadow-xl uppercase">Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-center text-3xl -mt-20 text-white shadow-xl uppercase">Cake</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-center text-3xl -mt-20 text-white shadow-xl uppercase">Salad</h3>
                </SwiperSlide>


            </Swiper>
        </section>
    );
};

export default Category;