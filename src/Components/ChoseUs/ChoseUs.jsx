import Image from 'next/image';
import choseus from '../../assests/choseus.png';
import cupbg from '../../assests/cupBg.png'

const ChoseUs = () => {
    return (
        <div className='relative py-24'>
            <Image className='absolute right-0 top-0 xl:w-44 w-40' src={cupbg} alt=""  />
            <div className="mx-auto xl:pl-[220px] xl:pr-[180px] sm:px-16 px-6">
                <div className="grid md:grid-cols-[56%_40%] md:gap-[4%] gap-5 items-center" >
                    <div className='lg:pr-5'>
                        <div className='flex items-center'>
                        <div className=' bg-[linear-gradient(90deg,_#fff_0%,_#fff_10%,_#86371C)] w-[70px] h-[1px] mr-1 '></div>
                        <h3 className="text-[#86371C] text-[16px] font-Lemonada italic ">Why Choose Us</h3>
                        </div>
                        <h2 className='text-[#270A05] font-bakilda lg:text-[2.4vw] sm:text-[25px] text-[20px]'>Choosing Unlocklive, A Taste of Perfection</h2>
                        <p className='text-[#270A05] text-[16px] opacity-60 font-ValueSansRegular'>Unlocklive takes pride in the art of roasting, transforming raw coffee beans into a symphony of aromatic notes and rich flavors.</p>
                        <div className='grid grid-cols-3 items-center justify-between gap-5 py-[30px]'>
                            <div className='border rounded-[10px] py-[20px] text-center'>
                                <h2 className='mb-3 font-bakilda lg:text-[44px] text-[40px]'>20+</h2>
                                <p className='text-[#270A05] lg:text-[20px] text-[12px]'>Years Experience</p>
                            </div>
                            <div className='border rounded-[10px]'>
                            <div className='border rounded-[10px] py-[20px] text-center rotate-3'>
                                <h2 className='mb-3 font-bakilda lg:text-[44px] text-[40px]'>100+</h2>
                                <p className='text-[#270A05] lg:text-[20px] text-[12px]'>Master Chefs</p>
                            </div>
                            </div>
                            <div className='border rounded-[10px] py-[20px] text-center'>
                                <h2  className='mb-3 font-bakilda lg:text-[44px] text-[40px]'>30+</h2>
                                <p className='text-[#270A05] lg:text-[20px] text-[12px]'>Achievements</p>
                            </div>
                        </div>
                        <p className='text-[#270A05] text-[16px] opacity-60 font-ValueSansRegular'>Your choice to savor our coffee is an invitation to experience the epitome of craftsmanship, flavor, and dedication.</p>
                        <button className='text-[#86371C] font-medium text-[16px] border border-[#86371C] 
                        rounded-[12px] py-[18px] px-[30px] mt-[50px]'>Explore Our Menus</button>
                    </div>
                    <div>
                       <div className=' border  xl:h-[480px] lg:h-[470px] md:h-[350px] rounded-b-[30px] rounded-t-[500px] sm:h-[630px] h-[360px]'>
                       <Image src={choseus} alt="" className='w-[95%] xl:h-[460px] lg:h-[460px] md:h-[340px] sm:h-[615px] h-[350px] mx-auto '/>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChoseUs;