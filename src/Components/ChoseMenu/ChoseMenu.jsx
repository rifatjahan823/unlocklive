import Image from "next/image";
import menuleft1 from "../../assests/chosemenu-left-1.png";
import menuleft2 from "../../assests/chosemenu-left-2.png";
import menuright1 from "../../assests/chosemenu-right-1.png";
import menuright2 from "../../assests/chosemenu-right-2.png";

const ChoseMenu = () => {
  return (
    <div>
      <div className="mx-auto xl:pl-[220px] xl:pr-[180px] sm:px-16 px-6 md:py-[100px] py-[50px]">
        <div className="text-center text-[#86371C] text-[16px]">
          <div className="flex items-center justify-center">
          <div className="bg-[linear-gradient(90deg,_#fff_0%,_#fff_10%,_#86371C)] w-[70px] h-[1.5px] mr-1 "></div>
            <h4 className="mx-3 text-[16px] font-Lemonada italic ">Coffee Menu</h4>
            <div className=" bg-gradient-to-r from-[#86371C] w-[70px] h-[1.5px] mr-1 "></div>
          </div>
        </div>
        <h2 className="text-[#270A05] font-bakilda sm:text-[44px] text-[6.5vw] text-center">
          Unlocklive Coffee Menu
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 my-[80px]">
          <div>
            {/* ------ */}
            <div
              className="grid sm:grid-cols-[14%_80%] sm:gap-[6%] grid-cols-[8%_70%] gap-16 items-center  border xl:py-[30px] xl:px-[35px] 
                   p-[15px]  
                    rounded-[20px]"
            >
              <div className="w-[84px] h-[84px] border-dashed border-2 border-[#270A05] rounded-full flex items-center justify-center">
                <div className="w-[80px] h-[80px] bg-[#E9E7E6] rounded-full flex items-center justify-center">
                  <Image
                    src={menuleft1}
                    alt=""
                    srcset=""
                    className="w-[70px] h-[70px]"
                  />
                </div>
              </div>
              <div className=""> 
                <h3 className="text-[#270A05] min-[1650px]:text-[24px] md:text-[1.3vw] font-AbrilDisplayBlack font-semibold">
                Double Espresso x2
                </h3>
             <div className="flex ">
             <div className="">
                  <p className="text-[#270A05] xl:text-[14px] text-[12px] opacity-70 font-ValueSansRegular">
                    There are many variations of passages Lorem Ipsum form
                  </p>
                </div>
              <p className="border-dotted border-t-4 mx-2 2xl:w-[32%] w-[18%] mt-[8px] "></p>
             <div>
             <div className="border-dashed border-2 border-[#270A05] rounded-full w-[65px] h-[65px] items-center justify-center flex mt-[-10px]">
                <div className="bg-[#86371C] w-[58px] h-[58px] rounded-full flex items-center justify-center ">
                  <p className="text-white">$10</p>
                </div>
              </div>
             </div>
             </div>
              </div>
            </div>
            {/* ------ */}
            <div
              className="grid sm:grid-cols-[14%_80%] sm:gap-[6%] grid-cols-[8%_70%] gap-16 items-center  border xl:py-[30px] xl:px-[35px] 
                   p-[15px]  
                    rounded-[20px]"
            >
              <div className="w-[84px] h-[84px] border-dashed border-2 border-[#270A05] rounded-full flex items-center justify-center">
                <div className="w-[80px] h-[80px] bg-[#E9E7E6] rounded-full flex items-center justify-center">
                  <Image
                    src={menuleft2}
                    alt=""
                    srcset=""
                    className="w-[70px] h-[70px]"
                  />
                </div>
              </div>
              <div className=""> 
                <h3 className="text-[#270A05] min-[1650px]:text-[24px] md:text-[1.3vw] font-AbrilDisplayBlack font-semibold">
                Salted Caramel Cold Brew
                </h3>
             <div className="flex ">
             <div className="">
                  <p className="text-[#270A05] xl:text-[14px] text-[12px] opacity-70 font-ValueSansRegular">
                    There are many variations of passages Lorem Ipsum form
                  </p>
                </div>
              <p className="border-dotted border-t-4 mx-2 2xl:w-[32%] w-[18%] mt-[8px] "></p>
             <div>
             <div className="border-dashed border-2 border-[#270A05] rounded-full w-[65px] h-[65px] items-center justify-center flex mt-[-10px]">
                <div className="bg-[#E9E7E6] w-[58px] h-[58px] rounded-full flex items-center justify-center ">
                  <p className="text-black">$10</p>
                </div>
              </div>
             </div>
             </div>
              </div>
            </div>
          </div>
          <div>
            {/* ------ */}
            <div
              className="grid sm:grid-cols-[14%_80%] sm:gap-[6%] grid-cols-[8%_70%] gap-16 items-center  border xl:py-[30px] xl:px-[35px] 
                   p-[15px]  
                    rounded-[20px]"
            >
              <div className="w-[84px] h-[84px] border-dashed border-2 border-[#270A05] rounded-full flex items-center justify-center">
                <div className="w-[80px] h-[80px] bg-[#E9E7E6] rounded-full flex items-center justify-center">
                  <Image
                    src={menuright1}
                    alt=""
                    srcset=""
                    className="w-[70px] h-[70px]"
                  />
                </div>
              </div>
              <div className=""> 
                <h3 className="text-[#270A05] min-[1650px]:text-[24px] md:text-[1.3vw] font-AbrilDisplayBlack font-semibold">
                Hazelnut Heaven Latte
                </h3>
             <div className="flex ">
             <div className="">
                  <p className="text-[#270A05] xl:text-[14px] text-[12px] opacity-70 font-ValueSansRegular">
                    There are many variations of passages Lorem Ipsum form
                  </p>
                </div>
              <p className="border-dotted border-t-4 mx-2 2xl:w-[32%] w-[18%] mt-[8px] "></p>
             <div>
             <div className="border-dashed border-2 border-[#270A05] rounded-full w-[65px] h-[65px] items-center justify-center flex mt-[-10px]">
                <div className="bg-[#E9E7E6] w-[58px] h-[58px] rounded-full flex items-center justify-center ">
                  <p className="text-black">$10</p>
                </div>
              </div>
             </div>
             </div>
              </div>
            </div>
            {/* ------ */}
            <div
              className="grid sm:grid-cols-[14%_80%] sm:gap-[6%] grid-cols-[8%_70%] gap-16 items-center  border xl:py-[30px] xl:px-[35px] 
                   p-[15px]  
                    rounded-[20px]"
            >
              <div className="w-[84px] h-[84px] border-dashed border-2 border-[#270A05] rounded-full flex items-center justify-center">
                <div className="w-[80px] h-[80px] bg-[#E9E7E6] rounded-full flex items-center justify-center">
                  <Image
                    src={menuright2}
                    alt=""
                    srcset=""
                    className="w-[70px] h-[70px]"
                  />
                </div>
              </div>
              <div className=""> 
                <h3 className="text-[#270A05] min-[1650px]:text-[24px] md:text-[1.3vw] font-AbrilDisplayBlack font-semibold">
                  Coconut Cream Delight (Summer)
                </h3>
             <div className="flex ">
             <div className="">
                  <p className="text-[#270A05] xl:text-[14px] text-[12px] opacity-70 font-ValueSansRegular">
                    There are many variations of passages Lorem Ipsum form
                  </p>
                </div>
              <p className="border-dotted border-t-4 mx-2 2xl:w-[32%] w-[18%] mt-[8px] "></p>
             <div>
             <div className="border-dashed border-2 border-[#270A05] rounded-full w-[65px] h-[65px] items-center justify-center flex mt-[-10px]">
                <div className="bg-[#E9E7E6] w-[58px] h-[58px] rounded-full flex items-center justify-center ">
                  <p className="text-black">$10</p>
                </div>
              </div>
             </div>
             </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="text-[#86371C] font-ValueSansRegular font-semibold text-[16px] border border-[#86371C] 
           rounded-[12px] py-[18px] px-[30px] mx-auto block"
        >
          View All Menu
        </button>
      </div>
    </div>
  );
};

export default ChoseMenu;
