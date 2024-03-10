"use client";

// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Hero.css";
import coffeMug from "../../assests/coffeMug.png";
import avater1 from "../../assests/sliderAvater-1.png";
import avater2 from "../../assests/sliderAvater-2.png";
import avater3 from "../../assests/sliderAvater-3.png";
import vactor1 from "../../assests/bg-left.png";
import vactor2 from "../../assests/bg-left-bottom.png";
import vactor3 from "../../assests/bg-right.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" relative md:py-[100px] py-[90px] overflow-hidden hero_section">
      <Image
        className="absolute top-[65px] left-[-60px]"
        width={476}
        height={476}
        src={vactor1}
        alt=""
      />
      <Image
        className="absolute bottom-0 xl:left-[300px] md:left-[100px] sm:left-[80px] left-[10px] md:w-[300px] w-[200px]"
        src={vactor2}
        alt=""
      />
      <Image
        className="opacity-10 absolute bottom-0 right-0 rotate-[9deg] lg:w-[500px] md:w-[400px] w-[200px]"
        src={vactor3}
        alt=""
      />
      <div className="mx-auto xl:pl-[277px] xl:pr-[133px] sm:px-16 px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 30000,
          }}
          loop={true}
        >
          <SwiperSlide className="pb-16">
            <div className="grid md:grid-cols-[58%_40%] gap-[2%] grid-cols-1 justify-center items-center">
              <div>
                <h6 className="text-[#270A05] md:text-[1.05vw] text-[2vw] font-Lemonada italic font-extrabold ">
                  WELCOME TO OUR
                </h6>
                <h1 className="font-bakilda  md:text-[7.5vw] text-[8.5vw] text-[#270A05] mt-3 mb-2.5 leading-none">
                  Unlocklive
                </h1>
                <h3 className="font-bakilda md:text-[2.8vw] xl:text-[2.5vw] 2xl:text-[2.5vw] min-[1700px]:text-[2.8vw] text-[4.8vw] text-[#270A05] font-normal">
                  Elevating Your Coffee Experience
                </h3>
                <p className="text-[#270A05] sm:text-[16px] text-[12px] font-ValueSansRegular font-normal opacity-60 mt-[24px]">
                  Unlocklive embodies our commitment to transforming the simple
                  act of sipping coffee into a refined and memorable journey. At
                  Epicurean, we take pride in curating an exceptional coffee
                  experience that transcends the ordinary.
                </p>
                <div className="mt-[50px] flex items-center">
                  <button className="bg-[#86371C] rounded-[12px] py-[18px] xl:px-[30px] lg:px-[20px] md:px-[15px] text-white xl:text-[16px] lg:text-[14px] md:text-[10px] font-ValueSansRegular font-medium sm:px-[30px] px-[14px] text-[10px]">
                    EXPLORE OUR MENU
                  </button>
                  <div className="flex xl:mr-6 xl:ml-11 mx-3">
                    <Image
                      className="md:w-[40px] md:h-[40px] lg:w-[54px] lg:h-[54px] w-[30px] h-[30px]"
                      src={avater1}
                      width={54}
                      height={50}
                      alt=""
                    />
                    <Image
                      className="ml-[-15px] md:w-[40px] md:h-[40px] lg:w-[54px] lg:h-[54px] w-[30px] h-[30px]"
                      src={avater2}
                      width={54}
                      height={50}
                      alt=""
                      cl
                    />
                    <Image
                      className="ml-[-15px] md:w-[40px] md:h-[40px] lg:w-[54px] lg:h-[54px] w-[30px] h-[30px]"
                      src={avater3}
                      width={54}
                      height={50}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-[#270A05] sm:text-2xl font-semibold font-AbrilDisplayBlack">
                      1200+
                    </h2>
                    <p className="text-[#270A05] sm:text-sm text-[12px] font-ValueSansRegular opacity-60">
                      Tasty Variant Coffee
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={coffeMug}
                  alt="Coffee Mug"
                  width={700}
                  height={630}
                  className="w-[100%] xl:h-[500px] sm:h-[450px]"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-16">
            <div className="grid md:grid-cols-[58%_40%] gap-[2%] grid-cols-1 justify-center items-center">
              <div>
                <h6 className="text-[#270A05] md:text-[1.05vw] text-[2vw] font-Lemonada italic  font-extrabold">
                  WELCOME TO OUR
                </h6>
                <h1 className="font-bakilda  md:text-[7.5vw] text-[8.5vw] text-[#270A05] mt-3 mb-2.5 leading-none">
                  Unlocklive
                </h1>
                <h3 className="font-bakilda md:text-[2.8vw] xl:text-[2.5vw] 2xl:text-[2.5vw] min-[1700px]:text-[2.885vw] text-[4.8vw] text-[#270A05] font-normal">
                  Elevating Your Coffee Experience
                </h3>
                <p className="text-[#270A05] sm:text-[16px] text-[12px] font-ValueSansRegular font-normal opacity-60 mt-[24px]">
                  Unlocklive embodies our commitment to transforming the simple
                  act of sipping coffee into a refined and memorable journey. At
                  Epicurean, we take pride in curating an exceptional coffee
                  experience that transcends the ordinary.
                </p>
                <div className="mt-[50px] flex items-center">
                  <button className="bg-[#86371C] rounded-[12px] py-[18px] xl:px-[30px] lg:px-[20px] md:px-[15px] text-white xl:text-[16px] lg:text-[14px] md:text-[10px] font-ValueSansRegular font-medium sm:px-[30px] px-[14px] text-[10px]">
                    EXPLORE OUR MENU
                  </button>
                  <div className="flex xl:mr-6 xl:ml-11 mx-3">
                    <Image
                      className="md:w-[40px] md:h-[40px] lg:w-[54px] lg:h-[54px] w-[30px] h-[30px]"
                      src={avater1}
                      width={54}
                      height={50}
                      alt=""
                    />
                    <Image
                      className="ml-[-15px] md:w-[40px] md:h-[40px] lg:w-[54px] lg:h-[54px] w-[30px] h-[30px]"
                      src={avater2}
                      width={54}
                      height={50}
                      alt=""
                      cl
                    />
                    <Image
                      className="ml-[-15px] md:w-[40px] md:h-[40px] lg:w-[54px] lg:h-[54px] w-[30px] h-[30px]"
                      src={avater3}
                      width={54}
                      height={50}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-[#270A05] sm:text-2xl font-semibold font-AbrilDisplayBlack">
                      1200+
                    </h2>
                    <p className="text-[#270A05] sm:text-sm text-[12px] font-ValueSansRegular opacity-60">
                      Tasty Variant Coffee
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={coffeMug}
                  alt="Coffee Mug"
                  width={700}
                  height={630}
                  className="w-[100%] xl:h-[500px] sm:h-[450px]"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-16">
            <div className="grid md:grid-cols-[58%_40%] gap-[2%] grid-cols-1 justify-center items-center">
              <div>
                <h6 className="text-[#270A05] md:text-[1.05vw] text-[2vw] font-Lemonada italic  font-extrabold">
                  WELCOME TO OUR
                </h6>
                <h1 className="font-bakilda  md:text-[7.5vw] text-[8.5vw] text-[#270A05] mt-3 mb-2.5 leading-none">
                  Unlocklive
                </h1>
                <h3 className="font-bakilda md:text-[2.8vw] xl:text-[2.5vw] 2xl:text-[2.5vw] min-[1700px]:text-[2.885vw] text-[4.8vw] text-[#270A05] font-normal">
                  Elevating Your Coffee Experience
                </h3>
                <p className="text-[#270A05] sm:text-[16px] text-[12px] font-ValueSansRegular font-normal opacity-60 mt-[24px]">
                  Unlocklive embodies our commitment to transforming the simple
                  act of sipping coffee into a refined and memorable journey. At
                  Epicurean, we take pride in curating an exceptional coffee
                  experience that transcends the ordinary.
                </p>
                <div className="mt-[50px] flex items-center">
                  <button className="bg-[#86371C] rounded-[12px] py-[18px] xl:px-[30px] lg:px-[20px] md:px-[15px] text-white xl:text-[16px] lg:text-[14px] md:text-[10px] font-ValueSansRegular font-medium sm:px-[30px] px-[14px] text-[10px]">
                    EXPLORE OUR MENU
                  </button>
                  <div className="flex xl:mr-6 xl:ml-11 mx-3">
                    <Image
                      className="md:w-[40px] md:h-[40px] lg:w-[54px] lg:h-[54px] w-[30px] h-[30px]"
                      src={avater1}
                      width={54}
                      height={50}
                      alt=""
                    />
                    <Image
                      className="ml-[-15px] md:w-[40px] md:h-[40px] lg:w-[54px] lg:h-[54px] w-[30px] h-[30px]"
                      src={avater2}
                      width={54}
                      height={50}
                      alt=""
                      cl
                    />
                    <Image
                      className="ml-[-15px] md:w-[40px] md:h-[40px] lg:w-[54px] lg:h-[54px] w-[30px] h-[30px]"
                      src={avater3}
                      width={54}
                      height={50}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-[#270A05] sm:text-2xl font-semibold font-AbrilDisplayBlack">
                      1200+
                    </h2>
                    <p className="text-[#270A05] sm:text-sm text-[12px] font-ValueSansRegular opacity-60">
                      Tasty Variant Coffee
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={coffeMug}
                  alt="Coffee Mug"
                  width={700}
                  height={630}
                  className="w-[100%] xl:h-[500px] sm:h-[450px]"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
