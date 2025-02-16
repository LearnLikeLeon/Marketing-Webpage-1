"use client";

import React from "react";

// Swiper components, modules, and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

import { ServiceData } from "./services/listOfServices";

const PhoneSlider = () => {
  return (
    <section className="w-full bg-blue-300 rounded-lg">
      <div className="max-w-sm text-center mx-auto">
        <header>
          <h1 className="font-semibold font-serif text-black text-2xl">
            {" "}
            Our Services{" "}
          </h1>
          <h2 className="text-xl leading-normal m-4 font-bold italic font-serif text-black">
            Driving better business decisions
          </h2>
          <p className=" indent-2 text-sm ont-light font-serif text-justify ">
            ES Analysis provides several services such as data analysis with
            dashboard creation and report writing, research, teaching, training
            & learning, mentorship, and website development. Please go through
            the visuals below to have more details.
          </p>

          <p className=" text-lg font-bold font-serif italic text-black p-2">
            {" "}
            We provide a variety of services like :{" "}
          </p>
        </header>
      </div>

      <Swiper
        style={{
          "--swiper-navigation-color": "#0c023e",
          "--swiper-pagination-color": "#0c023e",
        }}
        className="swiper"
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-blue-300 rounded-lg shadow-md p-2 md:p-4 h-full flex flex-col ">
              <div className="text-center">
                {item.tagline && (
                  <p className="text-md sm:text-xl lg:text-3xl font-semibold text-black">
                    {item.tagline}
                  </p>
                )}
                <p className="text-xl font-bold font-serif text-black">
                  {item.title}
                </p>
              </div>

              <Image
                src={item.image}
                alt="service-illustration-image"
                width={300}
                height={200}
                className="w-3/4 h-52 object-cover mb-4 rounded-xl items-center mx-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PhoneSlider;
