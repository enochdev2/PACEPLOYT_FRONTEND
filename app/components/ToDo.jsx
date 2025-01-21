import Link from 'next/link'
import React from 'react'

const ToDo = ({ title,href }) => {
    return (
        <Link href={`/dashboard/sidebar/${href}`} className='flex items-center rounded-t-xl rounded-br-xl rounded-bl-none border border-[#ccc]  p-5 gap-x-5 cursor-pointer mb-5' >
            <div className='w-4 h-4  rounded-full ' style={{ outline: "1.5px solid rgb(13, 96, 216) ", outlineOffset: "2px" }}></div>
            <p className='font-bold text-xs'>{title}</p>
        </Link>

    )
}

export default ToDo