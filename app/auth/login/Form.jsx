'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from 'yup';
const Form = () => {
    const [isLoading, setIsLoading] = useState(false);
    const schema = Yup.object().shape({
        email_phonenumber: Yup.string().required("Field Cannot Be Empty"),
        password: Yup.string().min(6, "Minimum Password Must Be 6").required("Password Cannot Be Empty")
    })
    const [err, setErr] = useState({})


    const router = useRouter()
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            router.push("/dashboard")
        }, 3000)
    }
    return (
        <form action="" className='flex flex-col gap-y-5' onSubmit={handleSubmit}>

            <div className=''>
                <label className='text-xs font-semibold'>Email or Phone Number</label>
                <div className='bg-[#edf2f7] p-5 flex mt-3 rounded-md'>
                    <input type="text" className='w-[100%] bg-transparent outline-none' name="email_phonenumber" />
                </div>
            </div>

            <div className=''>
                <label className='text-xs font-semibold'>Password</label>
                <div className='bg-[#edf2f7] p-5 flex mt-3 rounded-md'>
                    <input type="password" className='w-[100%] bg-transparent outline-none' name="password" />
                </div>
            </div>
            <Link href={"/"} className='text-black text-xs lg:text-md'>
                    Forgot Password?
            </Link>
            <button className='mt-3 btn bg-[#720dd8] p-4 text-white hover:bg-[#5d089e] rounded-bl-none'>
                {!isLoading ? "LOG IN" : <span className="loading loading-dots"></span>}
            </button>
        </form>
    )
}

export default Form