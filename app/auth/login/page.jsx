import React from "react";
import Link from "next/link";
import Form from "./Form";
const page = () => {
  return (
    <>
      <div className="relative z-10 bg-white w-[37%] p-10 rounded-t-3xl rounded-br-3xl">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-[#083e9e]">
            Login to your account
          </h1>
          <p className="text-sm font-light text-[#4a5568]">
            Securely login to your PACEPLOYT
          </p>
        </div>

        <Form />
      </div>
      <div className=" flex  justify-center items-center gap-y-3">
        Don&apos;t have an account?
        <Link href={"/auth/register"} className="text-white text-xs lg:text-lg ml-3 cursor-pointer">
          Register
        </Link>
      </div>
    </>
  );
};

export default page;
