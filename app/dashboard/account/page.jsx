import React from 'react'
import security from "../../../public/images/2-factor-min.png"
import Link from 'next/link'
import Image from 'next/image'
import { FaAngleRight } from "react-icons/fa6"
import { myAccount } from '@/app/components/uidata';

import ImageContainer from './ImageContainer'
import ShowDashboardBalances from './ShowDashboardBalances'

const Account = () => {
  return (
      <div className='py-10'>
        <h1 className='text-3xl font-bold mb-1'>My Account</h1>
        <p className='text-[#718096] font-light '>Nsude Kenechi</p>

        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-x-20 '>
          <div className="order-2 lg:order-1">
            <Link href={"/"} className='block my-10'>
              <Image src={security} width={300} quality={100} className='rounded-xl w-[100%]' alt='security' />
            </Link>

            {myAccount.map((item, index) => (
              myAccount.length - 1 == index ? <Link key={index} href={item.href} className='px-5 py-4 border rounded-global flex items-center mb-5 justify-between'>
                <div className='text-red-500 flex items-center gap-x-2'>
                  {item.icon}
                  <span className='text-xs font-light capitalize'>{item.title}</span>
                </div>

                <FaAngleRight />

              </Link> : <Link key={index} href={item.href} className='gap-x-2 px-5 py-4 border rounded-global flex items-center mb-5'>
                {item.icon}
                <span className='text-xs font-light capitalize'>{item.title}</span>
              </Link>
            ))}
          </div>
          <div className="lg:col-span-2 lg:p-5 order-1 lg:order-2 ">
              <div className='p-10'>
                      
            <ImageContainer/>
            <h1 className='text-2xl font-bold mb-1 text-center'>Nsude Kenechi</h1>
              </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 py-5 gap-5">
                <Link href={""} className='border  rounded-global p-5'>
                  <h1 className='text-xl font-semibold'>Get Flex Number</h1>
                  <p className='text-sm font-light'>Add BVN or NIN</p>
                </Link>
                <Link href={""} className='border  rounded-global p-5'>
                  <h1 className='text-xl font-semibold'>0</h1>
                  <p className='text-sm font-light'>PAVE Points</p>
                </Link>
                <Link href={""} className='border  rounded-global p-5'>
                  <h1 className='text-xl font-semibold'># Pavelink ID</h1>
                  <p className='text-sm font-light'>Create a PAVE-link ID</p>
                </Link>
                <Link href={""} className='border  rounded-global p-5'>
                  <h1 className='text-xl font-semibold'>0</h1>
                  <p className='text-sm font-light'>Referral Earnings</p>
                </Link>
            </div>

            <div className="grid grid-cols-4 items-center">
              <h1 className='font-semibold col-span-3'>Show Dashboard Balances</h1>
              <ShowDashboardBalances/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Account