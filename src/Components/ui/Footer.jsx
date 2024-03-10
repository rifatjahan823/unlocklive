'use client'
import Image from 'next/image';
import './Footer.css';
import logo from '../../assests/footer-logo.png'
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="">
            <div className="mx-auto xl:pl-[277px] xl:pr-[133px] sm:px-16 px-6">
                <div className='flex items-center justify-between flex-wrap gap-8'>
                    <Image src={logo} alt="" srcset="" />
                    <div className='flex items-center text-white text-[16px] font-ValueSansRegular'>
                        <Link href=''>Terms</Link>
                        <Link href='' className='mx-[45px]'>Privacy</Link>
                        <Link href=''>Cookies</Link>
                    </div>
                    <div className='flex items-center'>
                    <div className='w-[35px] h-[35px] border rounded-full flex items-center justify-center'>
                    <FaLinkedinIn className=' text-white'/>
                    </div>
                    <div className='w-[35px] h-[35px] border rounded-full flex items-center justify-center mx-5'><FaFacebookF className=' text-white'/></div>
                    <div className='w-[35px] h-[35px] border rounded-full flex items-center justify-center'><FaTwitter className=' text-white'/></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;