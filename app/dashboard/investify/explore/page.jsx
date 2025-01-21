
import React from 'react'
import { CiSearch } from "react-icons/ci";
import DashboardFilterInvest from './DashboardFilterInvest';
const Explore = () => {
  return (
    <div className=''>
      <div className='p-3'>
        <div className='bg-gray-100 p-3 flex items-center gap-x-2 rounded-sm relative'>
          <CiSearch size={20} />
          <input type="text" className='w-[100%] bg-transparent outline-none placeholder:text-gray-400 placeholder:font-light' placeholder='Search Investments...' />
        </div>
      </div>
      <DashboardFilterInvest />

    </div>
  )
}

export default Explore