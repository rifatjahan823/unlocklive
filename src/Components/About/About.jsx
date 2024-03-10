"use client";
import avater from "../../assests/play-avater.png";
import playbtn from "../../assests/play-btn.png";

import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#FFFAF2] mb-[80px] ">
      <div className="mx-auto xl:pl-[220px] xl:pr-[133px] sm:px-16 px-6">
        <div className="grid xl:grid-cols-[35%_21%_21%_21%] xl:gap-0 gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center">
          <div className="relative lg:block hidden">
            <div className="bg-[#86371C] xl:h-[326px] xl:w-[319px] lg:w-[100%] lg:h-[250px] absolute top-0 p-5 rounded-b-[12px]">
              <Image
                src={avater}
                width={242}
                height={166}
                className="bg-cover"
                alt=""
              />
              <div className="flex items-center pt-4">
                <Image src={playbtn} alt="" srcset="" className="pr-3.5 " />
                <p className="text-[#F2EFDF] xl:text-[24px] text-[14px] font-AbrilDisplaySemibold ">
                  Play Intro Video
                </p>
              </div>
            </div>
          </div>
          <div className=" lg:hidden pt-16">
            <div className="bg-[#86371C]  p-2 rounded-b-[12px] ">
              <Image
                src={avater}
                width={242}
                height={166}
                className="bg-cover "
                alt=""
              />
              <div className="flex items-center pt-4">
                <Image src={playbtn} alt="" srcset="" className="pr-2 w-8" />
                <p className="text-[#F2EFDF]  text-[12px] font-semibold">
                  Play Intro Video
                </p>
              </div>
            </div>
          </div>
          <div className="  py-16">
            <div className="md:border-r">
              <h3 className="sm:text-[24px] text-[18px] font-AbrilDisplaySemibold font-semibold mb-[24px]">
                Our Opening Hours
              </h3>
              <p className="sm:text-[16px] text-[14px] text-[#270A05] font-ValueSansRegular">
                Mon - Sat: 07:00 - 18:00
              </p>
              <p className="sm:text-[16px] text-[14px] text-[#270A05] font-ValueSansRegular">
                Only Sun: 09:00 - 14:00
              </p>
            </div>
          </div>
          <div className=" py-16">
            <div className="border-r lg:text-center">
              <h3 className="sm:text-[24px] text-[18px] font-AbrilDisplayBlack font-semibold mb-[24px]">
                Our Live Location
              </h3>
              <p className="sm:text-[16px] text-[14px] text-[#270A05] font-ValueSansRegular">
                848 A 28TH ST, Brooklyn{" "}
              </p>
              <p className="sm:text-[16px] text-[14px] text-[#270A05] font-ValueSansRegular">
                New York, UK
              </p>
            </div>
          </div>
          <div className=" py-16">
            <div className="lg:text-right">
              <h3 className="sm:text-[24px] text-[18px] font-AbrilDisplayBlack font-semibold mb-[24px]">
                Book A Table Now
              </h3>
              <p className="sm:text-[16px] text-[14px] text-[#270A05] font-ValueSansRegular ">
                +1 318-254-6849
              </p>
              <p className="sm:text-[16px] text-[14px] text-[#270A05] font-ValueSansRegular">
                +1 452-754-6579
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
