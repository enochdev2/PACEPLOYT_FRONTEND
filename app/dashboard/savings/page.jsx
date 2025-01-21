import React from 'react'
import avatar from "../../../public/images/dashboard_avatar.png";
import completeSetup from '../../../public/images/complete-setup-v3.jpg';

import Image from 'next/image'
import { dashboardSavings } from '@/app/components/uidata';
import Link from 'next/link';

const Savings = () => {
  return (
    <div>
      <header>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-3xl font-bold mb-1'>Savings</h1>
            <p className='text-[#718096] font-light '>Let&apos;s see how well you&apos;re doing</p>
          </div>
          <Image src={avatar} width={60} quality={100} alt='avatar'/>
        </div>
      </header>

      <main className=' grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 py-10'>
        <div className="col-span-2 border py-7 px-3 rounded-global mb-10">
          <p className='text-sm mb-1'>Total Balance</p>
          <p className='text-[#083e9e] text-4xl font-bold'>₦0.00</p>
        </div>

        <div className='col-span-2 lg:col-span-1 mb-10'>
          <p className='text-xs mb-1 uppercase'>Complete your setup</p>

          <Link href={""}>
            <Image src={completeSetup} width={300} height={300} quality={100} className=' w-[100%] rounded-xl' alt='completeSetup'/>
          </Link>
        </div>

        {
          dashboardSavings.map((item, index) => (
            <Link key={index} href={"/"} style={{ backgroundColor: item.bgColor, color: item.textColor }} className='px-3 lg:px-5 py-10 flex flex-col gap-y-3 rounded-t-3xl rounded-br-3xl rounded-bl-xl'>
              {item.icon}
              <p className='capitalize text-xl font-bold' >{item.title}</p>
              <p className='text-xs lg:text-sm text-black'>{item.subtitle}</p>
              <p className='font-bold'>{item.amount}</p>
            </Link>
          ))
        }
      </main>
    </div>
  )
}

export default Savings