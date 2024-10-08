"use client";

import React from "react";

// Swiper components, modules, and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

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

      <div className="">
        <Swiper
          navigation
          pagination={{ type: "bullets", clickable: true }}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.id} className="">
              {/* style={{
                    background: `url(${item.image}) center center / cover scroll no-repeat`,
                  }} */}

              {/*
                    
                    <div className="h-full w-full absolute left-0 top-0"></div>
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
                    
                */}

              <div className="relative z-10 h-full flex flex-col items-center justify-center">
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
                <div className="service-image">
                  <Image
                    src={item.image}
                    alt="service-illustration-image"
                    width={240}
                    height={0}
                    className=" flex items-center justify-center mx-auto"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PhoneSlider;
