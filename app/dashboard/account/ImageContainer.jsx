"use client"
import React, { useRef, useState } from 'react'
import avatar from "../../../public/images/dashboard_avatar.png"
import { BiCamera } from 'react-icons/bi'
import Image from 'next/image'

const ImageContainer = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const file = useRef(null)
    const handleShowOverlay = () => {
        setShowOverlay(true)
    }
    const handleHideOverlay = () => {
        setShowOverlay(false)
    }
    const handleOpenFile = ()=>{
        file.current.click()
    }
    return (
        <div className='flex justify-center'>
            <div className='relative overflow-hidden rounded-full cursor-pointer' onMouseOver={handleShowOverlay} onMouseOut={handleHideOverlay} onClick={handleOpenFile}>
                <Image src={avatar} alt='avatar' quality={100} width={120} />
                <div className={`duration-500 bg-[rgba(0,0,0,.5)] w-[100%] absolute h-[30%] top-[70%] rounded-b-full flex justify-center items-center ${showOverlay ? 'opacity-100' : 'opacity-0'}`} >
                    <BiCamera size={25} color='white' />
                </div>
                <input type="file" ref={file} hidden/>
            </div>
        </div>
    )
}

export default ImageContainer