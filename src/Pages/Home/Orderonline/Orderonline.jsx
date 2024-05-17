// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

// import required modules
import { Pagination, FreeMode } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Orderonline = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <SectionTitle
          heading={"ORDER ONLINE"}
          subheading={"---From 11:00am to 10:00pm---"}
        ></SectionTitle>

        <div className="max-w-5xl py-5 mb-24 mx-auto">
          {" "}
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="" />
              <p className="font-Cinzel uppercase text-3xl leading-[43px] -mt-16 text-center text-white drop-shadow-xl ">
                Salad
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
              <p className="font-Cinzel uppercase text-3xl leading-[43px] -mt-16 text-center text-white drop-shadow-xl ">
                pizzas
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
              <p className="font-Cinzel uppercase text-3xl leading-[43px] -mt-16 text-center text-white drop-shadow-xl ">
                Soup
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" />
              <p className="font-Cinzel uppercase text-3xl leading-[43px] -mt-16 text-center text-white drop-shadow-xl ">
                desert
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="" />
              <p className="font-Cinzel uppercase text-3xl leading-[43px] -mt-16 text-center text-white drop-shadow-xl ">
                Salad
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Orderonline;
