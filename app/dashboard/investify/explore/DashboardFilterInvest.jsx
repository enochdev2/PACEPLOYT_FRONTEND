"use client"
import React, { useEffect, useState } from 'react'
import { dashboardFilterInvest, dashboardInvestments } from '@/app/components/uidata';
import thumb from "../../../../public/images/thumb.inv68202cdd88.jpg"
import Image from 'next/image';
import Link from 'next/link';
const DashboardFilterInvest = () => {
    const [selectedInvest, setSelectedInvest] = useState({
        filter: "All",
        investments: [...dashboardInvestments]
    });
    const handleSelectedInvest = (invest) => {
        setSelectedInvest({
            filter: invest,
            investments: dashboardInvestments.filter(item => invest == "All" ? item : item.category == invest)
        });
    }
    return (
        <div className='' >
            <div className='p-3'>
                <div className='flex  gap-x-5 overflow-auto '>
                    {
                        dashboardFilterInvest.map((item, index) => (
                            <div className='pb-2' key={index}>
                                <span onClick={() => handleSelectedInvest(item)} className={`whitespace-nowrap text-sm  rounded-global cursor-pointer flex justify-center ${item == selectedInvest.filter && 'bg-[#7913e5] text-white'} border  py-1 px-10 cursor-pointer`}>
                                    {item}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
            {selectedInvest.investments.map((item, index) => (
                <Link href={"/"} key={index} className='grid grid-cols-1  lg:grid-cols-3 gap-x-5 border-b py-5 p-3'>
                    <Image src={item.img} width={500} quality={100} alt='thumb' className='object-cover h-[150px] rounded-global' />
                    <div className='lg:col-span-2 '>
                        <h1 className='text-xl font-bold '>{item.title}</h1>
                        <p className='text-xs' suppressHydrationWarning><span className='text-green-500' suppressHydrationWarning>{(Math.random() * 100).toFixed(2)}%</span> returns in {Math.floor(Math.random() * 12)} months</p>
                        <div className="grid grid-cols-3 py-5">
                            <div>
                                <p className='text-[#7913e5] text-lg' suppressHydrationWarning>₦{Math.floor(Math.random() * 100000)}</p>
                                <p className='text-xs'>per unit</p>
                            </div>

                            <div>
                                <p className='text-[#7913e5] text-lg' suppressHydrationWarning>{Math.floor(Math.random() * 200)}</p>
                                <p className='text-xs'>Investors</p>
                            </div>
                        </div>
                        <span className='text-sm bg-red-200 text-red-400 rounded-full py-1 px-4 '>Sold out</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default DashboardFilterInvest