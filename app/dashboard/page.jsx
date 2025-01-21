import React from 'react'
import avatar from "../../public/images/dashboard_avatar.png"
import Image from 'next/image'
import { BiRefresh } from 'react-icons/bi'
import { FiThumbsUp } from 'react-icons/fi'
import { IoIosAdd } from 'react-icons/io'
import { HiLockClosed } from 'react-icons/hi'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import pattern from "../../public/images/bg-pattern.8efb1209.png"
import blueVirtual from "../../public/images/blue-virtual-card-pattern@3x.png"
import coreSavings from '../../public/images/core-savings-icon-min.png';
import completeSetup from '../../public/images/complete-setup-v3.jpg';
import iosBadge from '../../public/images/iosbadge-101-image.png'
import googleBadge from '../../public/images/google-play-badge.png'
import smallPicture from '../../public/images/smallpic4440888833.jpeg'

import Link from 'next/link'
import { dashboardHome, toDoList } from '../components/uidata'
import ToDo from '../components/ToDo'
import Greetings from './Greetings'

const Home = () => {
  return (
    <div>
      <header>
        <div className='flex justify-between items-center'>
          <Greetings/>
          <Image alt='avatar' src={avatar} width={60} quality={100} />
        </div>

        <div className='pt-10 pb-2 flex justify-between items-center'>
          <Link href={""}><BiRefresh size={24} /></Link>
          <Link href={""} className='text-xs py-2 bg-[#0d60d8] px-4 text-white hover:bg-[#083e9e] rounded-t-md rounded-br-md rounded-bl-none flex items-center'><IoIosAdd size={20} /> Quick Save</Link>
        </div>

        <div className='flex w-[90vw] lg:w-[70vw] overflow-auto gap-x-5 py-3 mb-10'>
          {dashboardHome.map((item, index) => (
            <Link href={item.href} key={index} className={`rounded-t-lg rounded-br-lg rounded-bl-none relative ${index == 3 && "border"}`} style={{ background: item.bg }}>
              <div className='flex items-center w-[250px] px-5 py-12 gap-x-5 text-white relative z-10'>
                {item.icon}
                <div style={{ color: index == 3 && "#E7439C" }}>
                  <p className='text-sm'>{item.text}</p>
                  <h3 className='text-lg font-bold'>{item.amount}</h3>
                </div>
              </div>
              <Image src={index != 4 ? pattern : blueVirtual} width={500} quality={100} className='absolute top-0 w-[100%] h-[100%] rounded-full' alt='pattern'/>
            </Link>
          ))}

        </div>
      </header>

      {/* ToDo List/Complete your set up */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10">
        <div className='lg:col-span-2'>
          <p className='text-xs mb-5'>TO-DO LIST</p>
          {toDoList.map((item, index) => {
            if (!item.isChecked) {
              return <ToDo key={index} title={item.title} href={item.href}/>

            }
          })}

          <div className='py-10'>
            <Link href={""} className='flex items-center rounded-t-xl rounded-br-xl rounded-bl-none  border-[#ccc] py-5 px-3 lg:px-5 gap-x-5 cursor-pointer mb-5' style={{ color: 'rgb(13, 96, 216)', border: '1px solid' }}>
              <div >
                <FiThumbsUp size={25} />
              </div>
              <div>
                <p className='font-bold text-xs mb-1'>See your recent activities</p>
                <p className='text-xs font-light text-black'>See your most  recent activities  on PACEPLOYT</p>
              </div>
            </Link>

            <Link href={""} className='flex items-center rounded-t-xl rounded-br-xl rounded-bl-none  border-[#ccc] py-5 px-3 lg:px-5 gap-x-5 cursor-pointer mb-5' style={{ color: 'rgb(34, 149, 242)', border: '1px solid' }}>
              <div >
                <HiLockClosed size={25} />
              </div>
              <div>
                <p className='font-bold text-xs mb-1'>Create a safe lock</p>
                <p className='text-xs font-light text-black'>See your most  recent activities  on PACEPLOYT</p>
              </div>
            </Link>

            <Link href={""} className='flex items-center rounded-t-xl rounded-br-xl rounded-bl-none  border-[#ccc] py-5 px-3 lg:px-5 gap-x-5 cursor-pointer mb-5' style={{ color: 'rgb(117, 63, 246)', border: '1px solid' }}>
              <div >
                <MdOutlineAlternateEmail size={25} />
              </div>
              <div>
                <p className='font-bold text-xs mb-1'>Link your Pocket App</p>
                <p className='text-xs font-light text-black'>Withdraw from your PACEPLOYT safer & faster 💜</p>
              </div>
            </Link>
          </div>



        </div>

        <div className='flex flex-col gap-y-14'>
          <div className='hidden lg:block'>
            <p className='text-xs lg:text-[0.625rem] mb-3 uppercase'>Complete your setup</p>
            <Link href={""} >
              <Image src={completeSetup} width={300} height={300} quality={100} className='rounded-xl w-[100%]' alt='complete setup'/>
            </Link>
          </div>

          <div>
            <p className='text-xs lg:text-[0.625rem] mb-3 uppercase'>Download the mobile app</p>
            <div className='flex items-center gap-x-5'>
              <Link href={"https://www.pave.com/appstorelink/ios"}>
                <Image src={iosBadge} width={500} quality={100} alt='iosBadge' />
              </Link>
              <Link href={"https://www.pave.com/appstorelink/android"}>
                <Image src={googleBadge} width={500} quality={100} className='' alt='googleBadge' />
              </Link>
            </div>
          </div>

          <div>
            <p className='text-xs lg:text-[0.625rem] mb-3 uppercase'>#MEETAPAVEVESTSAVER: MUYIWA</p>
            <Link href={"https://www.youtube.com/watch?v=_HcNchGk_A0si%3Dh05iPgQIy1i-sD2W&feature=youtu.be"}>
              <Image src={smallPicture} width={300} quality={100} alt='smallPicture' className='rounded-2xl w-[100%]' />
            </Link>
          </div>



        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10  py-10 lg:py-0">
        <div className="col-span-2">
          <p className='text-xs mb-5 uppercase'>Recent Activities</p>
          <Link href={""} className='flex items-center rounded-t-xl rounded-br-xl rounded-bl-none  border p-5 gap-x-5 cursor-pointer mb-5'>
            <div className='w-8 h-8 overflow-hidden rounded-full'>
              <Image src={coreSavings} alt='coreSavings' width={100} quality={100} />
            </div>
            <div>
              <p className='text-gray-700 text-xs'>Just registered</p>
              <p className='text-xs font-light text-gray-600'> 2 days ago</p>
            </div>
          </Link>

          <div className='flex justify-center'>
            <Link href={""} className='text-sm text-center text-[#0d60d8]'>VIEW MORE ACTIVITIES</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home