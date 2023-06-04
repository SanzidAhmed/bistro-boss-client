import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonial = () => {



    const [reviews, setReviews] = useState([]);
    useEffect(() => {
    fetch('http://localhost:3200/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="my-20">
            <SectionTitle
                subHeading="What Our Clients Say"
                heading="TESTIMONIALS"
            ></SectionTitle>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="mx-24 my-10 flex flex-col items-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <h3 className="text-3xl text-orange-500 mt-10">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div >
    );
};

export default Testimonial;