"use client";
import Image from "next/image";
import logo from "../../assests/logo.png";
import { IoIosClose,  IoIosSearch } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { BsCartDash } from "react-icons/bs";
import admin from '../../assests/Admin.png'
import { GiHamburgerMenu } from "react-icons/gi";
import '../../app/styles/Navbar.css'
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [pageVisible, setPageVisible] = useState(false);

    const togglePageVisibility = () => {
        setPageVisible(!pageVisible);
    };
  const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenuVisibility = () => {
        setMenuVisible(!menuVisible);
    };
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };
  return (
    <nav className="py-7 border-b border-[#101113] border-opacity-10 sticky top-0 bg-white z-50">
      <div className="mx-auto xl:pl-[277px] xl:pr-[133px] sm:px-16 px-6">
        <div className="flex items-center justify-between">
          {/* ---------mobile------------ */}
          <div className="drawer lg:hidden w-8">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" > <GiHamburgerMenu  className="text-xl cursor-pointer"/></label>
            </div>
            <div className="drawer-side z-50">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className=" p-4 w-80 min-h-full bg-base-200 font-ValueSansRegular text-base-content">
                <li><a>Home</a></li>
                <div >
                <li onClick={togglePageVisibility} className="cursor-pointer flex items-center my-2">
                    Pages
                    <p className={`ml-1 ${pageVisible ? 'transform rotate-180' : 'transform rotate-0'}`}>
                    <IoIosArrowDown className="h-4 w-4"/></p>
                </li>
                {pageVisible && (
                    <div className="ml-3 p-2 bg-slate-50 my-2">
                        <li className="my-2"><a>Page1</a></li>
                        <li><a>Page2</a></li>
                    </div>
                )}
                </div>
             <div>
             <li onClick={toggleMenuVisibility} className="cursor-pointer flex items-center ">
              Menu
              <p className={`ml-1 ${pageVisible ? 'transform rotate-180' : 'transform rotate-0'}`}>
                    <IoIosArrowDown className="h-4 w-4"/></p>
              
              </li>
                {menuVisible && (
                    <div className="ml-3 p-2 bg-slate-50 my-2">
                        <li className="my-2"><a>Page1</a></li>
                        <li><a>Page2</a></li>
                    </div>
                )}
             </div>
                <li className="mt-2"><a> Contact Us</a></li>
              </ul>
            </div>
          </div>
          {/* ----------desk-top--------- */}
          <div className="lg:block hidden">
          <ul className="menu menu-horizontal p-0 text-[16px] text-[#270A05] font-ValueSansRegular font-medium ">
            <li>
              <a className="pl-0 pt-0 pb-0 2xl:pr-[50px] pr-4 hover:bg-transparent focus:bg-transparent  ">
                Home </a> </li>
            <li>
              <details>
                <summary className="pl-0 pt-0 pb-0 2xl:pr-[50px] pr-4 hover:bg-transparent focus:bg-transparent">
                  Pages</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="pl-0 pt-0 pb-0 2xl:pr-[50px] pr-4 hover:bg-transparent focus:bg-transparent">
                  Menu</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
            <li>
              <a className="pl-0 pt-0 pb-0 2xl:pr-[50px] pr-4 hover:bg-transparent focus:bg-transparent">
                Contact Us</a>
            </li>
          </ul>
          </div>
          <div>
            <Image src={logo} srcset="" className="sm:w-52 w-28"/>
          </div>
          <div className="flex items-center">
            {/* ---searchbar--- */}
          <div>
            <IoIosSearch className="w-[24px] h-[24px] sm:ml-0 ml-1 cursor-pointer" onClick={toggleSearch} />
            <div className={`searchOverlay ${isSearchOpen ? 'visible' : 'hidden'}`}>
                <div className="flex  items-center px-4 py-2">
                    <input type="text" placeholder="Search..." className="md:w-6/12 w-full mr-2 p-2 border border-gray-300 rounded-md md:ml-[25%]" />
                    <IoIosClose className="w-[30px] h-[30px] cursor-pointer" onClick={toggleSearch} />
                </div>
                </div>
        </div>  {/* ---searchbar end--- */}
            <div className="indicator sm:mx-[30px] mr-3 ml-1">
              <GoHeart className="sm:w-[24px] sm:h-[24px] w-4" />
              <span
                className="sm:w-[18px] sm:h-[18px] w-3.5 h-3.5 rounded-full bg-[#270A05] text-white indicator-item 
            text-[12px] flex items-center justify-center"
              >
                5
              </span>
            </div>
            <div className="indicator">
              <BsCartDash className="sm:w-[24px] sm:h-[24px] w-4" />
              <span
                className="sm:w-[18px] sm:h-[18px] w-3.5 h-3.5 rounded-full bg-[#270A05] text-white indicator-item 
            text-[12px] flex items-center justify-center"
              >
                4
              </span>
            </div>
            <div className="flex items-center">
              < Image src={admin} className="md:mr-[15px] md:ml-[100px] ml-4 mr-2 sm:w-[30px] w-[20px]" />
              <p className="text-[#270A05] sm:text-[16px] text-[14px] font-ValueSansMedium ">Sign in</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
