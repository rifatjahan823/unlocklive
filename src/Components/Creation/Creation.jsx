"use client"
import './Creation.css'
import React, { useState } from 'react';

const Creation = () => {
    // State to manage active tab
    const [activeTab, setActiveTab] = useState(0);

    // Data for tabs
    const tabs = [
        { 
            label: 'All', 
            images: ['img/Image-9.png', 'img/Image-10.png','img/Image-6.png','img/Image-7.png','img/Image-8.png'] 
        },
        { 
            label: 'Burger', 
            images: ['img/Image-6.png', 'img/Image-6.png','img/Image-6.png','img/Image-6.png','img/Image-6.png'] 
        },
        { 
            label: 'Drinks', 
            images: ['img/Image-9.png', 'img/Image-9.png','img/Image-9.png','img/Image-9.png','img/Image-9.png'] 
        },
        { 
            label: 'Pizza', 
            images: ['img/Image-7.png', 'img/Image-7.png','img/Image-7.png','img/Image-7.png','img/Image-7.png'] 
        },
        { 
            label: 'Dinner', 
            images: ['img/Image-6.png', 'img/Image-6.png','img/Image-6.png','img/Image-6.png','img/Image-6.png'] 
        },
        { 
            label: 'Lunch', 
            images: ['img/Image-6.png', 'img/Image-6.png','img/Image-6.png','img/Image-6.png','img/Image-6.png'] 
        },
        { 
            label: 'Cookies', 
            images: ['img/Image-6.png', 'img/Image-8.png','img/Image-8.png','img/Image-8.png','img/Image-8.png'] 
        },
        { 
            label: 'Bakery', 
            images: ['img/Image-6.png', 'img/Image-6.png','img/Image-6.png','img/Image-6.png','img/Image-6.png'] 
        },
    ];

    return (
        <div>
        <div className="mx-auto xl:pl-[220px] xl:pr-[180px] sm:px-16 px-6 py-[100px]">
           <div className='text-center'>
           <h6 className='text-[#86371C] text-[16px] font-Lemonada italic '>Showcase</h6>
           <div className=' bg-[linear-gradient(90deg,_#fff_0%,_#86371C_47%,_#fff)] w-[124px] h-[1px] mx-auto my-2'></div>
            <h2 className='text-[#270A05] font-bakilda sm:text-[44px] text-[7.5vw]'>Our Chefs New Creations</h2>
            <p className='text-[18px] text-[#75807c] mt-[24px] mb-[60px] font-ValueSansRegular'>Behold the extraordinary creations born from the synergy of our users ingenuity <br/> and the transformative power of AI, a testament to boundless innovation.</p>
           </div>
            <div>
                {/* Render tabs */}
                <div className="flex flex-wrap mb-[48px] items-center justify-center">
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer  sm:mr-4 sm:py-[12px] sm:px-[24px] py-[8px] px-[22px] sm:text-[22px] text-[16px] font-ValueSansRegular ${activeTab === index ? 'border border-[#86371C] rounded-full text-[#86371C]' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.label}
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                <div className="grid-wrapper mt-4">
                    {tabs[activeTab].images.map((image, index) => (
                        <img 
                            key={index} 
                            src={image} 
                            alt={`Image ${index}`} 
                        />
                    ))}
                </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Creation;
