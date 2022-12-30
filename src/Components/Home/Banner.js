import React from "react";
import "./Banner.css";
import banner2 from "../../img/baner-image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import BannerInfo from "./BannerInfo";

const Banner = () => {
  return (
    <div>
      <div className="mt-6 z-2 Banner-container">
        <Swiper
          autoplay={{
            // delay: 5000,
            OnInteraction: true,
          }}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          modules={[Pagination, Navigation]}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log("swiper")}
          className="mySwiper"
        >
          <div className="">
            <SwiperSlide className="slider  text-white text-start zoom-in img-change">
              <div className="slider-text  text-white font-serif text-center">
                <div>
                  <h1 className="lg:text-5xl text-3xl py-5">
                    Make Your Business Online
                  </h1>
                  <div className=" border-b-4 border-primary lg:w-56 my-6 mx-auto "></div>
                  <p className="lg:text-3xl text-xl">
                    Corporate and professional business solution
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className=" text-white text-center zoom-out slider"
              style={{
                backgroundImage: `url(${banner2})`,
              }}
            >
              <div className="slider-text slider  text-white font-serif">
                <div>
                  <h1 className="lg:text-5xl text-3xl py-5 ">
                    More Financial Solution
                  </h1>
                  <div className=" border-b-4 border-primary w-56 my-6 mx-auto"></div>
                  <p className="lg:text-3xl text-xl">
                    Corporate and professional business solution
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      {/* =================information part=================== */}

      <div
        className="grid grid-cols-1 lg:grid-cols-3 lg:mx-24 mx-12 
     banner-info"
      >
        <BannerInfo
          cardTitle="FINANCIAL AUDIT"
          bgClass="bg-primary opacity-90 hover:opacity-100"
        ></BannerInfo>
        <BannerInfo
          cardTitle="BUSINESS VALUATION"
          bgClass="bg-accent opacity-90 hover:opacity-100"
        ></BannerInfo>
        <BannerInfo
          cardTitle="TAX ADVISORY"
          bgClass="bg-primary opacity-90 hover:opacity-100"
        ></BannerInfo>
      </div>
      {/* ============== who we are page================= */}
      <div className="we-are-content">
        <div className="lg:flex justify-center items-center lg:mx-24 my-6 ">
          <div className="flex-3 px-4">
            <h1 className="text-secondary lg:text-4xl text-2xl font-bold uppercase w-72">
              Who we are
            </h1>
            <br />
            <h1 className="border-b-2 border-primary lg:w-32 "></h1>
            <p className="text-success font-bold  mt-4 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium a, sunt obcaecati veniam.
            </p>
            <button className="btn btn-primary btn-outline rounded-none my-4 lg:block hidden">
              Learn More
            </button>
          </div>
          <div className="flex-3 text-secondary px-4 text-xl">
            <p className="mt-4">
              We are a consulting Business Providing Ecommerce Support to Big ,
              Medium & Small Size company We are into Hiring Business- Don’t
              forgot to check our website- http://yellowboxhr.com We also
              provide Infrastructure support ,Product research, Market Research,
              Surveys and Case Studies Last, We make Business Come Online
            </p>
            <button className="btn btn-primary btn-outline rounded-none my-4 lg:hidden block">
              Learn more
            </button>
          </div>
        </div>
        <div className="border-b-2 border-secondary  my-4 lg:mx-24"></div>
      </div>
    </div>
  );
};

export default Banner;
