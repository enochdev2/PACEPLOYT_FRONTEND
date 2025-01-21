import { dashboardInvest } from '@/app/components/uidata'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import styles from "./style.module.css"
const DashboardInvest = () => {
    const path = usePathname();

    return (
        <div>
            <div className='p-3 flex border-b relative gap-x-5 lg:gap-x-10'>
                {dashboardInvest.map((item, index) => (
                    <Link key={index} href={item.href} className={`flex items-center text-xs lg:text-sm lg:gap-x-2 gap-x-1 ${path == item.href ? styles.active : 'text-gray-400'}`}>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" width={25} xmlns="http://www.w3.org/2000/svg">
                            {item.icon}
                        </svg>

                        {item.title}
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default DashboardInvest