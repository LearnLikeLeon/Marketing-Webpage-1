"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "./services/listOfServices";
import Image from "next/image";

export default function ActiveSlider() {
  return (
    // h-[900px] or h-screen
    //
    <div className=" py-24 sm:py-32 flex items-center justify-center flex-col h-[900px] lg:h-fit  bg-blue-300 rounded-3xl w-full">
      <div className=" container mx-auto text-gray-500 ">
        <header className="text-center mx-auto mb-2 lg:px-20">
          <h1 className="font-semibold font-serif text-black text-2xl">
            {" "}
            Our Services{" "}
          </h1>
          <h2 className="text-xl leading-normal m-4 font-bold italic font-serif text-black">
            Driving better business decisions
          </h2>

          <p className="text-black indent-8 leading-relaxed font-light font-serif lg:text-xl text-justify mx-auto">
            ES Analysis provides several services such as data analysis with
            dashboard creation and report writing, research, teaching, training
            & learning, mentorship, and website development. Please go through
            the visuals below to have more details.
          </p>
        </header>
      </div>

      <p className="text-xl leading-normal font-bold font-serif italic text-black p-2">
        {" "}
      </p>

      {/*   Swiper Mobile and iPad Mini all screens less than 820 px */}

      <div className="container"></div>

      {/*   Swiper Desktop and iPad Pro all screens  bigger than 1024 px */}

      <Swiper
        breakpoints={{
          //  iPhone X screens 'sm': '375px'
          //  screens 'sm': '640px'
          // iPaid mini : 820 px

          // when window width is >= 640px

          520: {
            slidesPerView: 1,
            spaceBetween: 5,
          },

          // when window width is >= 768px
          // iPaid mini screens 'md': '768px'
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },

          // iPaid Pro screens 'lg': '1024px'
          1024: {
            slidesPerView: 2,
            spaceBetween: 0,
          },

          // Desktop screens 'xl': '1280px'
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        // slidesPerView={1}
        slidesPerView={1}
        spaceBetween={10}
        // navigation
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[80%] md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-2xl "
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title} className="ml-8">
            <div className="flex flex-col px-6 py-8 gap-6 mb-10 lg:mb-12 group relative shadow-lg text-white rounded-xl overflow-hidden cursor-pointer h-[250px] w-[215px] md:h-[360px] md:w-[400px]  lg:h-[430px] lg:w-[400px] xl:h-[430px] xl:w-[450px] ">
              <div
                className="absolute inset-0 bg-cover bg-center"
                // style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-3xl font-serif">
                  {item.title}{" "}
                </h1>
                <p className="lg:text-[18px] indent-2 font-serif italic text-justify">
                  {item.content}{" "}
                </p>

                <a
                  href="https://www.researchgate.net/profile/Edwige-Feulefack-Songong-2"
                  className="block font-medium font-serif text-cyan-800 group-hover:text-white italic text-xl"
                >
                  Know more...
                </a>

                <div className="service-image">
                  <Image
                    src={item.image}
                    alt="service-illustration-image"
                    // w-36	means width: 9rem; or /* 144px */
                    width={240}
                    height={0}
                    className=" flex items-center justify-center mx-auto"
                  />
                </div>
              </div>

              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
