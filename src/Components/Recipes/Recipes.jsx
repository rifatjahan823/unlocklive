"use client";
import React, { useRef, useState } from "react";
// import Swiper core and required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../app/styles/Recipes.css'
import Image from "next/image";
import slider1 from "../../assests/recipesSlide-1.png";
import slider3 from "../../assests/recipesSlide-3.png";

const Recipes = () => {
  return (
    <div className="recipesSection bg-[#FFFAF2] py-[100px] relative ">
      <div className=" lg:pl-[220px] md:px-0 sm:px-16 px-6">
        <Swiper
          modules={[Autoplay, Navigation]}
          centeredSlides={true}
          navigation={{ clickable: true }}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
        >
          <SwiperSlide className="pb-16 overflow-hidden lg:px-0 pl-8">
            <div className="grid lg:grid-cols-[40%_60%] grid-cols-1 items-center justify-center">
              <div className="2xl:pr-8">
                <div className="flex items-center">
                <div className="bg-[linear-gradient(90deg,_#fff_0%,_#fff_10%,_#86371C)] w-[70px] h-[1.5px] mr-1 "></div>
                  <h6 className="text-[#86371C] text-[16px] font-Lemonada italic ">New Recipes</h6>
                </div>
                <h2 className="font-bakilda md:text-[3vw] sm:text-[4.8vw] text-[7vw] text-[#270A05]">
                  Taste Our New Recipe
                </h2>
                <p className="text-[#53565C] text-[16px] my-[18px] font-ValueSansRegular">
                  Malesuada cursus a tincidunt volutpat posuere lacinia. Congue
                  malesuada lacus pharetra ut vel amet. Amet turpis suspendisse
                  porttitor scelerisque amet dolor et. Nisi ac vitae tortor
                  lacinirisus. Scelerisque nibh elit malesuada sodales eget
                  iaculis nunc erat. Donec quis fermentum mattis aliquet
                  gravida. Adipiscing eu sit ornare imperdiet viverra sit vel.{" "}
                </p>
                <p className="text-[#53565C] text-[16px] font-ValueSansRegular">
                  There are many variations of passages of Lorem Ipsum form any
                  injected humour, or randomised words which dont look slightly
                  believable.
                </p>
              </div>
              <div className="flex justify-between sm:gap-5 gap-3 md:pl-9 pl-3 lg:mt-0 mt-5">
                <div className="imgContainer">
                  <Image src={slider1} alt="" srcset="" className="image" />
                  <div  className="overlay">
                    <div  className="text font-ValueSansRegular ">
                     <ul className="list-disc"><li className="list-disc"> Pita bread or wraps</li>
                      <li>Toppings: tomatoes, tahini sauce, etc.</li></ul>
                      </div>
                  </div>
                </div>
                <div className="imgContainer">
                  <Image src={slider1} alt="" srcset="" className="image" />
                  <div  className="overlay">
                    <div  className="text font-ValueSansRegular ">
                     <ul className="list-disc"><li className="list-disc"> Pita bread or wraps</li>
                      <li>Toppings: tomatoes, tahini sauce, etc.</li></ul>
                      </div>
                  </div>
                </div>
                <div className="imgContainer">
                  <Image
                    src={slider3}
                    alt=""
                    srcset=""
                     className="image"
                  />
                   <div  className="overlay">
                    <div className="text font-ValueSansRegular ">
                     <ul className="list-disc"><li className="list-disc"> Pita bread or wraps</li>
                      <li>Toppings: tomatoes, tahini sauce, etc.</li></ul>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-16 overflow-hidden lg:px-0 pl-8">
            <div className="grid lg:grid-cols-[40%_60%] grid-cols-1 items-center justify-center">
              <div className="2xl:pr-8">
                <div className="flex items-center">
                <div className="bg-[linear-gradient(90deg,_#fff_0%,_#fff_10%,_#86371C)] w-[70px] h-[1.5px] mr-1 "></div>
                  <h6 className="text-[#86371C] text-[16px] font-Lemonada italic ">New Recipes</h6>
                </div>
                <h2 className="font-bakilda md:text-[3vw] sm:text-[4.8vw] text-[7vw] text-[#270A05]">
                  Taste Our New Recipe
                </h2>
                <p className="text-[#53565C] text-[16px] my-[18px] font-ValueSansRegular">
                  Malesuada cursus a tincidunt volutpat posuere lacinia. Congue
                  malesuada lacus pharetra ut vel amet. Amet turpis suspendisse
                  porttitor scelerisque amet dolor et. Nisi ac vitae tortor
                  lacinirisus. Scelerisque nibh elit malesuada sodales eget
                  iaculis nunc erat. Donec quis fermentum mattis aliquet
                  gravida. Adipiscing eu sit ornare imperdiet viverra sit vel.{" "}
                </p>
                <p className="text-[#53565C] text-[16px] font-ValueSansRegular">
                  There are many variations of passages of Lorem Ipsum form any
                  injected humour, or randomised words which dont look slightly
                  believable.
                </p>
              </div>
              <div className="flex justify-between sm:gap-5 gap-3 md:pl-9 pl-3 lg:mt-0 mt-5">
                <div className="imgContainer">
                  <Image src={slider1} alt="" srcset="" className="image" />
                  <div  className="overlay">
                    <div  className="text font-ValueSansRegular ">
                     <ul className="list-disc"><li className="list-disc"> Pita bread or wraps</li>
                      <li>Toppings: tomatoes, tahini sauce, etc.</li></ul>
                      </div>
                  </div>
                </div>
                <div className="imgContainer">
                  <Image src={slider1} alt="" srcset="" className="image" />
                  <div  className="overlay">
                    <div  className="text font-ValueSansRegular ">
                     <ul className="list-disc"><li className="list-disc"> Pita bread or wraps</li>
                      <li>Toppings: tomatoes, tahini sauce, etc.</li></ul>
                      </div>
                  </div>
                </div>
                <div className="imgContainer">
                  <Image
                    src={slider3}
                    alt=""
                    srcset=""
                     className="image"
                  />
                   <div  className="overlay">
                    <div  className="text font-ValueSansRegular ">
                     <ul className="list-disc"><li className="list-disc"> Pita bread or wraps</li>
                      <li>Toppings: tomatoes, tahini sauce, etc.</li></ul>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-16 overflow-hidden lg:px-0 pl-8">
            <div className="grid lg:grid-cols-[40%_60%] grid-cols-1 items-center justify-center">
              <div className="2xl:pr-8">
                <div className="flex items-center">
                <div className="bg-[linear-gradient(90deg,_#fff_0%,_#fff_10%,_#86371C)] w-[70px] h-[1.5px] mr-1 "></div>
                  <h6 className="text-[#86371C] text-[16px] font-Lemonada italic ">New Recipes</h6>
                </div>
                <h2 className="font-bakilda md:text-[3vw] sm:text-[4.8vw] text-[7vw] text-[#270A05]">
                  Taste Our New Recipe
                </h2>
                <p className="text-[#53565C] text-[16px] my-[18px] font-ValueSansRegular">
                  Malesuada cursus a tincidunt volutpat posuere lacinia. Congue
                  malesuada lacus pharetra ut vel amet. Amet turpis suspendisse
                  porttitor scelerisque amet dolor et. Nisi ac vitae tortor
                  lacinirisus. Scelerisque nibh elit malesuada sodales eget
                  iaculis nunc erat. Donec quis fermentum mattis aliquet
                  gravida. Adipiscing eu sit ornare imperdiet viverra sit vel.{" "}
                </p>
                <p className="text-[#53565C] text-[16px] font-ValueSansRegular">
                  There are many variations of passages of Lorem Ipsum form any
                  injected humour, or randomised words which dont look slightly
                  believable.
                </p>
              </div>
              <div className="flex justify-between sm:gap-5 gap-3 md:pl-9 pl-3 lg:mt-0 mt-5">
                <div className="imgContainer">
                  <Image src={slider1} alt="" srcset="" className="image" />
                  <div  className="overlay">
                    <div  className="text font-ValueSansRegular ">
                     <ul className="list-disc"><li className="list-disc"> Pita bread or wraps</li>
                      <li>Toppings: tomatoes, tahini sauce, etc.</li></ul>
                      </div>
                  </div>
                </div>
                <div className="imgContainer">
                  <Image src={slider1} alt="" srcset="" className="image" />
                  <div  className="overlay">
                    <div  className="text font-ValueSansRegular ">
                     <ul className="list-disc"><li className="list-disc"> Pita bread or wraps</li>
                      <li>Toppings: tomatoes, tahini sauce, etc.</li></ul>
                      </div>
                  </div>
                </div>
                <div className="imgContainer">
                  <Image
                    src={slider3}
                    alt=""
                    srcset=""
                     className="image"
                  />
                   <div  className="overlay">
                    <div  className="text font-ValueSansRegular ">
                     <ul className="list-disc"><li className="list-disc"> Pita bread or wraps</li>
                      <li>Toppings: tomatoes, tahini sauce, etc.</li></ul>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Recipes;
