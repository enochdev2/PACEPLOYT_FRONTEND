import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import Logos from "../../public/images/paves.png"
import loginIcon from "../../public/images/login-logo.png"
import loginIcon2 from "../../public/images/login-logo-2.png"
import loginIcon3 from "../../public/images/login-logo-3.png"
import loginIcon4 from "../../public/images/login-logo-4.png"

const layout = ({ children }) => {
    return (

        <main className='bg-[#c4adf8]  flex flex-col justify-center items-center gap-y-10 p-10  z-20'>
                
                        <Link href={"/"} className='flex bg-gray- z-10 px-5 rounded-2xl  text items-center'>
                            <Image src={Logos} width={80} alt='PAVE Logo' />
                       <p className=' bg-gradient-to-r  from-[#5d18e5] to-[#5317c8] text-transparent bg-clip-text font-extrabold ml-3 text-4xl'> PAVE</p> 
                        </Link>

                {children}

            <div className='fixed left-0 -top-16 flex justify-between w-[100%]'>
                <Image src={loginIcon} width={200} quality={100} alt='loginIcon' />
                <Image src={loginIcon2} width={200} quality={100} className='relative -right-[8.5%] top-14' alt='loginIcon2' />

            </div>

            <div className='fixed left-0 top-[70%] flex justify-between w-[100%]'>
                <Image src={loginIcon3} width={200} quality={100} className='relative -left-[6.5%] top-10' alt='loginIcon3' />
                <Image src={loginIcon4} width={200} quality={100} className='relative -right-[6.5%] top-0' alt='loginIcon4' />
            </div>
        </main>

    )
}

export default layout