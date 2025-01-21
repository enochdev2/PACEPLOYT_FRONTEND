'use client'
import React, { useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

const InputDropDown = ({ option }) => {
    // Creating states for drop down to know when its clicked, and also to know when an option is selected
    const [isClicked, setIsClicked] = useState(false);
    const [selected, setIsSelected] = useState(option.input.options[0]);
    const handleIsClicked = () => {
        setIsClicked(!isClicked)

    }
    const handleIsSelected = (e) => {
        setIsSelected(e.target.name)
        handleIsClicked()

    }
    return (
        <>
            <div className='relative mb-5'>
                <p className='font-semibold'>{option.input.title}</p>
                <div className={`${option.input.isShowing ? 'outline  outline-blue-500 outline-1' : 'outline-none'} bg-[#edf2f7] p-3 flex mt-3 rounded-md justify-between `} onClick={()=>option.hideAll(option.input.title)}>
                    <p className=''>{selected}</p>
                    <div className=' border-black border-l flex justify-center items-center pl-3'>
                        <RiArrowDownSLine size={15} />
                    </div>

                </div>
                <div className={`${option.input.isShowing ? 'block' : 'hidden'} py-1 absolute bg-white w-[100%] h-[120px]  left-0 top-[120%] shadow-lg border z-10 duration-500 overflow-y-auto`}>
                    {option.input.options.map((option, index) => <button key={index} className={`px-3 py-2 cursor-pointer  outline-none border-none  w-[100%] text-left ${option == selected && 'bg-blue-500 text-white'}`} id="" onClick={handleIsSelected} name={option}>{option}</button>)}
                </div>
            </div>
        </>
    )
}

export default InputDropDown