"use client"
import React, { useState } from 'react'

const ShowDashboardBalances = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='flex justify-end' onClick={() => setShow(!show)}>
            <div className={`${!show ? 'bg-gray-400' : 'bg-green-500'} p-[1px] rounded-full w-[60px] cursor-pointer`}>
                <div className={`duration-500 bg-white h-7 w-7 rounded-full relative ${!show ? 'translate-x-0' : 'translate-x-[30px]'}`}></div>
            </div>
        </div>
    )
}

export default ShowDashboardBalances