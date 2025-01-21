"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion';

const BuildSavings = ({ item, variant }) => {
    const [isHovered, setIsHovered] = useState(false)
    const handleHover = () => {
        setIsHovered(true);
    }
    const handleOut = () => {
        setIsHovered(false);
    }
    return (
        <Link href={`/${item.item.arrowText}`} className={`${item.index % 2 != 0 ? "lg:pr-10" : ""}`}>
            <motion.div
                viewport={{ once: true, amount: 0.25 }}
                variants={variant}
                initial={"initial"}
                whileInView={"animate"}
                className={`text-center lg:text-left  rounded-3xl shadow-sm relative  grid  grid-cols-2 overflow-hidden duration-500`} style={{
                    backgroundColor: !isHovered ? "white" : item.item.backgroundColor,
                    color: !isHovered ? "black" : "white"
                }} onMouseOver={handleHover} onMouseOut={handleOut}>
                <div className="col-span-2 py-10 px-5 md:px-10  flex flex-col justify-between h-[450px]" >
                    <div>
                        <h1 className="text-2xl lg:text-4xl font-bold  mb-5" style={{
                            color: !isHovered ? item.item.textColor : "white"
                        }}>{item.item.title}</h1>
                        <p className="text-lg lg:text-xl">{item.item.subtitle}</p>
                    </div>
                    <div className="flex gap-x-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 10L20 15L15 20" stroke={`${!isHovered ? item.item.textColor : "#fff"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke={`${!isHovered ? item.item.textColor : "#fff"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ></path></svg>
                        <div href="/security" className='capitalize' style={{
                            color: !isHovered ? item.item.textColor : "white"
                        }}>
                            {item.item.arrowText}
                        </div>
                    </div>
                </div>
                <Image src={item.item.img} className={`bottom-[0%] absolute duration-500  ${!isHovered ? "right-[-100%] w-[0%]" : "w-[250px] right-5"}`} width={0} quality={100} alt={item.item.title} />
            </motion.div>
        </Link>
    )
}

export default BuildSavings