import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "../../public/images/logo-footer.svg"
import Logos from "../../public/images/paves.png"
import compliance from "../../public/images/compliance.webp"
import { motion } from 'framer-motion'
import { footerLinks } from './uidata'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoTiktok, BiLogoYoutube } from "react-icons/bi"
const Footer = ({ fadeUp }) => {
    const footerSocialIcons = [
        {
            icon: BiLogoFacebook
        },
        {
            icon: BiLogoInstagram
        },
        {
            icon: BiLogoTwitter
        },
        {
            icon: BiLogoTiktok
        },
        {
            icon: BiLogoYoutube
        }]
    return (
        <motion.footer
            transition={{ type: "spring" }}
            variants={fadeUp} initial={"initial"}
            whileInView={"animate"}
            className='px-5  md:px-32 lg:px-10 pb-24 bg-white text-sm font-light'>
            <section className='grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 '>
                <div className='col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    <ul className='flex gap-24 md:flex-col md:gap-y-5 '>
                    <li className='flex justify-center items-center'>
                        <Link href={"/"}>
                            <Image src={Logos} width={50} alt='PAVE Logo' />
                        </Link>
                       <p className='bg-gradient-to-r  from-[rgb(93,24,229)] to-[#5317c8] text-transparent bg-clip-text font-extrabold ml-3 text-2xl'> PAVE</p> 
                    </li>
                        <li className='mx-auto '>
                            <Image src={compliance} width={100} alt='Compliance Logo' />

                        </li>
                    </ul>
                    <div className='col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            footerLinks.map((item, index) => (
                                <ul className='flex flex-col gap-y-3 ' key={index}>
                                    <li className='font-bold '>{item.name}</li>
                                    {item.links.map((link, index) => (
                                        <li className='font-light' key={index}>
                                            <Link href={link.url}>
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}

                                </ul>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-y-5 lg:items-end'>
                    <ul className='flex text-[#122231] gap-x-5 text-2xl'>
                        {
                            footerSocialIcons.map((item, index) => (
                                <li key={index}>
                                    <Link href={""} >
                                        <item.icon/>
                                    </Link>
                                </li>
                            ))
                        }

                    </ul>
                    <Link href={""} className='text-right text-sm font-light'>
                        Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.
                    </Link>
                    <Link href={""} className='text-right text-sm font-light'>
                        contact@PAVE.com
                    </Link>
                    <Link href={""} className='text-right text-sm font-light'>
                        +234 8148042760  
                    </Link>
                </div>
            </section>
            <hr className='my-10' />
        </motion.footer>
    )
}

export default Footer