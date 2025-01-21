'use client'
import React, { useEffect, useState } from 'react'
import Modal from '../Modal'
import { RiArrowDownSLine } from 'react-icons/ri'
import InputDropDown from '@/app/components/InputDropDown'
import { moreInfoInputs } from '@/app/components/uidata'

const Page = () => {
  const [inputs, setInputs] = useState([...moreInfoInputs].map(item => ({ ...item, isShowing: false })));
  const hideAll = (title) => {
    setInputs(prev => {
     return [...prev].map(item => ({ ...item, isShowing: item.title == title ? !item.isShowing : false }))
    })

  }
  return (
    <Modal color="text-blue-500">
      <div className="px-10 overflow-y-auto h-[65vh]">
        <h1 className='mb-5 text-2xl font-bold text-blue-500'>Mini KYC Information</h1>
        <p className='text-xs mb-14'>Fill the form below so we can have a better understanding of who you are.</p>

        <div className='' style={{}}>
          {inputs.map((input, index) => <InputDropDown option={{ input, hideAll }} key={index} />)}
        </div>

      </div>
      <div className='border-t p-5'>
        <button className='bg-blue-600 w-[100%] p-3 text-white rounded-global uppercase font-bold'>Finish</button>
      </div>
    </Modal>
  )
}

export default Page