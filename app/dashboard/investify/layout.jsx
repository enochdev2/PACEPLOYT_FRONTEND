"use client";
import React from 'react'
import avatar from "../../../public/images/dashboard_avatar.png"
import Image from 'next/image'
import Link from 'next/link'
import { BiInfoCircle } from 'react-icons/bi'
import completeSetup from '../../../public/images/complete-setup-v3.jpg';
import DashboardInvest from './DashboardInvest';
const layout = ({ children }) => {
    return (
        <div>
            <header>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-3xl font-bold mb-2'>Investify</h1>
                    </div>
                    <Image src={avatar} width={60} quality={100} alt='avatar' />
                </div>
            </header>
            <main className='grid grid-cols-1 lg:grid-cols-3 gap-x-10 py-10 relative'>
                <div className=" lg:col-span-2   rounded-global ">
                    <div className='border mb-10'>
                        <div className='px-5 py-8'>
                            <p className='text-xs uppercase mb-2'>Total Balance</p>
                            <p className='text-4xl text-[#7913e5] font-bold'>
                                ₦0.00
                            </p>
                        </div>
                        <Link href={""} className="flex gap-x-3 border-t p-3 justify-center items-center hover:text-[#083e9e]">
                            <BiInfoCircle size={25} />  <p>Learn More</p>
                        </Link>
                    </div>

                    <div className=" border rounded-global ">
                        <DashboardInvest />
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
                <div >
                    <div className="my-10 border p-5 h-fit rounded-global">
                        <p className='text-xs uppercase '>expected roi</p>
                        <h1 className='text-2xl text-[#7913e5] my-2'>Up to 25%</h1>
                        <p className='text-xs  mb-2'>Per Annum</p>

                    </div>
                    <div className=" h-fit rounded-global">
                        <p className='text-xs lg:text-[0.625rem] mb-3 uppercase'>Complete your setup</p>
                        <Link href={""} >
                            <Image src={completeSetup} width={300} height={300} quality={100} className='rounded-xl w-[100%]' alt='completeSetup' />
                        </Link>

                    </div>
                </div>

            </main>

        </div>
    )
}

export default layout