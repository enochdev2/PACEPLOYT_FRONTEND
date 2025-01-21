"use client";
import React, { useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
const Modal = ({ children, color }) => {
    const router = useRouter();
    const [showModal,setShowModal] = useState(true);
    const goBack = () => {
        setTimeout(()=>{
            router.back()
        },300)
        setShowModal(false);
    }
    return (
        <div className='fixed  w-[100%] h-[100%] z-[100] grid grid-cols-6 bg-[rgba(0,0,0,.4)]' >
            <div className="col-span-4 " onClick={goBack}></div>
            <motion.div initial={{ translateX: "50%" }} animate={{ translateX: showModal ? "0%" : "100%" }} transition={{ duration: 0.2 }} className='bg-white col-span-2 '>
                <div className={`flex justify-end mb-10 ${color} p-5`} >
                    <IoIosClose size={50} className='cursor-pointer' onClick={goBack} />
                </div>
                {children}
            </motion.div>
        </div>
    )
}

export default Modal;