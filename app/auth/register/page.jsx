import React from 'react'

import Link from 'next/link'

import { RiArrowDownSLine } from "react-icons/ri"
const Register = () => {
  const inputs = [
    {
      name: "Full Name",
      type: "text",
      placeholder: "Fullname"
    },
    {
      name: "Email Address",
      type: "email",
    },
    {
      name: "Phone Number",
      type: "text"
    },
    {
      name: "Password",
      type: "password"
    },
    {
      name: "Referrer Phone or Promo Code (Optional)",
      type: "text"
    },
    {
      name: "Phone Numbere",
      type: "text"
    }
  ]
  return (
    <>

      <div className='relative z-10 bg-white md:w-[40%] p-3 md:p-10 rounded-t-3xl rounded-br-3xl'>
        <div className='text-center mb-10'>
          <h1 className='text-2xl font-bold text-[#083e9e]'>Create a Secure Account
            </h1>
          <p className='text-sm font-light text-[#4a5568]'>Welcome to the future of Savings & Investments</p>
        </div>
        <form action="" className='flex flex-col gap-y-5'>
          {
            inputs.map((input, index) => (

              <div className='' key={index}>
                <label className='text-xs font-semibold'>{input.name} </label>
                <div className='bg-[#edf2f7] p-5 flex mt-3 rounded-md'>
                  <input type={input.type} className='w-[100%] bg-transparent outline-none placeholder:text-sm' placeholder={index == 4 ? "Referrer Phone or Code" : input.name} />
                </div>
              </div>
            ))
          }

          <div className=''>
            <label className='text-xs font-semibold '> How Did You Hear About Us? (Optional)
              <div className='bg-[#edf2f7] p-5 flex mt-3 rounded-md justify-between'>
                <input type={"text"} className='w-[100%] bg-transparent outline-none placeholder:text-sm' placeholder='Click to Select' disabled />
                <div className='border-black border-l flex justify-center items-center pl-3'>
                  <RiArrowDownSLine size={15} />
                </div>
              </div>
            </label>

          </div>

          <button className='mt-3 btn bg-[#620dd8] p-4 text-white hover:bg-[#53089e] rounded-bl-none'>CREATE ACCOUNT</button>
        </form>

      </div>
      <div className='relative z-10 flex flex-row justify-center items-center gap-y-2'>
      Already have an account?
        <Link href={"/auth/login"} className='text-white text-md font-extrabold lg:text-lg ml-3'>
           Login
        </Link>

      </div>

    </>
  )
}

export default Register