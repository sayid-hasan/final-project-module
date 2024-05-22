import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  console.log(reviews);
  return (
    <div className="max-w-5xl mx-auto mb-20">
      <div>
        <SectionTitle
          subheading={"---What Our Clients Say---"}
          heading={"TESTIMONIALS"}
        ></SectionTitle>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col gap-4 items-center">
                <div className="mb-12">
                  {" "}
                  <Rating
                    style={{ maxWidth: 250 }}
                    value={review.rating}
                    readOnly
                  />
                </div>
                <p className="text-xl max-w-[800px] text-center">
                  {review.details}
                </p>
                <h2 className="text-[#CD9003] font-Inter font-medium text-3xl leading-[39px]">
                  {review.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
