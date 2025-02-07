'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { LuUserCheck } from 'react-icons/lu'
import Modal from '../Modal'

const Page = () => {
  const router = useRouter()
  return (
    <Modal color="text-black">
      <div className="px-10">
        <h1 className='text-2xl font-bold'>Verify Your Identity</h1>
        <p className='text-xs mb-10'>You can verify your identity on PAVE through your BVN or NIN</p>

        <div>
          <Link href={""} className='p-5 border rounded-global flex items-center gap-x-5 mb-5'>
            <LuUserCheck size={30} style={{ color: "rgb(13, 96, 216)" }} />

            <div>
              <h1 className='text-lg font-bold' style={{ color: "rgb(1, 96, 216)" }}>Use your BVN</h1>
              <p className='text-xs'>Verify your PAVE using your Bank Verification Number (BVN)</p>
            </div>
          </Link>

          <Link href={""} className='p-5 border rounded-global flex items-center gap-x-5 '>
            <LuUserCheck size={30} style={{ color: "rgb(13, 96, 216)" }} />

            <div>
              <h1 className='text-lg font-bold' style={{ color: "rgb(13, 96, 216)" }}>Use your NIN (Paused)</h1>
              <p className='text-xs'>Verify your PAVE using your Bank Verification Number (BVN)</p>
            </div>
          </Link>
        </div>
      </div>
      <hr  />
      <div className='px-10 py-5'>
        <button className='border w-[100%] p-4 rounded-global border-black' onClick={()=>router.back()}>Close</button>
      </div>
    </Modal>
  )
}

export default Page