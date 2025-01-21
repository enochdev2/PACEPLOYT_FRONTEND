import Link from "next/link"

const Invest = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <p className="text-2xl font-bold text-[#7913e5] mb-1">Start Investing</p>
      <p className="text-sm text-center w-[60%] mb-5">Start investing in verified opportunities. Let&apos;s help you get started.</p>
      <button className="mb-3 uppercase text-white py-2 rounded-global text-center w-[70%]  lg:w-[40%] bg-[#7913e5]">Invest now</button>
     <Link href={""} className="rounded-global text-center lg:w-[40%] py-2 uppercase w-[70%] text-[#7913e5] border border-[#7913e5]">
      Learn more
     </Link>

    </div>
  )
}

export default Invest